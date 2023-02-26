/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from '@apollo/client';
import {GET_CLIENTS} from './App.query';

function Clients() {
  const {loading, error, data} = useQuery(GET_CLIENTS);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    console.log('ERROR', error);
    return <Text>Error : {error.message}</Text>;
  }
  const backgroundStyle = {
    backgroundColor: 'red', //isDarkMode ? Colors.lighter : Colors.lighter,
  };

  console.log('CLIENTS', data.clients);
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>Hello</Text>
        {data.clients.map(({name}: any, index: number) => (
          // <View style={{height: '100%', backgroundColor: 'red'}}>
          <Text key={index}>{name}</Text>
          // </View>;
        ))}
      </View>
    </SafeAreaView>
  );
}

function App(): JSX.Element {
  const client = new ApolloClient({
    uri: 'http://192.168.0.11:4000/graphql',
    cache: new InMemoryCache(),
  });

  // return data.clients.map(({name}: any) => {
  //   <View style={{height: '100%', backgroundColor: 'red'}}>
  //     <Text style={{color: 'black'}}>{name}</Text>;
  //   </View>;
  // });

  return (
    <ApolloProvider client={client}>
      <Clients />
    </ApolloProvider>
  );
}

export default App;
