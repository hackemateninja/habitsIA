import React from 'react';
import PickerType from '../types/PickerType';
import AuthStyles from '../styles/AuthStyles';
import {Picker} from '@react-native-community/picker';
import {View, Text, TouchableOpacity} from 'react-native';
import {useCheckAndroid} from '../../../hooks';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../../../constants';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

export default ({label, value, items, onValueChange}: PickerType) => {
  const height = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: COLORS.white,
      bottom: 20,
      borderColor: COLORS.grey,
      borderWidth: 0.3,
      height: height.value,
      padding: 10,
      position: 'absolute',
      opacity: height.value,
      overflow: 'hidden',
      width: '90%',
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 1,
      shadowRadius: 4.65,
      zIndex: 1,
    };
  });

  const handleExpand = () => {
    height.value = withTiming(LAYOUT.window.height * 0.3, {
      duration: 300,
      easing: Easing.in(Easing.exp),
    });
  };
  const handleClose = (i: string) => {
    height.value = withTiming(0, {
      duration: 300,
      easing: Easing.out(Easing.exp),
    });
    onValueChange(i);
  };

  const IOS = !useCheckAndroid();
  if (IOS) {
    return (
      <>
        <Animated.View style={animatedStyle}>
          <ScrollView>
            {items.map((i) => {
              return (
                <TouchableOpacity
                  style={AuthStyles.pickerContainerIosValue}
                  key={i}
                  onPress={() => {
                    handleClose(i);
                  }}>
                  <Text style={AuthStyles.pickerValueIOS}>{i}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Animated.View>
        <Text style={AuthStyles.label}>{label}</Text>
        <TouchableOpacity onPress={handleExpand} style={AuthStyles.pickerIos}>
          <Text style={GLOBAL_STYLES.p}>{value}</Text>
          <Icon
            name={'ios-chevron-down-outline'}
            size={16}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </>
    );
  }
  return (
    <>
      <Text style={AuthStyles.label}>{label}</Text>
      <View style={AuthStyles.pickerContainer}>
        <Picker
          mode="dropdown"
          selectedValue={value}
          itemStyle={{fontSize: 8}}
          style={{marginTop: -2}}
          onValueChange={onValueChange}>
          {items.map((item: string) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>
    </>
  );
};
