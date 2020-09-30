/*
 * Hook que soluciona el cambio de color del estatus bar en android
 * entre ana el drawer y las demás pantallas
 * */
import React from 'react';
import useCheckAndroid from './useCheckAndroid';
import {StatusBar} from 'react-native';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {COLORS} from '../constants';

interface UseChangeStatusBarType {
  openColor: string,
  closeColor: string,
}

export default ({openColor, closeColor}: UseChangeStatusBarType): void => {
  const isDrawerOpen = useIsDrawerOpen();
  const isAndroid = useCheckAndroid();

  const changeColor = (color: string) => {
    if (isAndroid) {
      StatusBar.setBackgroundColor(color);
    }
  };

  const barStyle =
    openColor === COLORS.softPrimary ? 'dark-content' : 'light-content';

  React.useEffect(() => {
    if (isDrawerOpen) {
      changeColor(openColor);
      StatusBar.setBarStyle(barStyle);
    } else {
      changeColor(closeColor);
      StatusBar.setBarStyle(barStyle);
    }
  });
};
