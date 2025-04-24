// File that handles user authentication using AWS Amplify Auth module

import { signIn, signOut, signUp, getCurrentUser, fetchUserAttributes, confirmSignUp } from 'aws-amplify/auth';

/**
 * Handles user sign-in with email and password.
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.username - The user's email or username.
 * @param {string} credentials.password - The user's password.
 * @returns {Object|null} - The user's attributes if sign-in is successful, or null if an error occurs.
 */
const handleSignIn = async ({ username, password }) => {
  try {
    const { isSignedIn, nextStep } = await signIn({
      username,
      password,
      options: {
        authFlowType: "USER_PASSWORD_AUTH", // Authentication flow type
      },
    });

    if (isSignedIn) {
      const user = await getCurrentUser(); // Retrieve the current user
      const attributes = await fetchUserAttributes(); // Fetch user attributes
      return attributes; // Return user attributes
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('❌ Error.message:', error.message);
      console.log('❌ Error.name:', error.name);
    }
    console.log('❌ Full error:', JSON.stringify(error, null, 2));
  }
};

/**
 * Handles user sign-out.
 * Logs the user out of the application.
 */
const handleSignOut = async () => {
  try {
    await signOut(); // Sign out the user
  } catch (error) {
    console.log('Error signing out: ', error);
  }
};

/**
 * Handles user sign-up.
 * @param {Object} userDetails - The user's sign-up details.
 * @param {string} userDetails.username - The user's email or username.
 * @param {string} userDetails.password - The user's password.
 * @param {string} userDetails.email - The user's email address.
 * @param {string} userDetails.phone_number - The user's phone number.
 */
const handleSignUp = async ({ username, password, email, phone_number }) => {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email, // User's email
          phone_number, // User's phone number
        },
        // Optional: Enable auto sign-in after sign-up
        // autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });

    console.log(userId); // Log the user ID
  } catch (error) {
    console.log('Error signing up:', error);
  }
};

/**
 * Handles sign-up confirmation.
 * @param {Object} confirmationDetails - The user's confirmation details.
 * @param {string} confirmationDetails.username - The user's email or username.
 * @param {string} confirmationDetails.confirmationCode - The confirmation code sent to the user.
 */
const handleSignUpConfirmation = async ({ username, confirmationCode }) => {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode, // Confirmation code sent to the user
    });
  } catch (error) {
    console.log('Error confirming sign-up:', error);
  }
};

// Exporting the authentication functions for use in other parts of the application
export {
  handleSignIn,
  handleSignUp,
  handleSignUpConfirmation,
  handleSignOut,
};