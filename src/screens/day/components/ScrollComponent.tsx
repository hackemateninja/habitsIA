import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import DayStyles from '../styles/DayStyles';

export default ({
  color,
  children,
  title,
}: {
  color: string;
  title: string;
  children: React.ReactNodeArray;
}) => {
  const titleStyle = {
    color: color,
    ...DayStyles.scrollTitle,
  };

  // TODO hacer el componente flat list
  return (
    <View style={DayStyles.scrollContainer}>
      <Text style={titleStyle}>{title}</Text>
      <ScrollView
        horizontal={true}
        alwaysBounceHorizontal={true}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};
