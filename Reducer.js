import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';

import { initializeApp, getApps } from 'firebase/app';
import { 
  setDoc, getDocs, addDoc, doc, getFirestore, collection, 
  onSnapshot, getDoc, deleteDoc, updateDoc 
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from "./Secrets";

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

// ---------------------- Thunks Definitions ------------------------

// setUser thunk
export const setUser = createAsyncThunk(
  'user/setUser',
  async (userInfo) => {
    console.log(userInfo.name);
    // Optional: more backend services can be added
    return {
      id: userInfo.sub,
      email: userInfo.email,
      name: userInfo.name || '',
    };
  }
);

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
  currentUser: {displayName: "jack", email: "", key: ""}, // test only. It will be removed very soon
  id: null,
  email: null,
  name: null,
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.fulfilled, (state, action) => {
        const { id, email, name } = action.payload;
        state.id = id;
        state.email = email;
        state.name = name;
      })
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(addTaskThunk.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(completeTaskThunk.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload);
        if (index !== -1) {
          state.tasks[index].completed = true;
        }
      })
      .addCase(updateTaskThunk.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  },
  
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
