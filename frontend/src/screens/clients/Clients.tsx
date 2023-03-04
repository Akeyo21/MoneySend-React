import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {testData} from './Clients.test-data';
import ClientCard from './components/ClientCard';
import Header from './components/Header';

function Clients() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <Header headerText="Clients" />
      <FlatList
        data={testData}
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
