
import React from 'react';
import AppContainer from './AppContainer';
import { Amplify } from 'aws-amplify';
import { amplifyAPI, firebaseConfig } from './Secrets';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Include Firebase Auth

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Configure AWS Amplify
Amplify.configure(amplifyAPI);

export default function App() {
  return <AppContainer />;
}
