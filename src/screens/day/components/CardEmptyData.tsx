import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, GLOBAL_STYLES} from '../../../constants';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import DayStyles from '../styles/DayStyles';
import CardEmptyDataType from '../types/CardEmptyDataType';

export default ({title, color, colorText}: CardEmptyDataType) => {
  const cardStyle = {
    backgroundColor: color,
    ...DayStyles.cardEmptyData,
  };

  const circleStyle = {
    backgroundColor:
      colorText === COLORS.white
        ? COLORS.secondaryTransparent
        : COLORS.softGrey,
    ...DayStyles.cardEmptyCircle,
  };

  const titleStyle = {
    color: colorText,
    ...GLOBAL_STYLES.p,
  };

  return (
    <View style={cardStyle}>
      <View style={circleStyle}>
        <Icon
          name="md-checkmark-done-outline"
          size={40}
          color={COLORS.primary}
        />
      </View>
      <View>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </View>
  );
};
