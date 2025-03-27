// auth/GoogleAuth.js

import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { googleAuthConfig } from '../Secrets';
import { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth(navigation) {
  const { expoClientId, androidClientId, iosClientId } = googleAuthConfig;

  // Fallback handling if iosClientId is missing
  if (!iosClientId && Platform.OS === 'ios') {
    console.warn('⚠️ Missing iosClientId for Google Auth');
    return {
      request: null,
      promptAsync: () =>
        Alert.alert('Google Sign-In Unavailable', 'Google login is not configured for iOS.'),
    };
  }

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId,
    androidClientId,
    iosClientId,
  });

  useEffect(() => {
    const authenticate = async () => {
      if (response?.type === 'success') {
        try {
          const { id_token } = response.params;
          const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
          const userCredential = await firebase.auth().signInWithCredential(credential);
          console.log('✅ Login success:', userCredential.user.email);
          navigation.replace('Home');
        } catch (error) {
          console.error('❌ Firebase sign-in error:', error);
          Alert.alert(
            'Google Sign-In Failed',
            error.message || 'Something went wrong during Google login'
          );
        }
      }
    };

    authenticate();
  }, [response]);

  return { promptAsync, request };
}
