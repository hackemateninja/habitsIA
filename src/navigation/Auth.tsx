/*
 * Stack de pantallas que se muestran para loggear o registrar a un usuario
 * */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Forgot,
  Login,
  Register,
  RegisterPersonalInfo,
  Welcome,
  Reset,
} from '../screens';

// TODO incrustrar en una navegación general
const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="RegisterPersonal"
          component={RegisterPersonalInfo}
        />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
