import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Clients from './Clients';
import AddClient from './Clients.add-client';
import {screenOptions} from '../style.constants';

export const AddClientScreen = 'Add Client';
const ClientsStackScreen = () => {
  const ClientsStack = createNativeStackNavigator();
  return (
    <ClientsStack.Navigator screenOptions={screenOptions}>
      <ClientsStack.Screen name="Clients" component={Clients} />
      <ClientsStack.Screen name={AddClientScreen} component={AddClient} />
    </ClientsStack.Navigator>
  );
};

export default ClientsStackScreen;
