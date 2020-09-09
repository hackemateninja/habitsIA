import React from 'react';
import CareStyles from '../styles/CareStyles';
import {Image, Text, View} from 'react-native';

const avatarAna = require('../../../../assets/images/avatarana.png');

export default ({
  text,
  type,
  color,
}: {
  text: string;
  type: string;
  color: any;
}) => {
  const isBubbleIn = type === 'in';

  const bubbleStyle = {
    backgroundColor: isBubbleIn ? color.bubbleIn : color.bubbleOut,
    ...CareStyles.bubbleStyle,
  };
  const bubbleContainerStyle = {
    flexDirection: isBubbleIn ? 'row' : 'row-reverse',
    ...CareStyles.bubbleContainer,
  };
  const colorText = {
    color: isBubbleIn ? color.bubbleInText : color.bubbleOutText,
  };

  return (
    // @ts-ignore
    <View style={bubbleContainerStyle}>
      <View style={CareStyles.bubbleAvatar}>
        <Image style={CareStyles.avatar} source={avatarAna} />
      </View>
      <View style={bubbleStyle}>
        <Text style={colorText}>{text}[ </Text>
      </View>
    </View>
  );
};
