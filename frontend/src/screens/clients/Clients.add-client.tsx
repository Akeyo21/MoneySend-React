import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';

const AddClient = () => {
  const [name, setName] = useState('');

  return (
    <View style={{padding: 30}}>
      <Text style={{fontWeight: '600', fontSize: 16}}>Name</Text>
      <TextInput
        style={{
          height: 50,
          borderWidth: 1,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          marginTop: 5,
        }}
        autoFocus
        inputMode="text"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        placeholder="First and Last Name"
      />
    </View>
  );
};

export default AddClient;
