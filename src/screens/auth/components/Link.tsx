import React from 'react';
import LinkType from '../types/LinkType';
import AuthStyles from '../styles/AuthStyles';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default ({text, onPress}: LinkType) => {
  return (
    <View style={AuthStyles.linkContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={AuthStyles.link}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
