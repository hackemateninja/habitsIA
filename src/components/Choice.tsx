/*
 * Componente que sirve para elegir un item de algùn objetivo
 * */

//importaciones múltiples al final
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, GLOBAL_STYLES} from '../constants';
import {ChoiceType} from '../types';

const styles = StyleSheet.create({
  choice: {
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
});

export default ({title, isSelected, onPress}: ChoiceType) => {
  const choiceStyle = {
    ...styles.choice,
    backgroundColor: isSelected ? COLORS.primary : 'transparent',
    borderColor: isSelected ? COLORS.hardPrimary : COLORS.semiBlue,
  };

  const textStyle = {
    color: isSelected ? COLORS.white : COLORS.semiBlue,
  };
  return (
    <TouchableOpacity onPress={onPress} style={choiceStyle}>
      <Text style={[GLOBAL_STYLES.p, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
