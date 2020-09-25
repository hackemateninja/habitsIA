import React, {ReactNode, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../constants';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  sheetOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: LAYOUT.window.height,
    position: 'absolute',
    width: LAYOUT.window.width,
  },
  sheetOverlayTouchable: {
    height: LAYOUT.window.height,
  },
  sheetPickerContainer: {
    height: '70%',
  },
  sheetText: {
    color: COLORS.primary,
    textAlign: 'right',
    ...GLOBAL_STYLES.h6,
  },
});

export default ({
  visible,
  onClose,
  children,
}: {
  visible: boolean;
  onClose: any;
  children: ReactNode;
}) => {
  const height = useSharedValue(0);

  const animatedSheet = useAnimatedStyle(() => {
    return {
      backgroundColor: COLORS.softGrey,
      borderRadius: 14,
      bottom: 10,
      height: height.value,
      padding: 15,
      position: 'absolute',
      width: LAYOUT.window.width,
    };
  });

  useEffect(() => {
    if (visible) {
      height.value = withTiming(LAYOUT.window.height * 0.4, {
        duration: 300,
        easing: Easing.in(Easing.exp),
      });
    }
  }, [visible]);

  return (
    <Animated.View style={visible ? styles.sheetOverlay : {display: 'none'}}>
      <TouchableOpacity
        onPress={onClose}
        style={styles.sheetOverlayTouchable}
      />
      <Animated.View style={animatedSheet}>
        <View style={styles.sheetPickerContainer}>{children}</View>
        <View style={GLOBAL_STYLES.rowBetweenCenter}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.sheetText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.sheetText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
};
