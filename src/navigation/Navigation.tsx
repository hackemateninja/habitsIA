/*
 * Componente que decide que navegación se va a renderizar según el estado
 *
 * */
import React, {useEffect, useState} from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {useColorScheme} from 'react-native';
import Drawer from './Drawer';
import Auth from './Auth';
import {asyncChangeTheme} from '../state/thunks/theme';

const Navigation = ({auth, changeTheme}: any) => {
  const [isLogged, setIsLogged] = useState(true);
  //verifica el thema predetereminado del telefono y lo cambia
  const colorScheme = useColorScheme();
  useEffect(() => {
    changeTheme(colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    if (!auth.login.isLogged) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  }, [auth.login.isLogged]);

  console.log(auth.login.isLogged);

  if (isLogged) {
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
});

//conecta las acciones y los props y luego exporta la navegación
export default connect(mapToStateToProps, mapDispatchToProps)(Navigation);
