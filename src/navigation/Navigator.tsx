/*
 * Stack de navegacion central
 * */

import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {useColorScheme} from 'react-native';
import {asyncChangeTheme, asyncLoginVerify} from '../state/thunks/';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Ana,
  CareLoading,
  CareTest,
  CareTestResult,
  Forgot,
  Login,
  CareOneBoarding,
  Register,
  RegisterPersonalInfo,
  Reset,
  Welcome,
} from '../screens';
import Drawer from './Drawer';
import {useLoginVerify} from '../hooks/';

const Stack = createStackNavigator();

const Navigator = ({auth, changeTheme, verifyLogin}: any) => {
  //verifica el thema predetereminado del telefono y lo cambia
  const colorScheme = useColorScheme();
  React.useEffect(() => {
    changeTheme(colorScheme);
  }, [colorScheme]);

  useLoginVerify(verifyLogin);

  const logged = auth.login.isLogged;
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={logged ? 'Loading' : 'Welcome'}
        screenOptions={{gestureEnabled: false}}
        mode={'card'}>
        {logged ? (
          <>
            <Stack.Screen name="Loading" component={CareLoading} />
            <Stack.Screen name="OneBoarding" component={CareOneBoarding} />
            <Stack.Screen name="CareTest" component={CareTest} />
            <Stack.Screen name="CareTestResult" component={CareTestResult} />
            <Stack.Screen name="Drawer" component={Drawer} />
            <Stack.Screen
              name="Ana"
              options={{gestureEnabled: true}}
              component={Ana}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen
              name="RegisterPersonal"
              component={RegisterPersonalInfo}
            />
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="Reset" component={Reset} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//exporta el estado a los props
const mapToStateToProps = (state: any) => {
  return state;
};
//exporta las acciones a los props
const mapDispatchToProps = (dispatch: any) => ({
  changeTheme: (theme: string) => dispatch(asyncChangeTheme(theme)),
  verifyLogin: (data: any) => dispatch(asyncLoginVerify(data)),
});

//conecta las acciones y los props y luego exporta la navegación
export default connect(mapToStateToProps, mapDispatchToProps)(Navigator);
