/*
 * Item para navegar en la parte del bottom tab,
 * contiene un ìncono y cambia de color si està seleccionado
 * */

//importaciones multilinea hasta el final
import React from 'react';
import {COLORS} from '../constants';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import {GLOBAL_STYLES} from '../constants';
import {BottomTabItemType} from '../types';

const styles = StyleSheet.create({
  bottomTabContainer: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.2,
    height: GLOBAL_STYLES.iconSize.fontSize + 3,
    justifyContent: 'center',
    width: GLOBAL_STYLES.iconSize.fontSize + 6,
  },
});

export default ({focused, icon, colors}: BottomTabItemType) => {
  const bottomTabItemStyle = {
    backgroundColor: focused
      ? colors.bottomTabActive
      : colors.bottomTabInactive,
    borderColor: COLORS.softPrimary,
    ...styles.bottomTabContainer,
  };

  const color = focused ? COLORS.white : COLORS.primary;

  return (
    <Icon
      name={icon}
      color={color}
      size={GLOBAL_STYLES.iconSize.fontSize - 2}
    />
  );
};
