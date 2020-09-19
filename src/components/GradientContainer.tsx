/*
 * Contenedor con degradado que se usa en las pantallas que tienen degradado
 * */

//importaciones múltiples al final
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, GLOBAL_STYLES} from '../constants';
import {KeyboardAvoidingView, SafeAreaView, StatusBar} from 'react-native';
import {GradientContainerType} from '../types';
import {useCheckAndroid} from '../hooks';

export default ({children, topColor, bottomColor}: GradientContainerType) => {
  const barStyleColor =
    topColor === COLORS.white || topColor === COLORS.softGrey;

  const barStyle = barStyleColor ? 'dark-content' : 'light-content';
  const behavior = useCheckAndroid() ? 'height' : 'padding';
  const styleSafeArea = {
    backgroundColor: topColor,
    ...GLOBAL_STYLES.screen,
  };
  return (
    <>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={topColor}
        animated={true}
      />
      <SafeAreaView style={styleSafeArea}>
        <KeyboardAvoidingView behavior={behavior} style={GLOBAL_STYLES.screen}>
          <LinearGradient
            style={GLOBAL_STYLES.screen}
            colors={[topColor, bottomColor]}>
            {children}
          </LinearGradient>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};
