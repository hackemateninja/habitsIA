import {useHTTP} from '../../hooks';
import {ActionCreator} from 'redux';
import {getTest} from '../actions/care';

export function asyncGetTest(body: object) {
  return (dispatch: ActionCreator<any>) => {
    useHTTP('POST', body, 'getTest')
      .then((e) => {
        dispatch(getTest(e.test[0].name, e.test[0].question));
      })
      .catch((e) => {
        dispatch(getTest(e.toString(), []));
      });
  };
}
