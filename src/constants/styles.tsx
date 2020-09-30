/*
 * Estilos generales como tamaños de textos, filas, columnas, alineaciones, contenedores
 * no colocar estilos específicos solo generales
 *
 * */
import {StyleSheet} from 'react-native';
import LAYOUT from './layout';
import useResponsive from '../hooks/useResponsive';

export default StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  columnBetweenCenter: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  columnBetweenStart: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  columnEvenlyCenter: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  h1: {
    fontFamily: 'roboto',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(36),
  },
  h1Bold: {
    fontFamily: 'roboto-bold',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(36),
  },
  h2: {
    fontFamily: 'roboto-medium',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(32),
  },
  h3: {
    fontFamily: 'roboto',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(28),
  },
  h4: {
    fontFamily: 'roboto',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(24),
    lineHeight: 36,
  },
  h5: {
    fontFamily: 'roboto-medium',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(20),
  },
  h6: {
    fontFamily: 'roboto-medium',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(18),
  },
  iconSize: {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(26),
  },
  link: {
    textDecorationLine: 'underline',
  },
  logo: {
    height: LAYOUT.window.height * 0.1,
    resizeMode: 'contain',
  },
  p: {
    fontFamily: 'roboto-medium',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(16),
  },
  rowAroundCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  rowBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowStartCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    padding: 0,
    elevation: 0,
  },
  screenContainer: {
    paddingHorizontal: 24,
    width: '100%',
  },
  smallText: {
    fontFamily: 'roboto',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(14),
  },
  smallTextBold: {
    fontFamily: 'roboto-medium',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(14),
  },
  superSmallText: {
    fontFamily: 'roboto-medium',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fontSize: useResponsive(12),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
