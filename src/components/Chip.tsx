import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GLOBAL_STYLES} from '../constants';
import {ChipType} from '../types';

export default ({title, color, textColor, width}: ChipType) => {
  const style = StyleSheet.create({
    chipContainer: {
      borderRadius: 8,
      backgroundColor: color,
      padding: 3,
      width: width,
    },
    textStyle: {
      color: textColor,
      textAlign: 'center',
      ...GLOBAL_STYLES.smallTextBold,
    },
  });

  return (
    <View style={style.chipContainer}>
      <Text style={style.textStyle}>{title}</Text>
    </View>
  );
};
