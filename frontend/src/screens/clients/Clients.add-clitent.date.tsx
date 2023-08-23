import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import {primary} from '../../color.constants';
import {formatDate} from '../../utils/dateFormatter';

const DateChange = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 16}}>{formatDate(date)}</Text>
      <Icon
        name="calendar-today"
        color={primary}
        size={20}
        onPress={() => {
          setOpen(true);
        }}
      />
      <DatePicker
        date={date}
        onDateChange={setDate}
        mode="date"
        modal
        open={open}
        onConfirm={(pickedDate: any) => {
          setOpen(false);
          setDate(pickedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DateChange;
