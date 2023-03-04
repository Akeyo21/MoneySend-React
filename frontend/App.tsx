/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Clients from './src/screens/Clients';

function App(): JSX.Element {
  const client = new ApolloClient({
    uri: 'http://192.168.0.11:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Clients />
    </ApolloProvider>
  );
}

export default App;
