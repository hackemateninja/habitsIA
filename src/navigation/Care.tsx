/*
* Stack de navegación que muestra las pantallas del test y del oneBoarding
*
* */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
	CareTest,
	OneBoarding
} from '../screens';

const Stack = createStackNavigator();
export default ()=>{

	return(
		<NavigationContainer>
			<Stack.Navigator
				headerMode='none'
				initialRouteName='OneBoarding'
			>
				<Stack.Screen
					name='OneBoarding'
					component={OneBoarding}
				/>
				<Stack.Screen
					name='CareTest'
					component={CareTest}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
