import React from 'react';
import DayStyles from '../styles/DayStyles';
import CalendarType from '../types/CalendarType';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../../constants';

export default ({state, navigation, theme}: any) => {
  return (
    <View style={DayStyles.calendarContainer}>
      {state.routes.map((route: CalendarType, index: any) => {
        const isFocused = state.index === index;
        const indicatorStyle = {
          backgroundColor: isFocused ? COLORS.primary : 'transparent',
          ...DayStyles.calendarIndicator,
        };

        const label = route.name;

        const dayStyle = {
          color: isFocused ? 'white' : theme.mainText,
          ...DayStyles.calendarDayText,
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        // @ts-ignore
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={DayStyles.calendarDateContainer}>
            <Text style={DayStyles.calendarLabel}>{label.substring(2, 5)}</Text>
            <View style={indicatorStyle}>
              <Text style={dayStyle}>{label.substring(0, 2)}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
