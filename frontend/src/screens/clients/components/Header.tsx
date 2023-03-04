import React from 'react';
import {Text, View} from 'react-native';

type props = {
  headerText: string;
};
const Header = ({headerText}: props) => {
  return (
    <View
      style={{
        height: 50,
        elevation: 9,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}>
      <Text
        style={{
          textTransform: 'capitalize',
          color: 'black',
          fontSize: 40,
          fontWeight: '600',
        }}>
        {headerText}
      </Text>
    </View>
  );
};

export default Header;
