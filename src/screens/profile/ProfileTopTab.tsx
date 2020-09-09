/*
 * Navegación que muestra en segment controll en la parte del Perfil
 * */
import React from 'react';
import Daily from './Daily';
import Weekly from './Weekly';
import Monthly from './Monthly';
import Yearly from './Yearly';
// @ts-ignore
import {connect} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS, GLOBAL_STYLES} from '../../constants';

const Tab = createMaterialTopTabNavigator();
const ProfileTopTab = () => {
  return (
    <Tab.Navigator
      lazy={true}
      tabBarOptions={{
        activeTintColor: COLORS.softGrey,
        inactiveTintColor: COLORS.black,
        tabStyle: {
          marginTop: '-8%',
        },
        labelStyle: {
          ...GLOBAL_STYLES.smallText,
        },
        indicatorStyle: {
          backgroundColor: COLORS.primary,
          height: '100%',
          width: '25%',
          borderRadius: 8,
        },
        style: {
          backgroundColor: COLORS.grey,
          marginHorizontal: 20,
          height: 30,
          borderRadius: 8,
          elevation: 0,
          overflow: 'hidden',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen name="Diario" component={Daily} />
      <Tab.Screen name="Semanal" component={Weekly} />
      <Tab.Screen name="Mensual" component={Monthly} />
      <Tab.Screen name="Anual" component={Yearly} />
    </Tab.Navigator>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileTopTab);
