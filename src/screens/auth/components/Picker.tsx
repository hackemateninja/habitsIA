import React from 'react';
import PickerType from '../types/PickerType';
import AuthStyles from '../styles/AuthStyles';
import {Picker} from '@react-native-community/picker';
import {View, Text} from 'react-native';
import {useCheckAndroid} from '../../../hooks';

export default ({label, value, items, onValueChange}: PickerType) => {
  const IOS = !useCheckAndroid();

  if (IOS) {
    return (
      <>
        <Text style={AuthStyles.label}>{label}</Text>
        <Picker
          mode="dropdown"
          selectedValue={value}
          itemStyle={AuthStyles.pickerValueIOS}
          onValueChange={onValueChange}>
          {items.map((item: string) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </>
    );
  }
  return (
    <>
      <Text style={AuthStyles.label}>{label}</Text>
      <View style={AuthStyles.pickerContainer}>
        <Picker
          mode="dropdown"
          selectedValue={value}
          itemStyle={{fontSize: 8}}
          style={{marginTop: -2}}
          onValueChange={onValueChange}>
          {items.map((item: string) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>
    </>
  );
};
