import React from 'react';
import IconButton from '../../../components/IconButton';
import AuthStyles from '../styles/AuthStyles';
import TopAuthScreenContainerType from '../types/TopAuthScreenContainerType';
import {GLOBAL_STYLES} from '../../../constants';
import {Text, View} from 'react-native';

export default ({title, onPress, colorText}: TopAuthScreenContainerType) => {
  const titleStyle = {
    ...GLOBAL_STYLES.h3,
    color: colorText,
  };
  return (
    <View style={AuthStyles.topAuthScreen}>
      <IconButton
        iconColor={colorText}
        icon="chevron-back-outline"
        onPress={onPress}
      />
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
};
