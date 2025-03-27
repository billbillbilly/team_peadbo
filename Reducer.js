import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp, getApps } from 'firebase/app';
import { 
  setDoc, getDocs, addDoc, doc, getFirestore, collection, 
  onSnapshot, getDoc, deleteDoc, updateDoc 
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from "./Secrets";

// ---------------------- Firebase Setup ------------------------
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
  async (authUser) => {
    const userSnap = await getDoc(doc(db, 'peadbo', authUser.uid));
    return userSnap.exists() ? userSnap.data() : null;
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
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: { displayName: "jack", email: "", key: "" },
    listBoards: [
      {
        id: '1',
        title: 'Academic Team',
        description: 'Keep up with team chats, share updates, and stay on top of tasks.',
        type: 'Advisory',
        users: [
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
          'https://randomuser.me/api/portraits/men/3.jpg'
        ],
      },
      {
        id: '2',
        title: 'Swimming Group',
        description: 'Here’s the update on training plans. Also share the progress!',
        type: 'Personal',
        users: [
          'https://randomuser.me/api/portraits/women/4.jpg',
          'https://randomuser.me/api/portraits/men/5.jpg'
        ],
      },
    ],
    tasks: [] // This array holds the tasks
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
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      });
  },
  
});

export const { selectItem } = userSlice.actions;
export default userSlice.reducer;
