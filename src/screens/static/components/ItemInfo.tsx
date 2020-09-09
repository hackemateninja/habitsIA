import React from 'react';
import StaticStyles from '../styles/StaticStyles';
import ItemType from '../types/ItemType';
import {GLOBAL_STYLES} from '../../../constants';
import {Text, View} from 'react-native';
export default ({title, info, color}: ItemType) => {
  const titleStyle = {
    color: color,
    ...GLOBAL_STYLES.h5,
  };

  const itemStyle = {
    borderBottomColor: color,
    ...StaticStyles.itemContainer,
  };

  return (
    <View style={itemStyle}>
      <View>
        <Text style={titleStyle}>{title}</Text>
      </View>
      <View style={{width: '50%'}}>
        <Text style={StaticStyles.infoStyle}>{info}</Text>
      </View>
    </View>
  );
};
