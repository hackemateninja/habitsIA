/*
 * Componente de carga de pantalla, una pantalla completa con un activity
 * indicator que muestra en mensaje de espera
 * */

//importaciones multiples al final
import React from 'react';
import GradientContainer from './GradientContainer';
import {GLOBAL_STYLES, LAYOUT} from '../constants';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {LoadingType} from '../types';
import {CheckAndroid} from '../hooks';

//logo
const LOGO = '../../assets/icons/logo.png';

const styles = StyleSheet.create({
  LoadingContainer: {
    marginTop: LAYOUT.window.width * 0.35,
    ...GLOBAL_STYLES.center,
  },
  ActivityIndicator: {
    marginTop: 30,
    marginBottom: LAYOUT.window.height * 0.2,
  },
});

export default ({topColor, bottomColor, textColor, message}: LoadingType) => {
  const textStyle = {
    color: textColor,
    marginTop: 30,
    ...GLOBAL_STYLES.h6,
  };
  const title = {
    color: textColor,
    marginBottom: LAYOUT.window.height * 0.07,
    ...GLOBAL_STYLES.h1Bold,
  };
  const caption = {
    color: textColor,
    opacity: 0.6,
    ...GLOBAL_STYLES.p,
  };

  const size = CheckAndroid() ? 75 : 'large';
  return (
    <GradientContainer topColor={topColor} bottomColor={bottomColor}>
      <View style={styles.LoadingContainer}>
        <Image style={GLOBAL_STYLES.logo} source={require(LOGO)} />
        <Text style={title}>HABITS.AI</Text>
        <Text style={textStyle}>{`"${message.toUpperCase()}"`}</Text>
        <ActivityIndicator
          size={size}
          color={textColor}
          style={styles.ActivityIndicator}
        />
        <Text style={caption}>Por favor espera</Text>
        <Text style={caption}>Se está cargando la información</Text>
      </View>
    </GradientContainer>
  );
};
