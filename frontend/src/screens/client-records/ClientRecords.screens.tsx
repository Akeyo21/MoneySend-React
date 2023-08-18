import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ClientRecords from './ClientRecords';

const ClientRecordsStackScreen = () => {
  const ClientRecordsStack = createNativeStackNavigator();
  return (
    <ClientRecordsStack.Navigator>
      <ClientRecordsStack.Screen
        name="Client Records"
        component={ClientRecords}
      />
    </ClientRecordsStack.Navigator>
  );
};

export default ClientRecordsStackScreen;
