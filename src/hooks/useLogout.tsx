import {ActionCreator} from 'redux';
import {login} from '../state/actions/auth';
import AsyncStorage from '@react-native-community/async-storage';

export default async (dispatch: ActionCreator<any>) => {
  dispatch(
    login({
      _id: '',
      avatar: undefined,
      company: {name: '', logo: '', _id: ''},
      email: '',
      message: '',
      token: '',
      user: '',
    }),
  );
  await AsyncStorage.clear();
};
