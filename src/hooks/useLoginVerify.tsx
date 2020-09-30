import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Data {
  isLogged: boolean;
  user: string;
  avatar: string;
  company: object;
  email: string;
}

export default (verifyLogin: any): boolean => {
  const [isLogged, setIsLogged] = React.useState(false);
  React.useEffect(() => {
    AsyncStorage.getItem('@Login')
      .then((e) => {
        const dataStorage = e != null ? JSON.parse(e) : null;
        const data: Data = {
          isLogged: dataStorage.token !== null,
          user: dataStorage.user,
          avatar: dataStorage.avatar,
          company: dataStorage.company,
          email: dataStorage.email,
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
