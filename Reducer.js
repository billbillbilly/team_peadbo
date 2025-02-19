import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp, getApps } from 'firebase/app';
import { setDoc, getDocs, addDoc, doc, getFirestore, collection, onSnapshot, getDoc, deleteDoc, updateDoc, query, where } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from 'firebase/storage';


// ---------------------- Set up firebase ------------------------
const firebaseConfig = {
  apiKey: "AIzaSyD5DC4VN8KgYAUCHEgSpemD3YJsH1yLbBg",
  authDomain: "team-peadbo.firebaseapp.com",
  projectId: "team-peadbo",
  storageBucket: "team-peadbo.firebasestorage.app",
  messagingSenderId: "376993504498",
  appId: "1:376993504498:web:b26bcbe04dc49008f7046b",
  measurementId: "G-9BBSRCB1J2"
};

let app;
const apps = getApps();
if (apps.length == 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = apps[0];
}
const db = getFirestore(app);
const storage = getStorage(app);


//-------------------- User ---------------------
export const subscribeToUserUpdates = (dispatch) => {
  let snapshotUnsubscribe = undefined;
  if (snapshotUnsubscribe) {
    snapshotUnsubscribe();
  }
  snapshotUnsubscribe = onSnapshot(collection(db, 'peadbo'), usersSnapshot => {
    const updatedUsers = usersSnapshot.docs.map(uSnap => {
      return uSnap.data();
    });
    dispatch(loadUsers(updatedUsers));
  });
}

export const setUser = createAsyncThunk(
  'add/setUser',
  async (authUser) => {
    const userSnap = await getDoc(doc(db, 'peadbo', authUser.uid));
    const user = userSnap.data();
    return user;
  }
)

export const addUser = createAsyncThunk(
  'app/addUser',
  async (user) => {
    // new user
    const userToAdd = {
      displayName: user.displayName,
      email: user.email,
      key: user.uid
    };
    // add the new user to the firebase
    await setDoc(doc(db, 'peadbo', user.uid), userToAdd);
    const userDocRef = doc(db, 'peadbo', user.uid);

    // Add a document to the subcollection
    // const subcollectionRef = collection(userDocRef, 'image');
    // await addDoc(subcollectionRef, {
    //   imageName: 'void',
    //   path: 'void',
    //   date: Date.now(),
    // });
  }
)

export const loadUsers = createAsyncThunk(
  'app/loadUsers',
  async (users) => {
    return [...users];
  }
)

// ---------------------- Async Thunk Templates!!! ------------------------
// fetch user from Firebase
export const fetchUserImagesThunk = createAsyncThunk(
  'app/fetchUserImages',
  async (id) => {
    try {
      // Reference to the user's document
      const userDocRef = doc(db, 'peadbo', id);
      // Reference to the user's 'image' subcollection
      const imageCollectionRef = collection(userDocRef, 'image');
      // Fetch all documents from the 'image' subcollection
      const querySnapshot = await getDocs(imageCollectionRef);
      // Map documents to a list of objects
      const imageList = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      })).filter((image) => image.path !== 'void');
      return imageList;
    } catch (error) {
      console.error('Error fetching user images:', error);
      throw error; 
    }
  }
);

// Async thunk to fetch contacts from Firebase
export const fetchListThunk = createAsyncThunk(
  'lists/fetchList',
  async () => {
    const listsRef = collection(db, 'list');
    const querySnapshot = await getDocs(listsRef);

    if (!querySnapshot.empty) {
      // Map each document to an object with its data and ID
      const listBoards = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        key: doc.id
      }));
      // Return the list of contacts as `listBoards`
      return listBoards;
    } else {
      // Return an empty array if no documents found
      return []; 
    }
  }
);

export const addThunk = createAsyncThunk(
  'lists/add',
  async (item) => {
    const itemRef = collection(db, 'lists');
    const itemSnap = await addDoc(itemRef, {...item, key: Date.now()+Math.random()});
    return {key:contactSnap.id, item};
  }
);

export const updateThunk = createAsyncThunk(
  'lists/update',
  async ({ key, updateditem }) => {
    const docRef = doc(db, 'list', key);
    await updateDoc(docRef, updateditem);
    return {key, updateditem};
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

// ---------------------- Slice Template!!! ------------------------
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {displayName: "jack", email: "", key: ""},
    listBoards: [],
  },
  reducers: {
    selectItem: (state, action) => {
      const key = action.payload;
      state.selectedItem = key !== -1 ? state.listBoards.find(item => item.key === key) : initItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(addThunk.fulfilled, (state, action) => {
        const { key, item } = action.payload;
        state.listBoards.push({...item, key:key});
      })
      .addCase(updateThunk.fulfilled, (state, action) => {
        const {key, updatedItem} = action.payload;
        state.listBoards = state.listBoards.map(item => item.key === key ? { ...updatedItem, key:key } : item);
      })
      .addCase(deleteThunk.fulfilled, (state, action) => {
        const key = action.payload;
        state.listBoards = state.listBoards.filter(item => item.key !== key);
      })
      .addCase(fetchListThunk.fulfilled, (state, action) => {
        state.listBoards = action.payload; // Set listBoards from Firebase
        if (state.listBoards.length >= 1 && Array.isArray(state.listBoards[0].groups)) {
          const g = state.listBoards[0].groups.map(
            item => ({...item,isAssigned: false})
          )
          state.newContact = {...initContact, groups:g};
          state.resetContact = {...initContact, groups:g};
          state.groups = g;
        }
      })
  },
});

export default userSlice.reducer;