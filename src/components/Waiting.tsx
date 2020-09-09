import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useCheckAndroid} from '../hooks';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../constants';

const styles = StyleSheet.create({
  waitingContainer: {
    backgroundColor: 'transparent',
    height: LAYOUT.window.height,
    position: 'absolute',
    width: LAYOUT.window.width,
    ...GLOBAL_STYLES.center,
  },
});

export default ({visible}: {visible: boolean}) => {
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
