/*
 * esto sirve para calcular el ato y el ancho definitivo de cada pantalla
 * */

import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
