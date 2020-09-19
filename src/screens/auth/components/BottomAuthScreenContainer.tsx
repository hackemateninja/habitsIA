import React from 'react';
import Styles from '../styles/AuthStyles';
import BottomAuthContainerType from '../types/BottomAuthContainerType';
import {ScrollView, Text, View} from 'react-native';

export default ({title, description, children}: BottomAuthContainerType) => {
  return (
    <ScrollView style={Styles.bottomAuthScreen}>
      <View style={Styles.bottomAuthTitleContainer}>
        <Text style={Styles.bottomAuthTitle}>{title}</Text>
        <Text style={Styles.bottomAuthDescription}>{description}</Text>
      </View>
      <View>{children}</View>
    </ScrollView>
  );
};
