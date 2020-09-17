/*
 * Item para navegar en la parte del bottom tab,
 * contiene un ìncono y cambia de color si està seleccionado
 * */

//importaciones multilinea hasta el final
import React from 'react';
import {COLORS, LAYOUT} from '../constants';
// @ts-ignore
import {Image, StyleSheet, Text} from 'react-native';
import {GLOBAL_STYLES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  bottomTabContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    height: LAYOUT.window.width * 0.13,
    marginBottom: -15,
    padding: 8,
    width: LAYOUT.window.width * 0.13,
    ...GLOBAL_STYLES.columnBetweenCenter,
  },
  image: {width: '70%', height: '70%'},
  label: {
    textAlign: 'center',
    color: COLORS.white,
    ...GLOBAL_STYLES.smallTextBold,
  },
});

export default () => {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.hardPrimary]}
      style={styles.bottomTabContainer}>
      <Image
        source={require('../../assets/images/anatrans.png')}
        style={styles.image}
        resizeMode={'contain'}
      />
      <Text style={styles.label}>Ana</Text>
    </LinearGradient>
  );
};
