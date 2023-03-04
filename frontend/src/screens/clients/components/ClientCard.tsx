import React from 'react';
import {Text, View} from 'react-native';
import {clientType} from '../Clients.type';

const text = {
  color: 'black',
};

const ClientCard = ({
  name,
  phoneNumber,
  totalAmountBorrowed,
  totalInterestDue,
}: clientType) => {
  return (
    <View
      style={{
        padding: '5%',
        margin: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        elevation: 9,
        backgroundColor: 'white',
      }}>
      <View>
        <Text style={text}>{name}</Text>
        <Text style={text}>{phoneNumber}</Text>
      </View>

      <View>
        <Text style={text}>{totalAmountBorrowed}</Text>
        <Text style={text}>{totalInterestDue}</Text>
      </View>
    </View>
  );
};

export default ClientCard;
