import { signIn, signOut, getCurrentUser, fetchUserAttributes, } from 'aws-amplify/auth';

// Sign in with email and password
const signIn_ = async ({username, password}) => {

  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    if (isSignedIn) {
      const user = await getCurrentUser();
      const attributes = await fetchUserAttributes();

      const userId = attributes.sub;
      const userName = attributes.name || '';
      const userEmail = attributes.email;
      console.log(userId);
      return user;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('❌ Error.message:', error.message);
      console.log('❌ Error.name:', error.name);
    }
    console.log('❌ Full error:', JSON.stringify(error, null, 2));
  }
  
};

export {
  signIn_,
};
