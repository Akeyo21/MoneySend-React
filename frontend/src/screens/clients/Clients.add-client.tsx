import React, {useState, useRef} from 'react';
import {TextInput, View, Text} from 'react-native';
import {primary} from '../../color.constants';

const AddClient = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [referee, setReferee] = useState('');
  const [nameInputIsFocused, setNameIsFocused] = useState(false);
  const [numberInputIsFocused, setNumberIsFocused] = useState(false);
  const [refereeInputIsFocused, setRefereeInputIsFocused] = useState(false);

  return (
    <View style={{padding: 30}}>
      <Text style={{fontWeight: '600', fontSize: 16}}>Name</Text>
      <TextInput
        style={{
          height: 50,
          borderWidth: 1,
          padding: 10,
          backgroundColor: 'white',
          borderColor: nameInputIsFocused ? primary : 'grey',
          borderRadius: 5,
          marginTop: 5,
        }}
        onFocus={() => {
          setNameIsFocused(true);
        }}
        onBlur={() => {
          setNameIsFocused(false);
        }}
        autoFocus
        inputMode="text"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        placeholder="First and Last Name"
      />

      <View style={{marginTop: 20}}>
        <Text style={{fontWeight: '600', fontSize: 16}}>Phone Number</Text>
        <TextInput
          style={{
            height: 50,
            borderWidth: 1,
            padding: 10,
            backgroundColor: 'white',
            borderColor: numberInputIsFocused ? primary : 'grey',
            borderRadius: 5,
            marginTop: 5,
          }}
          onFocus={() => {
            setNumberIsFocused(true);
          }}
          onBlur={() => {
            setNumberIsFocused(false);
          }}
          inputMode="tel"
          value={phone}
          onChangeText={setPhone}
          placeholder="0712345678"
        />
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{fontWeight: '600', fontSize: 16}}>Referee</Text>
        <TextInput
          style={{
            height: 50,
            borderWidth: 1,
            padding: 10,
            backgroundColor: 'white',
            borderColor: refereeInputIsFocused ? primary : 'grey',
            borderRadius: 5,
            marginTop: 5,
          }}
          onFocus={() => {
            setRefereeInputIsFocused(true);
          }}
          onBlur={() => {
            setRefereeInputIsFocused(false);
          }}
          inputMode="text"
          value={referee}
          onChangeText={setReferee}
          placeholder="First and Last Name"
        />
      </View>
    </View>
  );
};

export default AddClient;
