import React, {ReactNode, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../constants';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

interface BottomSheetType {
  visible: boolean;
  onClose: any;
  children: ReactNode;
}

export default ({visible, onClose, children}: BottomSheetType) => {
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
    <Animated.View
      style={visible ? styles.bottomSheetOverlay : {display: 'none'}}>
      <TouchableOpacity
        onPress={onClose}
        style={styles.bottomSheetOverlayTouchable}
      />
      <Animated.View style={animatedSheet}>
        <View style={styles.bottomSheetPickerContainer}>{children}</View>
        <View style={GLOBAL_STYLES.rowBetweenCenter}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.bottomSheetText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.bottomSheetText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
};
