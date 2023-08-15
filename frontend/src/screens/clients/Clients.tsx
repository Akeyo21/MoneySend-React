import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {GET_CLIENTS} from './Clients.query';
import ClientCard from './components/ClientCard';
import Header from './components/Header';

function Clients() {
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
      <Header headerText="Clients" />
      <FlatList
        data={data?.clients}
        renderItem={({item}) => <ClientCard {...item} />}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: '50%',
            backgroundColor: 'green',
            position: 'absolute',
            bottom: 20,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Add Client</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Clients;
