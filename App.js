
import React from 'react';
import AppContainer from './AppContainer';
import { Amplify } from 'aws-amplify';
// import config from './src/amplifyconfiguration.json';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as queries from './src/graphql/queries';
import { amplifyAPI, firebaseConfig } from './Secrets';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Include Firebase Auth

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Configure AWS Amplify
Amplify.configure(amplifyAPI);


// export default function App() {
//   return (
//     <AppContainer/>
//   );
// }

// Create the HTTP link to AppSync
const httpLink = createHttpLink({
  uri: amplifyAPI.API.GraphQL.endpoint,
  credentials: 'same-origin'
});

// Add the API key to the headers
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': amplifyAPI.API.GraphQL.apiKey,
    },
  };
});

// Combine auth and http link
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  region: amplifyAPI.API.GraphQL.region,
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer/>
    </ApolloProvider>
  );
}
