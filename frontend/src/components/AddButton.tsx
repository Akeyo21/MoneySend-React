import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import {primary} from '../color.constants';

type props = {
  buttonText: string;
  onPress: () => void;
};
const AddButton = ({buttonText, onPress}: props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: '50%',
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
        <Icon name="add" size={25} style={{color: 'white', marginRight: 2}} />
        <Text style={{color: 'white', fontSize: 20}}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
