/*
 * Componente que sirve para elegir un item de algùn objetivo
 * */

//importaciones múltiples al final
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, GLOBAL_STYLES} from '../constants';
import styles from './styles';

interface ChoiceType {
  title: string;
  isSelected: boolean;
  onPress: any;
}

export default ({title, isSelected, onPress}: ChoiceType) => {
  const choiceStyle = {
    backgroundColor: isSelected ? COLORS.primary : 'transparent',
    borderColor: isSelected ? COLORS.hardPrimary : COLORS.semiBlue,
    ...styles.choice,
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
