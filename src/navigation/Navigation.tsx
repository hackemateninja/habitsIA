/*
 * Componente que decide que navegación se va a renderizar según el estado
 *
 * */
import React, {useEffect} from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {useColorScheme} from 'react-native';
import {dark, light} from '../state/actions/theme';
import Drawer from './Drawer';
import Auth from './Auth';

const Navigation = ({auth, lightMode, darkMode}: any) => {
  //TODO hacer una navegación general que abarque todas las vistas
  //verifica el thema predetereminado del telefono y lo cambia
  const colorScheme = useColorScheme();
  useEffect(() => {
    if (colorScheme === 'light') {
      lightMode();
    } else {
      darkMode();
    }
  }, [colorScheme]);

  if (!auth.login.isLogged) {
    return <Auth />;
  } else {
    return <Drawer />;
  }
};

//exporta el estado a los props
const mapToStateToProps = (state: any) => {
  return state;
};
//exporta las acciones a los props
const mapDispatchToProps = (dispatch: any) => ({
  // TODO crear thunk para estas acciones
  lightMode: () => dispatch(light()),
  darkMode: () => dispatch(dark()),
});

//conecta las acciones y los props y luego exporta la navegación
export default connect(mapToStateToProps, mapDispatchToProps)(Navigation);
