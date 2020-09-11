import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
let data = {
  token: '',
  isLogged: false,
  user: '',
  message: '',
  resolvedTest: false,
  messageBoarding: [],
  avatar: '',
  company: {},
  email: '',
};
export default (verifyLogin: any, dep: boolean): boolean => {
  const [logged, setIsLogged] = React.useState(false);
  React.useEffect(() => {
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
        setIsLogged(true);
      })
      .catch(() => {
        verifyLogin(data);
        setIsLogged(false);
      });
  }, [dep, verifyLogin]);
  return logged;
};
