import {ActionCreator} from 'redux';
import {getDay} from '../actions/day';
import {useHTTP, useLogout} from '../../hooks';

export function asyncGetDay(date: string, userId: string) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP({
      method: 'GET',
      endpoint: `api/me/${date}/${userId}`,
    });
    if (response.code === 403) {
      await useLogout(dispatch);
    } else {
      dispatch(
        getDay(
          response.code,
          response.data.activities,
          response.data.challenges,
          response.data.quizzes,
        ),
      );
    }
  };
}
