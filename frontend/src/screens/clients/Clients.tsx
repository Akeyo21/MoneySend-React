import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, View} from 'react-native';

import {GET_CLIENTS} from '../../../App.query';
import ClientCard from './components/ClientCard';
import {testData} from './Clients.test-data';
import Header from './components/Header';

function Clients() {
  // const {loading, error, data} = useQuery(GET_CLIENTS);
  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }
  // if (error) {
  //   console.log('ERROR', error);
  //   return <Text>Error : {error.message}</Text>;
  // }

  // console.log('CLIENTS', data.clients);

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <FlatList
        data={testData}
        ListHeaderComponent={<Header headerText="Clients" />}
        renderItem={({item}) => <ClientCard {...item} />}
      />
    </View>
  );
}

export default Clients;
