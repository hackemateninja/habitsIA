import {GET_DAY} from '../actionTypes';

export function getDay(
  status: string,
  activities: [],
  challenges: [],
  quizzes: [],
) {
  return {
    type: GET_DAY,
    status,
    activities,
    challenges,
    quizzes,
  };
}
