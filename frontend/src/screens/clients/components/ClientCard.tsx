import React from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import {formatMoneyText} from '../../../utils/moneyFormatter';
import {clientType} from '../Clients.type';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {primary} from '../../../color.constants';

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
        paddingLeft: '5%',
        paddingVertical: '5%',
        margin: '5%',
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 9,
        backgroundColor: 'white',
        shadowColor: '#026600',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: -1,
          height: 5,
        },
      }}>
      <Icon name="account-circle" size={40} color={primary} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          marginLeft: 10,
        }}>
        <View>
          <Text style={{...text, fontWeight: '500'}}>{name}</Text>
          <Text style={{...text, fontWeight: '300', marginTop: 5}}>
            {phoneNumber}
          </Text>
        </View>

        <View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="payments"
              color={primary}
              size={15}
              style={{marginRight: 5}}
            />

            <Text style={amountTextStyle}>
              {formatMoneyText(outstandingBalance)}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Icon
              name="percent"
              color={primary}
              size={15}
              style={{marginRight: 5}}
            />
            <Text style={amountTextStyle}>{formatMoneyText(interest)}</Text>
          </View>
        </View>
      </View>

      <View>
        <Icon
          name="chevron-right"
          color={primary}
          size={45}
          style={{opacity: 0.7}}
        />
      </View>
    </View>
  );
};

export default ClientCard;
