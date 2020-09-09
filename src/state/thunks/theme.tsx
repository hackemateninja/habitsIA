import {ActionCreator} from 'redux';
import {dark, light} from '../actions/theme';

export function asyncChangeTheme(theme: string) {
  return async (dispatch: ActionCreator<any>) => {
    theme === 'light' ? await dispatch(light()) : await dispatch(dark());
  };
}
