import React from 'react';
import {Text, View} from 'react-native';

type props = {
  headerText: string;
};
const Header = ({headerText}: props) => {
  return (
    <View>
      <Text
        style={{
          textTransform: 'capitalize',
          color: 'black',
        }}>
        {headerText}
      </Text>
    </View>
  );
};

export default Header;
