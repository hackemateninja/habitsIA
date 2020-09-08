/*
* Navegación que muestra en segment controll en la parte del Perfil
* */
import React from 'react';
import Daily from "./Daily";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import Yearly from "./Yearly";
// @ts-ignore
import {connect} from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {LAYOUT} from "../../constants";
import {PixelRatio} from "react-native";


const Tab = createMaterialTopTabNavigator();
const ProfileTopTab = ({theme}: any)=>{
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
				allowFontScaling: false,
				indicatorStyle:{
					backgroundColor: theme.colors.topTabBackActive,
					height: '100%',
					width: '25%',
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
				name='Diario'
				component={Daily}
			/>
			<Tab.Screen
				name='Semanal'
				component={Weekly}
			/>
			<Tab.Screen
				name='Mensual'
				component={Monthly}
			/>
			<Tab.Screen
				name='Anual'
				component={Yearly}
			/>
		</Tab.Navigator>
	);
}
const mapStateToProps = (state: object)=>{
	return state;
}
const mapDispatchToProps = (dispatch: Event)=>({

});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileTopTab)
