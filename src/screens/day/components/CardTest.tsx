import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, GLOBAL_STYLES} from '../../../constants';
import DayStyles from '../styles/DayStyles';
import CardTestType from '../types/CardTestType';
import {IconButton} from '../../../components';

export default (props: CardTestType) => {
  const {
    background,
    colorText,
    title,
    onPress,
    description,
    circleColor,
  } = props;

  const cardStyle = {
    backgroundColor: background,
    ...DayStyles.cardContainerLarge,
  };

  const titleStyle = {
    color: colorText,
    marginVertical: 10,
    ...GLOBAL_STYLES.p,
  };
  const descriptionStyle = {
    color: colorText,
    marginBottom: 8,
    ...GLOBAL_STYLES.smallText,
  };

  const cardIcon = {
    backgroundColor: circleColor,
    ...DayStyles.cardIcon,
  };
  return (
    <TouchableOpacity onPress={onPress} style={cardStyle}>
      <View style={cardIcon}>
        <IconButton
          onPress={() => {}}
          iconColor={COLORS.primary}
          icon={'md-copy'}
        />
      </View>
      <View style={DayStyles.cardTitle}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descriptionStyle}>{description}</Text>
      </View>
      <IconButton
        onPress={() => {}}
        iconColor={colorText}
        icon={'ios-arrow-forward'}
      />
    </TouchableOpacity>
  );
};
