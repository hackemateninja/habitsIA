/*
 * Botòn largo que ocupa el 100% del contenedor padre
 * */

//comentarios multilìnea al final
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS, GLOBAL_STYLES} from '../constants';
import styles from './styles';

interface ButtonType {
  disable?: boolean;
  title: string;
  action: any;
  colorText: string;
  color: string;
}

export default ({
  disable = false,
  title,
  action,
  colorText = COLORS.white,
  color = COLORS.hardGrey,
}: ButtonType) => {
  const buttonStyle = {
    backgroundColor: disable ? COLORS.grey : color,
    ...styles.buttonContainer,
  };

  const buttonTextStyle = {
    color: colorText,
    ...GLOBAL_STYLES.p,
  };

  // por defecto siempre devuelve un touchable que activa una función llamada onPress
  return (
    <TouchableOpacity disabled={disable} onPress={action} style={buttonStyle}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
