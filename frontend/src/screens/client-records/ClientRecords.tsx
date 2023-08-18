import React from 'react';
import {View, Text} from 'react-native';
import AddButton from '../../components/AddButton';
import {addClientRecordScreen} from './ClientRecords.screens';

const ClientRecords = ({navigation}: any) => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Text>CLIENT RECORDS HERE</Text>
      </View>
      <AddButton
        buttonText="Add Client Record"
        onPress={() => {
          navigation.navigate(addClientRecordScreen);
        }}
      />
    </View>
  );
};

export default ClientRecords;
