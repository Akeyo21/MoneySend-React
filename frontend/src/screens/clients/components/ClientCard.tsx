import React from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import {formatMoneyText} from '../../../utils/moneyFormatter';
import {clientType} from '../Clients.type';
import Icon from 'react-native-vector-icons/MaterialIcons';

const text: StyleProp<TextStyle> = {
  color: 'black',
};

const amountTextStyle: StyleProp<TextStyle> = {...text, fontWeight: '200'};

const ClientCard = ({
  name,
  phoneNumber,
  outstandingBalance,
  interest,
}: clientType) => {
  return (
    <View
      style={{
        padding: '5%',
        margin: '5%',
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 9,
        backgroundColor: 'white',
        shadowColor: '#026600',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 2,
          height: 5,
        },
      }}>
      <Icon name="account-circle" size={40} color="#026600" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          marginLeft: 10,
        }}>
        <View>
          <Text style={{...text, fontWeight: '500'}}>{name}</Text>
          <Text style={{...text, fontWeight: '300'}}>{phoneNumber}</Text>
        </View>

        <View>
          <Text style={amountTextStyle}>
            {formatMoneyText(outstandingBalance)}
          </Text>
          <Text style={amountTextStyle}>{formatMoneyText(interest)}</Text>
        </View>
      </View>
    </View>
  );
};

export default ClientCard;
