import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, Text, View} from 'react-native';

import AddButton from '../../components/AddButton';
import {GET_CLIENTS} from './Clients.query';
import {AddClientScreen} from './Clients.screens';
import ClientCard from './components/ClientCard';

function Clients({navigation}: any) {
  const {loading, error, data} = useQuery(GET_CLIENTS);

  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>'Loading...'</Text>
      </View>
    );
  }
  if (error) {
    console.log('ERROR', error);
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>`Error!, error`</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <FlatList
        data={data?.clients}
        renderItem={({item}) => <ClientCard {...item} />}
      />
      <AddButton
        buttonText="Add Client"
        onPress={() => {
          navigation.navigate(AddClientScreen);
        }}
      />
    </View>
  );
}

export default Clients;
