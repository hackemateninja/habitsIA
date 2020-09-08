/*
 * Navegación que contiene el bottom tab y muestra las vistas principales
 * */
import React from 'react';
import Animated from 'react-native-reanimated';
// @ts-ignore
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabItem} from '../components';
import {COLORS, GLOBAL_STYLES} from '../constants';
import {Day, Community, Profile, Ana} from '../screens';

const Tab = createBottomTabNavigator();

const BottomTab = ({navigation, theme, style}: any) => {
  const options = {
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
            tabBarIcon: ({focused}) => (
              <BottomTabItem
                icon="ios-calendar"
                focused={focused}
                colors={theme.colors}
              />
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
            tabBarIcon: ({focused}) => (
              <BottomTabItem
                icon="ios-chatboxes"
                focused={focused}
                colors={theme.colors}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Comunidad"
          component={Community}
          options={{
            tabBarIcon: ({focused}) => (
              <BottomTabItem
                icon="ios-people"
                focused={focused}
                colors={theme.colors}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Mi perfil"
          component={Profile}
          options={{
            tabBarLabel: 'Yo',
            tabBarIcon: ({focused}) => (
              <BottomTabItem
                icon="ios-person"
                focused={focused}
                colors={theme.colors}
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
const mapDispatchToProps = (dispatch: Event) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);
