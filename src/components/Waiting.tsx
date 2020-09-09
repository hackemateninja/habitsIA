import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useCheckAndroid} from '../hooks';
import {LAYOUT} from '../constants';

const styles = StyleSheet.create({
  waitingContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    height: LAYOUT.window.height,
    justifyContent: 'center',
    position: 'absolute',
    width: LAYOUT.window.width,
  },
});

export default ({color, visible}: {color: string; visible: boolean}) => {
  const size = useCheckAndroid() ? 75 : 'large';
  if (visible) {
    return (
      <View style={styles.waitingContainer}>
        <ActivityIndicator color={color} size={size} />
      </View>
    );
  }
  return null;
};
