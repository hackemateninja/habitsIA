import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, GLOBAL_STYLES} from '../../../constants';
import {IconButton} from '../../../components';

export default ({textColor}: {textColor: String}) => {
  return (
    <View
      style={{
        width: '100%',
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.grey,
        paddingBottom: 20,
        ...GLOBAL_STYLES.rowBetweenCenter,
      }}>
      <View style={{width: '20%', ...GLOBAL_STYLES.rowBetweenCenter}}>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.greenHard,
            borderRadius: 20,
            marginRight: -30,
          }}
        />
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.green,
            borderRadius: 20,
            marginLeft: 5,
          }}
        />
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.greenPastel,
            borderRadius: 20,
            marginLeft: -25,
          }}
        />
      </View>
      <View style={{width: '60%'}}>
        <Text
          style={{
            color: textColor,
            ...GLOBAL_STYLES.p,
          }}>
          Equipo 1
        </Text>
      </View>
      <IconButton
        onPress={() => {}}
        size={26}
        icon="ios-chevron-forward-outline"
        iconColor={COLORS.hardPrimary}
      />
    </View>
  );
};
