import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import * as queries from './src/graphql/queriesCopy';
import * as mutations from './src/graphql/mutations';
import { createPeadboBoard } from './src/graphql/mutations';



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

export const fetchEvents = async (boardId) => {
  try {
    const result = await client.graphql({
      query: queries.listPeadboEvents,
      variables: {
        filter: {
          boardID: { eq: boardId }, // Filter events by the board ID
        },
      },
    });
    return result.data.listPeadboEvents.items;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

export const fetchEvent = async (eventId) => {
  try {
    const result = await client.graphql({
      query: queries.getPeadboEvent,
      variables: { id: eventId },
    });
    return result.data.getPeadboEvent;
  } catch (error) {
    console.error('Error fetching event:', error);
  }
};

export const addEvent = async (event) => {
  try {
    const result = await client.graphql({
      query: mutations.createPeadboEvent,
      variables: { input: event },
    });
    return result.data.createPeadboEvent;
  } catch (error) {
    console.error('Error adding event:', error);
  }
};

export const updateEvent = async (event) => {
  try {
    const result = await client.graphql({
      query: mutations.updatePeadboEvent,
      variables: { input: event },
    });
    return result.data.updatePeadboEvent;
  } catch (error) {
    console.error('Error updating event:', error);
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const result = await client.graphql({
      query: mutations.deletePeadboEvent,
      variables: { input: { id: eventId } },
    });
    return result.data.deletePeadboEvent;
  } catch (error) {
    console.error('Error deleting event:', error);
  }
};

export const fetchUserContacts = async (userId) => {
  try {
    if (!userId) {
      throw new Error('Invalid userId');
    }

    const result = await client.graphql({
      query: queries.listPeadboUserContacts,
      variables: {
        filter: {
          peadboUserID: { eq: userId }, // Filter contacts by the user's ID
        },
      },
    });

    if (!result.data || !result.data.listPeadboUserContacts) {
      throw new Error('Invalid response from server');
    }

    return result.data.listPeadboUserContacts.items || [];
  } catch (error) {
    console.error('Error fetching user contacts:', error);
    throw error;
  }
};

export const addUserContact = async (contact) => {
  try {
    const result = await client.graphql({
      query: mutations.createPeadboUserContact,
      variables: { input: contact },
    });
    return result.data.createPeadboUserContact;
  } catch (error) {
    console.error('Error adding user contact:', error);
  }
};

export const fetchTasks = async (boardId) => {
  try {
    const result = await client.graphql({
      query: queries.listPeadboTasks,
      variables: {
        filter: {
          boardID: { eq: boardId }, // Filter tasks by the board ID
        },
      },
    });
    return result.data.listPeadboTasks.items;
  }
  catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const fetchTask = async (taskId) => {
  try {
    const result = await client.graphql({
      query: queries.getPeadboTask,
      variables: { id: taskId },
    });
    return result.data.getPeadboTask;
  } catch (error) {
    console.error('Error fetching task:', error);
  }
};

export const addTask = async (task) => {
  try {
    const result = await client.graphql({
      query: mutations.createPeadboTask,
      variables: { input: task },
    });
    return result.data.createPeadboTask;
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const updateTask = async (task) => {
  try {
    const result = await client.graphql({
      query: mutations.updatePeadboTask,
      variables: { input: task },
    });
    return result.data.updatePeadboTask;
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

export const completeTask = async (taskId) => {
  try {
    const result = await client.graphql({
      query: mutations.updatePeadboTask,
      variables: {
        input: { id: taskId, completed: true },
      },
    });
    return result.data.updatePeadboTask;
  } catch (error) {
    console.error('Error completing task:', error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const result = await client.graphql({
      query: mutations.deletePeadboTask,
      variables: { input: { id: taskId } },
    });
    return result.data.deletePeadboTask;
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};


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
