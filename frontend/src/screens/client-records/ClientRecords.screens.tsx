import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ClientRecords from './ClientRecords';
import AddClientRecord from './ClientRecords.add';
import {screenOptions} from '../style.constants';

export const addClientRecordScreen = 'Add Client Record';
const ClientRecordsStackScreen = () => {
  const ClientRecordsStack = createNativeStackNavigator();
  return (
    <ClientRecordsStack.Navigator
      screenOptions={{...screenOptions, headerBackTitle: 'Records'}}>
      <ClientRecordsStack.Screen
        name="Client Records"
        component={ClientRecords}
      />
      <ClientRecordsStack.Screen
        name={addClientRecordScreen}
        component={AddClientRecord}
      />
    </ClientRecordsStack.Navigator>
  );
};

export default ClientRecordsStackScreen;
