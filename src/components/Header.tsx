/*
 * Header con acciones de cada pantalla como habrir el drawer o ir hacia atrás
 * */

//importaciones múltiples al final
import React from 'react';
import IconButton from './IconButton';
import {Text, View} from 'react-native';
import {GLOBAL_STYLES} from '../constants';
import styles from './styles';

interface HeaderType {
  title: string;
  leftAction: any;
  hasBack: boolean;
  background: string;
  textColor: string;
}

export default ({
  title,
  leftAction,
  hasBack,
  background,
  textColor,
}: HeaderType) => {
  const headerStyle = {
    backgroundColor: background,
    ...styles.headerContainer,
  };

  return (
    <View style={headerStyle}>
      <IconButton
        icon={!hasBack ? 'md-menu' : 'chevron-back-outline'}
        iconColor={textColor}
        onPress={leftAction}
      />
      <Text style={[GLOBAL_STYLES.p, {color: textColor}]}>{title}</Text>
      <IconButton
        icon={'ios-menu-outline'}
        iconColor="transparent"
        onPress={() => {}}
      />
    </View>
  );
};
