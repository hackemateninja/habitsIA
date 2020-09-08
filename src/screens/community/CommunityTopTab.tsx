/*
* Navegación que muestra en segment controll en la parte del comminuty
* */
import React from 'react';
import  CommunityTeam from './CommunityTeam';
import  CommunityRanking from './CommunityRanking';
// @ts-ignore
import {connect} from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {COLORS, LAYOUT} from '../../constants';
import {PixelRatio} from "react-native";


const Tab = createMaterialTopTabNavigator();
const CommunityTopTab = ({theme}: any)=>{
	return (
		<Tab.Navigator
			lazy={true}
			tabBarOptions={{
				activeTintColor: theme.colors.topTabTint,
				inactiveTintColor:theme.colors.topTabTintActive,
				tabStyle:{
					height: LAYOUT.window.height * 0.07,
					marginTop: PixelRatio.get() < 2.5 ? -10 : -16,
				},
				labelStyle: {
					fontSize: 12,
					margin:0
				},
				indicatorStyle:{
					backgroundColor: theme.colors.topTabBackActive,
					height: '100%',
					width: '50%',
					borderRadius: 8,
					alignSelf: 'center'
				},
				style:{
					backgroundColor: theme.colors.topTabBack,
					padding: 0,
					height: 30,
					marginHorizontal: 24,
					borderRadius: 8,
					elevation:0,
				}
			}}
		>
			<Tab.Screen
				name='Mi ranking'
				component={CommunityRanking}
			/>
			<Tab.Screen
				name='Chats'
				component={CommunityTeam}
			/>
		</Tab.Navigator>
	);
}
const mapStateToProps = (state: object)=>{
	return state;
}
const mapDispatchToProps = (dispatch: Event)=>({

});
export default connect(mapStateToProps, mapDispatchToProps)(CommunityTopTab)
