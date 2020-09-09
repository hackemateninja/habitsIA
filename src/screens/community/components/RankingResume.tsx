import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, GLOBAL_STYLES} from '../../../constants';
import CardRanking from './CardRanking';

export default ({color, title}: {color: string; title: string}) => {
  return (
    <View style={{marginBottom: 30}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: color,
            ...GLOBAL_STYLES.h5,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: COLORS.primary,
            ...GLOBAL_STYLES.p,
          }}>
          Ver más
        </Text>
      </View>
      <CardRanking textColor={color} />
      <CardRanking textColor={color} />
      <CardRanking textColor={color} />
      <CardRanking textColor={color} />
      <CardRanking textColor={color} />
    </View>
  );
};
