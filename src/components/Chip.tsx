import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface ChipType {
  title: string;
  color: string;
  textColor: string;
  width: any;
}

export default ({title, color, textColor, width}: ChipType) => {
  const chipStyle = {
    backgroundColor: color,
    width: width,
    ...styles.chipContainer,
  };

  const chipTextStyle = {
    color: textColor,
    ...styles.chipText,
  };

  return (
    <View style={chipStyle}>
      <Text style={chipTextStyle}>{title}</Text>
    </View>
  );
};
