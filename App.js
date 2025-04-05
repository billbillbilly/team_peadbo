import React from 'react';
import AppContainer from './AppContainer';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';

import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client';
// import { createAuthLink } from '@aws-amplify/api-graphql';
import { createAuthLink } from 'aws-appsync-auth-link';
import { fetchAuthSession } from '@aws-amplify/auth';
import { firebaseConfig } from './Secrets';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Include Firebase Auth

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Configure AWS Amplify
Amplify.configure(amplifyconfig);

const url = amplifyconfig.aws_appsync_graphqlEndpoint;
const region = amplifyconfig.aws_appsync_region;
const auth = {
  type: amplifyconfig.aws_appsync_authenticationType,
  apiKey: amplifyconfig.aws_appsync_apiKey,
  jwtToken: async () => {
    const session = await fetchAuthSession();
    return session.tokens?.accessToken?.toString() || '';
  }
};

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
]);

export const apolloClient = new ApolloClient({
  connectToDevTools: true, // process.env.NODE_ENV === 'development',
  link,
  cache: new InMemoryCache({})
});

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppContainer/>
    </ApolloProvider>
  );
}