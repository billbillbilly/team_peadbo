import AppContainer from './AppContainer';
// import { Amplify } from 'aws-amplify';
import { amplifyAPI } from './Secrets'; 
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Amplify.configure(amplifyAPI);

// Create the HTTP link to AppSync
const httpLink = createHttpLink({
  uri: amplifyAPI.API.GraphQL.endpoint,
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
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer/>
    </ApolloProvider>
  );
}