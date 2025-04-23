import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';

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
import { createPeadboBoard } from './src/graphql/mutations';

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

// ---------------------- fetch data ------------------------
const client = generateClient();
// queries: listPeadboBoards, getPeadboBoard

// list all boards after login
export const fetchBoards = async (userId) => {
  try {
    const result = await client.graphql({
      query: queries.listPeadboBoards,
      variables: {
        filter: {
          author: { eq: userId }, // Filter boards by the logged-in user's ID
        },
      },
    });
    return result.data.listPeadboBoards.items;
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

// setUser thunk
export const setUser = createAsyncThunk(
  'user/setUser',
  async (userInfo) => {
    // console.log('Setting user...');
    const userId = userInfo.sub; // Logged-in user's ID
    // console.log('User Info:', userInfo);
    // console.log('User ID:', userId);

    const allBoards = await fetchBoards(userId); // Fetch boards for the logged-in user
    // console.log('Fetched Boards:', allBoards);

    const allMembers = await fetchBoardMembers(); // Fetch board members (if needed)
    // console.log('Fetched Members:', allMembers);

    return {
      id: userId,
      email: userInfo.email,
      name: userInfo.name || '',
      boards: allBoards, // Store only the user's boards
      members: allMembers,
    };
  }
);

// Fetch tasks
export const fetchTasksThunk = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const snapshot = await getDocs(collection(db, 'tasks'));
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched tasks from backend:', tasks); // Debugging
    return tasks;
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
  async (taskId, { rejectWithValue }) => {
    try {
      console.log('Deleting task from backend:', taskId); // Debugging
      await deleteDoc(doc(db, 'tasks', taskId)); // Ensure this is the correct deletion logic
      return taskId; // Return the deleted task ID
    } catch (error) {
      console.error('Error deleting task from backend:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const addBoardThunk = createAsyncThunk(
  'boards/addBoard',
  async (boardData, { rejectWithValue }) => {
    try {
      const result = await client.graphql({
        query: createPeadboBoard,
        variables: { input: boardData },
      });
      return result.data.createPeadboBoard;
    } catch (error) {
      console.error('Error creating board:', error);
      return rejectWithValue(error.message);
    }
  }
);

// ---------------------- Redux Slice Definition ------------------------

const initialState = {
  currentUser: {
    displayName: "Test User", // Temporary name for testing
    email: "testuser@example.com", // Temporary email for testing
    id: "test-user-id", // Temporary user ID
  },
  id: null,
  email: null,
  name: null,
  allBoards: [],
  allMembers: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearUser(state) {
      state.id = null;
      state.email = null;
      state.name = null;
      state.allBoards = [];
      state.allMembers = null;
    },
    addBoard(state, action) {
      state.allBoards.push(action.payload);
    },
    deleteBoard: (state, action) => {
      state.allBoards = state.allBoards.filter((board) => board.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.fulfilled, (state, action) => {
        const { id, email, name, boards, members } = action.payload;
        state.currentUser = {id, email, name}
        state.id = id;
        state.email = email;
        state.name = name;
        state.allBoards = boards;
        state.allMembers = members;
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
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(addBoardThunk.fulfilled, (state, action) => {
        state.allBoards.push(action.payload); // Add the new board to the state
      })
      .addCase(addBoardThunk.rejected, (state, action) => {
        console.error('Failed to add board:', action.payload); // Log the error
      });
  },
  
});

export const { clearUser, addBoard, deleteBoard } = userSlice.actions;
export default userSlice.reducer;
