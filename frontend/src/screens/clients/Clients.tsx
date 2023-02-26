import {useQuery} from '@apollo/client';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Clients.style';

import {GET_CLIENTS} from '../../../App.query';
import ClientCard from './components/ClientCard';

function Clients() {
  const {loading, error, data} = useQuery(GET_CLIENTS);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    console.log('ERROR', error);
    return <Text>Error : {error.message}</Text>;
  }

  console.log('CLIENTS', data.clients);
  return (
    <View style={styles.container}>
      <ClientCard />
      <ClientCard />

      <ClientCard />
      <ClientCard />
      <ClientCard />
      <ClientCard />
      <ClientCard />
      <ClientCard />
    </View>
  );
}

export default Clients;
