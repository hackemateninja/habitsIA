/*
 * Header con acciones de cada pantalla como habrir el drawer o ir hacia atrás
 * */

//importaciones múltiples al final
import React from 'react';
import IconButton from './IconButton';
import {Text, View, StyleSheet} from 'react-native';
import {GLOBAL_STYLES} from '../constants';
import {HeaderType} from '../types';

const styles = StyleSheet.create({
  HeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 5,
    width: '100%',
  },
});

export default ({
  title,
  leftAction,
  hasBack,
  background,
  textColor,
}: HeaderType) => {
  const headerStyle = {
    ...styles.HeaderContainer,
    backgroundColor: background,
  };

  return (
    <View style={headerStyle}>
      <IconButton
        icon={!hasBack ? 'md-menu' : 'chevron-back-outline'}
        iconColor={textColor}
        onPress={leftAction}
      />
      <Text style={[GLOBAL_STYLES.p, {color: textColor}]}>{title}</Text>
      <IconButton icon={'ios-menu-outline'} iconColor="transparent" onPress={() => {}} />
    </View>
  );
};
