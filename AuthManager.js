import { signIn, signOut, signUp, getCurrentUser, fetchUserAttributes, confirmSignUp} from 'aws-amplify/auth';

// Sign in with email and password
const handleSignIn = async ({username, password}) => {

  try {
    const { isSignedIn, nextStep } = await signIn({ 
      username, 
      password,
      options: {
        authFlowType: "USER_PASSWORD_AUTH",
      },
    });
    if (isSignedIn) {
      const user = await getCurrentUser();
      const attributes = await fetchUserAttributes();
      return attributes;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('❌ Error.message:', error.message);
      console.log('❌ Error.name:', error.name);
    }
    console.log('❌ Full error:', JSON.stringify(error, null, 2));
  }
  
};

const handleSignOut = async() => {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

const handleSignUp = async({ username, password, email, phone_number }) => {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number 
        },
        // optional
        // autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    console.log(userId);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

const handleSignUpConfirmation = async({ username, confirmationCode }) => {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode
    });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

export {
  handleSignIn,
  handleSignUp,
  handleSignUpConfirmation,
  handleSignOut
};
