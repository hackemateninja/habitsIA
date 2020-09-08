/*
 * Botòn largo que ocupa el 100% del contenedor padre
 * */

//comentarios multilìnea al final
import React from 'react';
import {ButtonType} from '../types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../constants';

const styles = StyleSheet.create({
  buttonContainer: {
    ...GLOBAL_STYLES.center,
    borderRadius: 12,
    paddingVertical: Number(LAYOUT.window.height / 70),
    width: '100%',
  },
});

export default ({
  disable = false,
  title,
  action,
  colorText = COLORS.white,
  color = COLORS.hardGrey,
}: ButtonType) => {
  const buttonStyle = {
    ...styles.buttonContainer,
    backgroundColor: disable ? COLORS.grey : color,
  };

  const buttonTextStyle = {
    ...GLOBAL_STYLES.p,
    color: colorText,
  };

  // por defecto siempre devuelve un touchable que activa una función llamada onPress
  return (
    <TouchableOpacity disabled={disable} onPress={action} style={buttonStyle}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
