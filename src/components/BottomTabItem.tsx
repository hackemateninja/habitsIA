/*
 * Item para navegar en la parte del bottom tab,
 * contiene un ìncono y cambia de color si està seleccionado
 * */

//importaciones multilinea hasta el final
import React from 'react';
import {COLORS} from '../constants';
// @ts-ignore
import {Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './styles';

export default () => {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.hardPrimary]}
      style={Styles.bottomTabItemContainer}>
      <Image
        source={require('../../assets/images/anatrans.png')}
        style={Styles.bottomTabItemImage}
        resizeMode={'contain'}
      />
      <Text style={Styles.bottomTabItemLabel}>Ana</Text>
    </LinearGradient>
  );
};
