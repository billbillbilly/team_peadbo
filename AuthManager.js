
import { getAuth, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  signOut as fbSignOut, 
  initializeAuth, 
  getReactNativePersistence,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithCredential
} from 'firebase/auth';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from 'firebase/app';

import { app } from './Reducer'; // Import Firebase instance from Reducer.js
import * as Google from 'expo-auth-session/providers/google';
import { setUser } from "./Reducer";

let auth;

// Initialize Firebase Auth
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
} catch (error) {
  auth = getAuth(app); // If auth is already initialized
}

// ---------------------- Google Sign-In ------------------------
export async function signInWithGoogle() {
  try {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
      clientId: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
    });

    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credential);
      console.log("✅ Google Sign-In Successful!");
    } else {
      console.log("❌ Google Sign-In Failed!");
    }
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
}

// ---------------------- Subscribe to Auth Changes ------------------------
const subscribeToAuthChanges = (navigation, dispatch) => {
  onAuthStateChanged(auth, (authUser) => {
    if (authUser) { 
      dispatch(setUser(authUser));
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  });
};

// ---------------------- Other Auth Functions ------------------------
const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const signUp = async (displayName, email, password) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCred.user, { displayName: displayName });
  return userCred.user;
};

const signOut = async () => {
  await fbSignOut(auth);
};

const getAuthUser = () => {
  return auth.currentUser;
};

export { signUp, signIn, signOut, getAuthUser, subscribeToAuthChanges, signInWithGoogle };
