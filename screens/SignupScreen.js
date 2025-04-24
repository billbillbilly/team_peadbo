import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { signUp } from '../AuthManager'; // Function to handle user signup
import { useGoogleAuth } from '../auth/GoogleAuth'; // Google Sign-Up functionality
import { Icon } from '@rneui/themed';

const SignupScreen = ({ navigation }) => {
  // State variables for managing user input and UI behavior
  const [name, setName] = useState(''); // Full name input
  const [email, setEmail] = useState(''); // Email input
  const [password, setPassword] = useState(''); // Password input
  const [confirmPassword, setConfirmPassword] = useState(''); // Confirm password input
  const [loading, setLoading] = useState(false); // Loading state for signup button
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const { promptAsync, request } = useGoogleAuth(navigation); // Google Sign-Up hooks

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    return emailRegex.test(email);
  };

  // Function to handle the signup process
  const handleSignup = async () => {
    // Validate input fields
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    setLoading(true); // Show loading indicator

    // Uncomment the following lines to enable signup functionality
    // try {
    //   await signUp(name, email, password); // Call the signup function
    //   Alert.alert('Success', 'Account created successfully');
    //   navigation.replace('Home'); // Redirect to HomeScreen
    // } catch (error) {
    //   console.error(error);
    //   Alert.alert('Signup failed', error.message || 'Something went wrong');
    // } finally {
    //   setLoading(false); // Hide loading indicator
    // }

    // Temporary navigation for onboarding
    navigation.navigate('NewUserOnboarding', { screen: 'PersonalInformationScreen' });
  };

  return (
    <View style={styles.container}>
      {/* Background Overlay */}
      <View style={styles.backgroundOverlay} />

      {/* Logo */}
      <Image source={require('../assets/Peadbo_Logo_Alternate1.png')} style={styles.logo} />

      {/* Signup Form */}
      <View style={styles.signupBox}>
        <Text style={styles.title}>Create A New Peadbo Account</Text>

        {/* Full Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!passwordVisible} // Toggle password visibility
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              type="feather"
              color="#777"
              size={20}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
        />

        {/* Signup Button */}
        <TouchableOpacity
          style={[styles.button, loading && styles.disabledButton]}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign Up</Text>}
        </TouchableOpacity>

        {/* Google Sign-Up Button */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => {
            if (request) {
              promptAsync(); // Trigger Google Sign-Up
            } else {
              Alert.alert(
                'Google Sign-Up not configured',
                'Please set up your Google client ID to enable this feature.'
              );
            }
          }}
          disabled={!request}
        >
          <Image source={require('../assets/google-icon.png')} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        {/* Back to Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.link}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1EA896', // Green background
    padding: 20,
  },
  backgroundOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#1EA896',
  },
  logo: {
    width: '40%', // Logo width as a percentage of screen width
    height: '25%', // Logo height as a percentage of screen height
    resizeMode: 'contain', // Maintain aspect ratio
    marginBottom: 50, // Space below the logo
  },
  signupBox: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 15,
    color: '#777',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SignupScreen;