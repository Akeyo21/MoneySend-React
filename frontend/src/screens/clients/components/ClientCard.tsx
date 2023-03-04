import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Clients.style';
import {clientType} from '../Clients.type';

const ClientCard = ({
  name,
  phoneNumber,
  totalAmountBorrowed,
  totalInterestDue,
}: clientType) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{phoneNumber}</Text>
      </View>

      <View>
        <Text style={styles.text}>{totalAmountBorrowed}</Text>
        <Text style={styles.text}>{totalInterestDue}</Text>
      </View>
    </View>
  );
};

export default ClientCard;
