import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {primary} from './src/color.constants';
import ClientsStackScreen from './src/screens/clients/Clients.screens';
import ClientRecordsStackScreen from './src/screens/client-records/ClientRecords.screens';

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
            tabBarActiveTintColor: primary,
            tabBarInactiveTintColor: '#4C574C',
            headerShown: false,
            tabBarButton: props => <TouchableOpacity {...props} />,
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: '600',
            },
          }}>
          <Tab.Screen
            name="Clients"
            component={ClientsStackScreen}
            options={{
              tabBarIcon: props => <Icon name="groups" {...props} />,
            }}
          />
          <Tab.Screen
            name="Client Records"
            component={ClientRecordsStackScreen}
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
