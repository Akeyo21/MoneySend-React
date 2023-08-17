/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Clients from './src/screens/clients/Clients';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

function App(): JSX.Element {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#026600',
            tabBarInactiveTintColor: '#4C574C',
            tabBarButton: props => <TouchableOpacity {...props} />,
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: '600',
            },
          }}>
          <Tab.Screen
            name="Clients"
            component={Clients}
            options={{
              tabBarIcon: props => <Icon name="groups" {...props} />,
            }}
          />
          <Tab.Screen
            name="Client Records"
            component={Clients}
            options={{
              tabBarIcon: props => <Icon name="view-list" {...props} />,
            }}
          />
        </Tab.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}

export default App;
