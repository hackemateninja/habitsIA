/*
 * Navegación que contiene el bottom tab y muestra las vistas principales
 * */
import React from 'react';
import Animated from 'react-native-reanimated';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, GLOBAL_STYLES} from '../constants';
import {Day, Community, Profile, Ana} from '../screens';

const Tab = createBottomTabNavigator();

const BottomTab = ({navigation, theme, style}: any) => {
  const options = {
    allowFontScaling: true,
    activeTintColor: COLORS.primary,
    inactiveTintColor: COLORS.grey,
    adaptive: true,
    showLabel: true,
    style: {
      backgroundColor: theme.colors.backGroundScreen,
      //paddingBottom: PixelRatio.get() > 2.5 && !CheckAndroid() ? 17 : 0,
    },
    tabStyle: {
      backgroundColor: theme.colors.backGroundScreen,
    },
  };

  const styles = {
    ...style,
    ...GLOBAL_STYLES.screen,
  };

  // TODO crear un bottom tap compoente
  return (
    <Animated.View style={styles}>
      <Tab.Navigator
        initialRouteName="Day"
        lazy={true}
        tabBarOptions={{...options}}>
        <Tab.Screen
          name="Day"
          component={Day}
          options={{
            tabBarLabel: 'Mi día',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-calendar-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Ana"
          component={Ana}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate('Ana');
            },
          }}
          options={{
            tabBarLabel: 'Ana',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-chatbubble-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{
            tabBarLabel: 'Comunidad',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-people-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={Profile}
          options={{
            tabBarLabel: 'Yo',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </Animated.View>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);
