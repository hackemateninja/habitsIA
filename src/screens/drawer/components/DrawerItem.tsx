/*
 * Item clickeable que va en la navegación redirige a una patalla nueva
 * contiene nombre e ícono
 * */

//importaciones múltiples al final
import React from 'react';
import {DrawerItemType} from '../../../components/types';
import {IconButton} from '../../../components';
import {COLORS} from '../../../constants';
import {Text, TouchableOpacity, View} from 'react-native';
import DrawerStyle from '../styles/DrawerStyle';

export default ({onPress, focused, icon, label, color}: DrawerItemType) => {
  const itemContainer = {
    backgroundColor: focused ? COLORS.primary : 'transparent',
    ...DrawerStyle.itemContainer,
  };

  const itemText = {
    color: focused ? COLORS.black : color,
    ...DrawerStyle.itemText,
  };

  const iconColor = focused ? COLORS.black : COLORS.primary;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={itemContainer}>
        <IconButton onPress={() => {}} icon={icon} iconColor={iconColor} />
        <Text style={itemText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
