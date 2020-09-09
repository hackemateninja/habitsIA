/*
 * Navegación que muestra en segment controll en la parte del comminuty
 * */
import React from 'react';
import CommunityTeam from './CommunityTeam';
import CommunityRanking from './CommunityRanking';
// @ts-ignore
import {connect} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS, GLOBAL_STYLES} from '../../constants';

const Tab = createMaterialTopTabNavigator();
const CommunityTopTab = () => {
  return (
    <Tab.Navigator
      lazy={true}
      tabBarOptions={{
        activeTintColor: COLORS.softGrey,
        inactiveTintColor: COLORS.black,
        tabStyle: {
          marginTop: '-4%',
        },
        labelStyle: {
          ...GLOBAL_STYLES.smallTextBold,
        },
        indicatorStyle: {
          backgroundColor: COLORS.primary,
          height: '100%',
          width: '50%',
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
      <Tab.Screen name="Mi ranking" component={CommunityRanking} />
      <Tab.Screen name="Chats" component={CommunityTeam} />
    </Tab.Navigator>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CommunityTopTab);
