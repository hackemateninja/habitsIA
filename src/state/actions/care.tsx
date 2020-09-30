import {GET_TEST} from '../actionTypes';

export const getTest = (title: string, questios: []) => {
  return {
    type: GET_TEST,
    title,
    questions,
  };
};
