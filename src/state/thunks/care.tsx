import {useHTTP, useLogout} from '../../hooks';
import {ActionCreator} from 'redux';
import {CareTest} from '../../types/careTest';
import {getMessage} from '../actions/care';

export function asyncGetMessage(userId: string) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP({
      method: 'GET',
      endpoint: `api/MessageWelcome/today/${userId}`,
    });
    if (response.code === 403) {
      await useLogout(dispatch);
    } else {
      //console.log(typeof response.data.messageCards)
      getMessage(
        response.data.messageAleatory.title,
        response.data.callCareSurvey,
        response.data.messageCards,
      );
    }
  };
}

export function asyncGetTest() {
  return async (dispatch: ActionCreator<any>) => {
    const response: CareTest = await useHTTP({
      method: 'GET',
      endpoint: 'api/survey/one/?where[name]=Encuesta care',
    });
    if (response.code === 403) {
      await useLogout(dispatch);
    } else {
      //console.log(response);
    }
  };
}

export function asyncRefreshToken(token: object) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP({
      method: 'POST',
      endpoint: 'refreshToken',
      body: token,
    });
    if (response.code === 403) {
      await useLogout(dispatch);
    } else {
      //console.log(response);
    }
  };
}
