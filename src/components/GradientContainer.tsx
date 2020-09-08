/*
 * Contenedor con degradado que se usa en las pantallas que tienen degradado
 * */

//importaciones múltiples al final
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, GLOBAL_STYLES} from '../constants';
import {SafeAreaView, StatusBar} from 'react-native';
import {GradientContainerType} from '../types';

export default ({children, topColor, bottomColor}: GradientContainerType) => {
  const barStyleColor =
    topColor === COLORS.white || topColor === COLORS.softGrey;

  const barStyle = barStyleColor ? 'dark-content' : 'light-content';

  return (
    <>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={topColor}
        animated={true}
      />
      <SafeAreaView style={[GLOBAL_STYLES.screen, {backgroundColor: topColor}]}>
        <LinearGradient
          style={GLOBAL_STYLES.screen}
          colors={[topColor, bottomColor]}>
          {children}
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};
