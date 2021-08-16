//Packages
import 'react-native-gesture-handler';
import React from 'react';
import store from './src/states/state'
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//navigator
import StackNavigator from './src/navigator/Stack';
import { AuthProvider } from './src/provider';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/cks8sh60z0us801xq5zbdf8cz/master',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </ApolloProvider>
    </Provider>
  );
};