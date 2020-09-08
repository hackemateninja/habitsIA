/*
* Hook que soluciona el cambio de color del estatus bar en android
* entre ana el drawer y las demás pantallas
* */
import React, {useEffect} from 'react';
import CheckAndroid from './CheckAndroid';
import {StatusBar, StatusBarStyle} from 'react-native';
import {useIsDrawerOpen} from "@react-navigation/drawer";
import {COLORS} from "../constants";

export default (openColor: string, closeColor: string):void => {

	const isDrawerOpen = useIsDrawerOpen();
	const isAndroid = CheckAndroid();

	const changeColor = (color: string)=>{
		if (isAndroid){
			StatusBar.setBackgroundColor(color);
		}
	}

	const barStyle = openColor === COLORS.softPrimary ? 'dark-content': 'light-content';

	useEffect(()=>{

		if (isDrawerOpen){
			changeColor(openColor);
			StatusBar.setBarStyle(barStyle);
		}else {
			changeColor(closeColor)
			StatusBar.setBarStyle(barStyle);
		}
	},)
}
