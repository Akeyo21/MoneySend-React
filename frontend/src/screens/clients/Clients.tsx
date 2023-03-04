import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './Clients.style';

import {GET_CLIENTS} from '../../../App.query';
import ClientCard from './components/ClientCard';
import {clientType} from './Clients.type';

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
  const testData: clientType[] = [
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
    {
      name: 'Michelle Amy',
      phoneNumber: '0721345678',
      totalAmountBorrowed: 10000,
      totalInterestDue: 1000,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={testData}
        renderItem={({item}) => <ClientCard {...item} />}
      />
    </View>
  );
}

export default Clients;
