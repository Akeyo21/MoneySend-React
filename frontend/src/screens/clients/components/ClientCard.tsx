import React from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import {clientType} from '../Clients.type';

const text: StyleProp<TextStyle> = {
  color: 'black',
};

const amountTextStyle: StyleProp<TextStyle> = {...text, fontWeight: '200'};

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
        shadowColor: 'green',
        shadowOpacity: 0.1,
      }}>
      <View>
        <Text style={{...text, fontWeight: '500'}}>{name}</Text>
        <Text style={{...text, fontWeight: '300'}}>{phoneNumber}</Text>
      </View>

      <View>
        <Text style={amountTextStyle}>{totalAmountBorrowed}</Text>
        <Text style={amountTextStyle}>{totalInterestDue}</Text>
      </View>
    </View>
  );
};

export default ClientCard;
