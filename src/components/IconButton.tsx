/*
 * Botón que contne un ícono que ejecuta una acción
 * */

import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {GLOBAL_STYLES} from '../constants';
import {IconButtonType} from '../types';

export default ({icon, onPress, iconColor, size}: IconButtonType) => {
  const setSize = size ? size : GLOBAL_STYLES.iconSize.fontSize;

  return (
    <TouchableOpacity onPress={onPress} style={{padding: 5}}>
      <Icon name={icon} size={setSize} color={iconColor} />
    </TouchableOpacity>
  );
};
