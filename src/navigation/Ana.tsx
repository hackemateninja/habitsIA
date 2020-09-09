/*
 * Stack de pantallas que muestran a Ana
 * */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Ana} from '../screens';

const Stack = createStackNavigator();

const options = {
  animationEnabled: true,
  gestureEnabled: true,
  headerShown: false,
  cardOverlayEnabled: true,
};
export default () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{...options}}
      mode="modal"
      initialRouteName="Ana">
      <Stack.Screen name="Ana" component={Ana} />
    </Stack.Navigator>
  );
};
