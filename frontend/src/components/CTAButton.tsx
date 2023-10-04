import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {primary} from '../color.constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

type props = {
  buttonText: string;
  onPress: () => void;
  iconName: string;
};
const CTAButton = ({buttonText, onPress, iconName}: props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: '60%',
          backgroundColor: primary,
          position: 'absolute',
          bottom: 20,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          flexDirection: 'row',
        }}
        onPress={onPress}>
        <Icon
          name={iconName}
          size={25}
          style={{color: 'white', marginRight: 2}}
        />
        <Text style={{color: 'white', fontSize: 20}}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CTAButton;
