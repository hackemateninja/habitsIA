import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useCheckAndroid} from '../hooks';
import {COLORS} from '../constants';
import styles from './styles';

interface WaitingType {
  visible: boolean;
}
export default ({visible}: WaitingType) => {
  const size = useCheckAndroid() ? 75 : 'large';
  if (visible) {
    return (
      <View style={styles.waitingContainer}>
        <ActivityIndicator color={COLORS.primary} size={size} />
      </View>
    );
  }
  return null;
};
