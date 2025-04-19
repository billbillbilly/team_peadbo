import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { initializeApp, getApps } from 'firebase/app';
import { 
  setDoc, getDocs, addDoc, doc, getFirestore, collection, 
  onSnapshot, getDoc, deleteDoc, updateDoc 
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from "./Secrets";

import { generateClient } from 'aws-amplify/api';
import * as queries from './src/graphql/queriesCopy';
import * as mutations from './src/graphql/mutations';

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

// models: https://github.com/jmelendev/peadbo-apps/tree/main/libs/graphql/src/models

// ---------------------- fetch data ------------------------
const client = generateClient();
// queries: listPeadboBoards, getPeadboBoard

// list all boards after login
export const fetchBoards = async () => {
  try {
    const result = await client.graphql({
      query: queries.listPeadboBoards,
    });
    return result.data.listPeadboBoards.items;;
  } catch (error) {
    console.error('Error fetching boards:', error);
  }
};

// get a board by a board id
export const fetchBoard = async (id) => {
  try {
    const board = await client.graphql({
      query: queries.getPeadboBoard,
      variables: { id: id }
    });
    return board.data.getPeadboBoard;
  } catch (error) {
    console.error('Error fetching board:', error);
  }
};

// list all Board Members
export const fetchBoardMembers = async () => {
  try {
    const result = await client.graphql({
      query: queries.listPeadboBoardMembers,
    });
    return result.data.listPeadboBoardMembers.items;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// get a member by a member id
export const fetchMember = async (id) => {
  try {
    const result = await client.graphql({
      query: queries.getPeadboBoardMember,
      variables: { id: id }
    });
    return result.data.getPeadboBoardMember;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// list all task

// setUser thunk
export const setUser = createAsyncThunk(
  'user/setUser',
  async (userInfo) => {
    console.log('set user...');
    console.log(userInfo.sub);
    const allBoards = await fetchBoards();
    const allMembers = await fetchBoardMembers();
    // const b = await fetchBoard(allBoards[0].id);//test a single data
    // console.log('m:', allMembers);

    // Optional: more backend services can be added
    return {
      id: userInfo.sub,
      email: userInfo.email,
      name: userInfo.name || '',
      boards: allBoards,
      members: allMembers,
    };
  }
);

// ----------------- mutations --------------------

// add task
export const createTask = async (input) => {
  try {
    const result = await client.graphql({
      query: mutations.createPeadboTask,
      variables: { input }
    });
    return result.data.createPeadboTask;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


// update Notification
const updateNotification = async (notificationId, updateFields) => {
  try {
    const input = {
      id: notificationId,     // ID is always required
      ...updateFields         // Any fields you want to update
    };

    const result = await client.graphql({
      query: mutations.updatePeadboNotification,
      variables: { input }
    });

    console.log('Updated notification:', result.data.updatePeadboNotification);
    return result.data.updatePeadboNotification;
  } catch (error) {
    console.error('Error updating notification:', error);
    throw error;
  }
};

//--------------- will remove firebase ---------------

// Fetch tasks
export const fetchTasksThunk = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const snapshot = await getDocs(collection(db, 'tasks'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
);

// Add a task
export const addTaskThunk = createAsyncThunk(
  'tasks/addTask',
  async (task) => {
    const ref = await addDoc(collection(db, 'tasks'), { ...task, completed: false });
    return { id: ref.id, ...task, completed: false };
  }
);

export const updateTaskThunk = createAsyncThunk(
  'tasks/updateTask',
  async (updatedTask) => {
    const { id, ...dataToUpdate } = updatedTask;
    console.log('Updating task:', id, dataToUpdate); // For debugging
    const taskRef = doc(db, 'tasks', id);
    await updateDoc(taskRef, dataToUpdate);
    return updatedTask; // Return the updated task
  }
);

// Mark a task complete (this one is already there)
export const completeTaskThunk = createAsyncThunk(
  'tasks/completeTask',
  async (taskId) => {
    await updateDoc(doc(db, 'tasks', taskId), { completed: true });
    return taskId;
  }
);

// Delete a task
export const deleteTaskThunk = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId) => {
    await deleteDoc(doc(db, 'tasks', taskId));
    return taskId;
  }
);

// ---------------------- Redux Slice Definition ------------------------

const initialState = {
  currentUser: {displayName: "jack", email: "", key: ""}, // test only. It will be removed
  id: null,
  email: null,
  name: null,
  allBoards: null,
  allMembers: null,
  // Add more if needed
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearUser(state) {
      state.id = null;
      state.email = null;
      state.name = null;
      state.allBoards = null;
      state.allMembers = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.fulfilled, (state, action) => {
        const { id, email, name, boards, members } = action.payload;
        state.id = id;
        state.email = email;
        state.name = name;
        state.allBoards = boards;
        state.allMembers = members;
      });
  },
  
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
