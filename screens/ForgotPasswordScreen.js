// Forgot password functionality initially configured for firebase -- it will need to be reimplemented
// to be compatible with the AWS auth system.

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const ForgotPasswordScreen = ({ navigation }) => {
  // State to store the user's email input
  const [email, setEmail] = useState('');

  // Function to validate the email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for validating email
    return emailRegex.test(email);
  };

  // Function to handle the password reset process
  const handleReset = async () => {
    // Validate the email input
    if (!email || !validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      // Send a password reset email using Firebase
      await firebase.auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'A password reset link has been sent to your email.');
      navigation.goBack(); // Navigate back to the login screen
    } catch (error) {
      // Handle errors during the password reset process
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'This email is not registered.');
      } else {
        Alert.alert('Error', error.message || 'Something went wrong.');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust layout for the keyboard
      style={styles.container}
    >
      {/* App Logo */}
      <Image source={require('../assets/Peadbo_Logo_Alternate1.png')} style={styles.logo} />

      {/* Reset Password Form */}
      <View style={styles.box}>
        <Text style={styles.title}>Reset Your Password</Text>
        <Text style={styles.instructions}>
          Enter your email address and we'll send you a link to reset your password.
        </Text>

        {/* Email Input Field */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none" // Prevent auto-capitalization for email input
        />

        {/* Send Reset Link Button */}
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>

        {/* Back to Login Link */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>← Back to Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1EA896', // Green background color
    alignItems: 'center', // Center content horizontally
    padding: 20, // Padding around the content
    justifyContent: 'center', // Center content vertically
  },
  logo: {
    width: '40%', // Logo width as a percentage of the screen width
    height: '25%', // Logo height as a percentage of the screen height
    resizeMode: 'contain', // Maintain aspect ratio of the logo
    marginBottom: 30, // Space below the logo
  },
  box: {
    width: '100%', // Full width of the container
    backgroundColor: '#fff', // White background for the form
    padding: 20, // Padding inside the form
    borderRadius: 10, // Rounded corners
    elevation: 3, // Shadow for Android
  },
  title: {
    fontSize: 20, // Font size for the title
    fontWeight: 'bold', // Bold font weight
    marginBottom: 15, // Space below the title
    color: '#333', // Dark gray text color
  },
  instructions: {
    fontSize: 14, // Font size for the instructions
    color: '#555', // Medium gray text color
    marginBottom: 15, // Space below the instructions
  },
  input: {
    borderColor: '#ccc', // Light gray border color
    borderWidth: 1, // Border width
    height: 45, // Height of the input field
    borderRadius: 5, // Rounded corners
    paddingHorizontal: 10, // Horizontal padding inside the input
    backgroundColor: '#F9F9F9', // Light gray background color
    marginBottom: 15, // Space below the input field
  },
  button: {
    backgroundColor: '#007bff', // Blue background color for the button
    padding: 12, // Padding inside the button
    borderRadius: 5, // Rounded corners
    alignItems: 'center', // Center text inside the button
    marginBottom: 10, // Space below the button
  },
  buttonText: {
    color: '#fff', // White text color
    fontWeight: 'bold', // Bold font weight
  },
  backLink: {
    color: '#007bff', // Blue text color for the back link
    textAlign: 'center', // Center the text
    marginTop: 10, // Space above the back link
  },
});

export default ForgotPasswordScreen;