import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Clients.style';
const ClientCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text}>Michelle Amy</Text>
        <Text style={styles.text}>0721345678</Text>
      </View>

      <View>
        <Text style={styles.text}>10,000</Text>
        <Text style={styles.text}>1,000</Text>
      </View>
    </View>
  );
};

export default ClientCard;
