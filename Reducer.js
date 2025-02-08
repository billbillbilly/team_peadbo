import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { initializeApp, getApps } from 'firebase/app';
// import { setDoc, getDocs, addDoc, doc, getFirestore, collection, onSnapshot, getDoc, deleteDoc, updateDoc, query, where } from 'firebase/firestore';
// import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
// import { firebaseConfig } from "./Secrets";

// ---------------------- Set up firebase ------------------------
// let app;
// const apps = getApps();
// if (apps.length == 0) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = apps[0];
// }
// const db = getFirestore(app);
// const storage = getStorage(app);


//-------------------- User ---------------------
export const subscribeToUserUpdates = (dispatch) => {
  let snapshotUnsubscribe = undefined;
  if (snapshotUnsubscribe) {
    snapshotUnsubscribe();
  }
  snapshotUnsubscribe = onSnapshot(collection(db, 'users'), usersSnapshot => {
    const updatedUsers = usersSnapshot.docs.map(uSnap => {
      return uSnap.data();
    });
    dispatch(loadUsers(updatedUsers));
  });
}

export const setUser = createAsyncThunk(
  'add/setUser',
  async (authUser) => {
    const userSnap = await getDoc(doc(db, 'users', authUser.uid));
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
    await setDoc(doc(db, 'users', user.uid), userToAdd);
    const userDocRef = doc(db, 'users', user.uid);
    const subcollectionRef = collection(userDocRef, 'image');
    // Add a document to the subcollection
    await addDoc(subcollectionRef, {
      imageName: 'void',
      path: 'void',
      date: Date.now(),
    });
  }
)

export const loadUsers = createAsyncThunk(
  'chat/loadUsers',
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
      const userDocRef = doc(db, 'users', id);
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
      const listItems = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        key: doc.id
      }));
      // Return the list of contacts as `listItems`
      return listItems;
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
  name: 'lists',
  initialState: {
    currentUser: {},
    initItem: "",
    listItems: [],
  },
  reducers: {
    selectItem: (state, action) => {
      const key = action.payload;
      state.selectedItem = key !== -1 ? state.listItems.find(item => item.key === key) : initItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(addThunk.fulfilled, (state, action) => {
        const { key, item } = action.payload;
        state.listItems.push({...item, key:key});
      })
      .addCase(updateThunk.fulfilled, (state, action) => {
        const {key, updatedItem} = action.payload;
        state.listItems = state.listItems.map(item => item.key === key ? { ...updatedItem, key:key } : item);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        const key = action.payload;
        state.listItems = state.listItems.filter(item => item.key !== key);
      })
      .addCase(fetchListThunk.fulfilled, (state, action) => {
        state.listItems = action.payload; // Set listItems from Firebase
        if (state.listItems.length >= 1 && Array.isArray(state.listItems[0].groups)) {
          const g = state.listItems[0].groups.map(
            item => ({...item,isAssigned: false})
          )
          state.newContact = {...initContact, groups:g};
          state.resetContact = {...initContact, groups:g};
          state.groups = g;
        }
      })
  },
});

export { addUser, setUser };
export const { selectItem } = userSlice.actions;
export default userSlice.reducer;