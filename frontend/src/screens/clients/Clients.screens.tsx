import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Clients from './Clients';
import AddClient from './Clients.add-client';

export const AddClientScreen = 'Add Client';
const ClientsStackScreen = () => {
  const ClientsStack = createNativeStackNavigator();
  return (
    <ClientsStack.Navigator>
      <ClientsStack.Screen name="Clients" component={Clients} />
      <ClientsStack.Screen name={AddClientScreen} component={AddClient} />
    </ClientsStack.Navigator>
  );
};

export default ClientsStackScreen;
