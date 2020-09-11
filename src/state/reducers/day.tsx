import {GET_DAY} from '../actionTypes';

const initialState = {
  status: '',
  activities: [],
  challenges: [],
  tests: [],
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DAY:
      return {
        ...state,
        status: action.status,
        activities: action.activities,
        challenges: action.challenges,
        tests: action.tests,
      };
    default:
      return state;
  }
};
