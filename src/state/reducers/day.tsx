import {GET_DAY} from '../actionTypes';

const initialState = {
  status: '',
  activities: [],
  challenges: [],
  quizzes: [],
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DAY:
      return {
        ...state,
        status: action.status,
        activities: action.activities,
        challenges: action.challenges,
        quizzes: action.quizzes,
      };
    default:
      return state;
  }
};
