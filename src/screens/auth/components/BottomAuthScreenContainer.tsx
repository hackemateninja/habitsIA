import React from 'react';
import Styles from '../styles/AuthStyles';
import BottomAuthContainerType from '../types/BottomAuthContainerType';
import {useCheckAndroid} from '../../../hooks';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';

export default ({title, description, children}: BottomAuthContainerType) => {
  const behavior = useCheckAndroid() ? 'height' : 'padding';

  return (
    <ScrollView style={Styles.bottomAuthScreen}>
      <KeyboardAvoidingView behavior={behavior}>
        <View style={Styles.bottomAuthTitleContainer}>
          <Text style={Styles.bottomAuthTitle}>{title}</Text>
          <Text style={Styles.bottomAuthDescription}>{description}</Text>
        </View>
        <View>{children}</View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
