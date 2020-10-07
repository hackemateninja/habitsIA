import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ActionCreator} from 'redux';
import {LoginType} from '../types/login';

export default (verifyLogin: ActionCreator<object>): boolean => {
  const [isLogged, setIsLogged] = React.useState(false);
  React.useEffect(() => {
    AsyncStorage.getItem('@Login')
      .then((e) => {
        const dataStorage = e != null ? JSON.parse(e) : null;
        const data: LoginType = {
          _id: dataStorage._id,
          user: dataStorage.user,
          avatar: dataStorage.user,
          email: dataStorage.email,
          company: dataStorage.company,
          token: dataStorage.token,
          message: dataStorage.message,
        };
        verifyLogin(data);
        setIsLogged(true);
      })
      .catch(() => {
        verifyLogin({});
        setIsLogged(false);
      });
  }, [verifyLogin]);
  return isLogged;
};
