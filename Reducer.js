import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp, getApps } from 'firebase/app';
import { 
  setDoc, getDocs, addDoc, doc, getFirestore, collection, 
  onSnapshot, getDoc, deleteDoc, updateDoc, query, where 
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from "./Secrets";
import { GraphQLAPI } from '@aws-amplify/api-graphql';
import { amplifyAPI } from './Secrets'; 

import { generateClient } from 'aws-amplify/api';
import * as queries from './graphql/queries';


///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
//        ✅ Use direct fetch() for schema introspection or diagnostics          //
// Use Amplify's GraphQLAPI.graphql() for regular AppSync queries and mutations. //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////

//---- check database scheme ------
const introspectionQuery = `
  query Introspect {
    __schema {
      types {
        name
        kind
        fields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  }
`;


export const fetchSchemaStructure = async () => {
  console.log('API when fetching schema:', GraphQLAPI);
  try {
      // const result = await GraphQLAPI.graphql({ query: introspectionQuery });
      // console.log('Schema:', JSON.stringify(result.data.__schema, null, 2));
      const response = await fetch(amplifyAPI.API.GraphQL.endpoint, {
        method: 'POST',
        headers: {
            'x-api-key': amplifyAPI.API.GraphQL.apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: introspectionQuery
        })
      });
      const json = await response.json();
      console.log('Direct fetch response:', JSON.stringify(json, null, 2));
  } catch (error) {
      console.error('Failed to fetch schema:', error);
  }
};

const client = generateClient();
// const result = await client.graphql({ query: queries.listPeadboTasks });
// console.log('Tasks:', result.data.listPeadboTasks.items);


// ---------------------- Set up firebase ------------------------
let app;
const apps = getApps();
if (apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = apps[0];
}
const db = getFirestore(app);
const storage = getStorage(app);

export const subscribeToUserUpdates = (dispatch) => {
  let snapshotUnsubscribe = undefined;
  if (snapshotUnsubscribe) {
    snapshotUnsubscribe();
  }
  snapshotUnsubscribe = onSnapshot(collection(db, 'peadbo'), usersSnapshot => {
    const updatedUsers = usersSnapshot.docs.map(uSnap => uSnap.data());
    dispatch(loadUsers(updatedUsers));
  });
};

export const setUser = createAsyncThunk(
  'user/setUser',
  async (authUser) => {
    const userSnap = await getDoc(doc(db, 'peadbo', authUser.uid));
    return userSnap.exists() ? userSnap.data() : null;
  }
);

export const addUser = createAsyncThunk(
  'user/addUser',
  async (user) => {
    const userToAdd = {
      displayName: user.displayName,
      email: user.email,
      key: user.uid
    };
    await setDoc(doc(db, 'peadbo', user.uid), userToAdd);
  }
);

export const loadUsers = createAsyncThunk(
  'user/loadUsers',
  async () => {
    const usersSnap = await getDocs(collection(db, 'peadbo'));
    return usersSnap.docs.map(doc => doc.data());
  }
);

// ---------------------- Profile Settings & Persistence ---------------------

export const loadProfileSettings = createAsyncThunk(
  'user/loadProfileSettings',
  async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('profileSettings');
      return savedSettings ? JSON.parse(savedSettings) : { notificationsEnabled: true, darkMode: false };
    } catch (error) {
      console.error("Error loading profile settings:", error);
      return { notificationsEnabled: true, darkMode: false };
    }
  }
);

export const updateProfileSetting = createAsyncThunk(
  'user/updateProfileSetting',
  async ({ key, value }) => {
    try {
      const settings = await AsyncStorage.getItem('profileSettings');
      const newSettings = settings ? JSON.parse(settings) : {};
      newSettings[key] = value;
      await AsyncStorage.setItem('profileSettings', JSON.stringify(newSettings));
      return newSettings;
    } catch (error) {
      console.error("Error updating profile settings:", error);
      return {};
    }
  }
);

// ---------------------- Fetch & Manage User Data ---------------------

export const fetchUserImagesThunk = createAsyncThunk(
  'app/fetchUserImages',
  async (id) => {
    try {
      const userDocRef = doc(db, 'peadbo', id);
      const imageCollectionRef = collection(userDocRef, 'image');
      const querySnapshot = await getDocs(imageCollectionRef);
      const imageList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })).filter((image) => image.path !== 'void');
      return imageList;
    } catch (error) {
      console.error('Error fetching user images:', error);
      throw error; 
    }
  }
);

export const fetchListThunk = createAsyncThunk(
  'lists/fetchList',
  async () => {
    const listsRef = collection(db, 'list');
    const querySnapshot = await getDocs(listsRef);
    return querySnapshot.docs.map(doc => ({ ...doc.data(), key: doc.id })) || [];
  }
);

export const addThunk = createAsyncThunk(
  'lists/add',
  async (item) => {
    const itemRef = collection(db, 'lists');
    const itemSnap = await addDoc(itemRef, { ...item, key: Date.now() + Math.random() });
    return { key: itemSnap.id, item };
  }
);

export const updateThunk = createAsyncThunk(
  'lists/update',
  async ({ key, updatedItem }) => {
    const docRef = doc(db, 'list', key);
    await updateDoc(docRef, updatedItem);
    return { key, updatedItem };
  }
);

export const deleteThunk = createAsyncThunk(
  'lists/delete',
  async (key) => {
    const docRef = doc(db, 'lists', key);
    await deleteDoc(docRef);
    return key;
  }
);

// ---------------------- Redux Slice Definition ------------------------

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {displayName: "jack", email: "", key: ""},
    listBoards: [
      {
        id: '1',
        title: 'Academic Team',
        description: 'Keep up with team chats, share updates, and stay on top of tasks.',
        type: 'Advisory',
        users: ['https://randomuser.me/api/portraits/women/1.jpg', 'https://randomuser.me/api/portraits/men/2.jpg', 'https://randomuser.me/api/portraits/men/3.jpg'],
      },
      {
        id: '2',
        title: 'Swimming Group',
        description: 'Here’s the update on training plans. Also share the progress!',
        type: 'Personal',
        users: ['https://randomuser.me/api/portraits/women/4.jpg', 'https://randomuser.me/api/portraits/men/5.jpg'],
      },
    ],
  },
  reducers: {
    selectItem: (state, action) => {
      const key = action.payload;
      state.selectedItem = key !== -1 ? state.listBoards.find(item => item.key === key) : null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.fulfilled, (state, action) => {
        state.currentUser = action.payload || { displayName: "Unknown", email: "", key: "" };
      })
      .addCase(loadProfileSettings.fulfilled, (state, action) => {
        state.profileSettings = action.payload;
      })
      .addCase(updateProfileSetting.fulfilled, (state, action) => {
        state.profileSettings = action.payload;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.listBoards = action.payload;
      })
      .addCase(fetchUserImagesThunk.fulfilled, (state, action) => {
        state.userImages = action.payload;
      })
      .addCase(fetchListThunk.fulfilled, (state, action) => {
        state.listBoards = action.payload;
      })
      .addCase(addThunk.fulfilled, (state, action) => {
        state.listBoards.push({ ...action.payload.item, key: action.payload.key });
      })
      .addCase(updateThunk.fulfilled, (state, action) => {
        state.listBoards = state.listBoards.map(item => item.key === action.payload.key ? { ...action.payload.updatedItem, key: action.payload.key } : item);
      })
      .addCase(deleteThunk.fulfilled, (state, action) => {
        state.listBoards = state.listBoards.filter(item => item.key !== action.payload);
      });
  },
});

export const { selectItem } = userSlice.actions;
export default userSlice.reducer;
