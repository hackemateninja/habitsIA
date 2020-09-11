/*
 * Stack de navegacion central
 * */

import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {useColorScheme} from 'react-native';
import {asyncChangeTheme, asyncLoginVerify} from '../state/thunks/';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Ana,
  CareTest,
  Forgot,
  Login,
  OneBoarding,
  Register,
  RegisterPersonalInfo,
  Reset,
  Welcome,
} from '../screens';
import Drawer from './Drawer';

const Stack = createStackNavigator();

const Navigator = ({auth, changeTheme, verifyLogin}: any) => {
  //verifica el thema predetereminado del telefono y lo cambia
  const colorScheme = useColorScheme();
  React.useEffect(() => {
    changeTheme(colorScheme);
  }, [colorScheme]);

  React.useEffect(() => {
    let data = {
      isLogged: false,
      user: '',
      token: '',
      message: '',
      resolvedTest: false,
      messageBoarding: [],
      avatar: '',
      company: {},
      email: '',
    };
    AsyncStorage.getItem('@Login')
      .then((e) => {
        const dataStorage = e != null ? JSON.parse(e) : null;
        data = {
          isLogged: dataStorage.token !== null,
          user: dataStorage.user,
          token: dataStorage.token,
          message: dataStorage.message.title,
          resolvedTest: dataStorage.resolvedTest,
          messageBoarding: dataStorage.messageBoarding,
          avatar: dataStorage.avatar,
          company: dataStorage.company,
          email: dataStorage.email,
        };
        verifyLogin(data);
      })
      .catch(() => {
        verifyLogin(data);
      });
  }, [auth.login.isLogged]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        mode={auth.login.isLogged ? 'modal' : 'card'}>
        {!auth.login.isLogged ? (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterPersonal" component={RegisterPersonalInfo}/>
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="Reset" component={Reset} />
          </>
        ) : (
          <>
            <Stack.Screen name="OneBoarding" component={OneBoarding} />
            <Stack.Screen name="CareTest" component={CareTest} />
            <Stack.Screen name="Drawer" component={Drawer} />
            <Stack.Screen name="Ana" component={Ana} />
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
