/*
 * Navegación que contiene el bottom tab y muestra las vistas principales
 * */
import React from 'react';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, GLOBAL_STYLES} from '../constants';
import {Day, Community, Profile, Ana, Notifications} from '../screens';
import {BottomTabItem} from '../components';
import Animated from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const BottomTab = (props: any) => {
  const {navigation, theme, style} = props;

  const options = {
    allowFontScaling: true,
    activeTintColor: COLORS.primary,
    inactiveTintColor: COLORS.grey,
    adaptive: true,
    labelStyle: {
      fontFamily: 'roboto-bold',
    },
    style: {
      backgroundColor: theme.colors.backGroundScreen,
    },
  };

  return (
    <Animated.View style={[GLOBAL_STYLES.screen, style]}>
      <Tab.Navigator
        initialRouteName="Me"
        lazy={true}
        tabBarOptions={{...options}}>
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
          name="Ana"
          component={Ana}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate('Ana');
            },
          }}
          options={{
            tabBarBadge: 1,
            tabBarLabel: '',
            tabBarIcon: () => <BottomTabItem />,
          }}
        />
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
          name="Notifications"
          component={Notifications}
          options={{
            tabBarBadge: 5,
            tabBarLabel: 'Notificaciones',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="ios-notifications-outline"
                color={color}
                size={size}
              />
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
