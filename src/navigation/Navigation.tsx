/*
 * Componente que decide que navegación se va a renderizar según el estado
 *
 * */
import React, {useEffect} from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {useColorScheme} from 'react-native';
import Drawer from './Drawer';
import Auth from './Auth';
import {asyncChangeTheme, asyncLoginVerify} from '../state/thunks/';
import AsyncStorage from '@react-native-community/async-storage';

const Navigation = ({auth, changeTheme, verifyLogin}: any) => {
  //verifica el thema predetereminado del telefono y lo cambia
  const colorScheme = useColorScheme();
  useEffect(() => {
    changeTheme(colorScheme);
  }, [colorScheme]);

  useEffect(() => {
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

  if (auth.login.isLogged) {
    return <Drawer />;
  } else {
    return <Auth />;
  }
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
export default connect(mapToStateToProps, mapDispatchToProps)(Navigation);
