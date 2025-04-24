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
import { useDispatch } from 'react-redux';
import { setUser } from '../Reducer';
import { useGoogleAuth } from '../auth/GoogleAuth';
import { Icon } from '@rneui/themed';
import { handleSignIn } from '../AuthManager';
import { TEAM_PEADBO_PASSWORD, TEAM_PEADBO_USERNAME } from '../Secrets';

const LoginScreen = ({ navigation }) => {
  // State variables for managing user input and UI behavior
  const [email, setEmail] = useState(TEAM_PEADBO_USERNAME || ''); // Default email for testing
  const [password, setPassword] = useState(TEAM_PEADBO_PASSWORD || ''); // Default password for testing
  const [loading, setLoading] = useState(false); // Loading state for login button
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const { promptAsync, request } = useGoogleAuth(navigation); // Google Sign-In hooks

  const dispatch = useDispatch(); // Redux dispatch function

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    return emailRegex.test(email);
  };

  // Function to handle login
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setLoading(true); // Show loading indicator

    try {
      const user = await handleSignIn({ username: email, password }); // Authenticate user
      dispatch(setUser(user)); // Save user data to Redux
      navigation.navigate('Main', { screen: 'Home' }); // Navigate to Home screen
    } catch (error) {
      console.error(error);
      Alert.alert('Login failed', error.message || 'Invalid email or password');
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Overlay */}
      <View style={styles.backgroundOverlay} />

      {/* App Logo */}
      <Image source={require('../assets/Peadbo_Logo_Alternate1.png')} style={styles.logo} />

      {/* Login Form */}
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>

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

        {/* Forgot Password Link */}
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button, loading && styles.disabledButton]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
        </TouchableOpacity>

        {/* Google Sign-In Button */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => {
            if (request) {
              promptAsync(); // Trigger Google Sign-In
            } else {
              Alert.alert(
                'Google Sign-In not configured',
                'Please set up your Google client ID to enable this feature.'
              );
            }
          }}
          disabled={!request}
        >
          <Image source={require('../assets/google-icon.png')} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Sign Up Navigation */}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.link}>Sign Up</Text>
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
  loginBox: {
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
  },
  passwordInput: {
    flex: 1,
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 15,
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
  signUpText: {
    marginTop: 15,
    color: '#777',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;