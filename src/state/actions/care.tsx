import {GET_MESSAGE, GET_TEST} from '../actionTypes';

export const getTest = (title: string, description: string, questions: []) => {
  return {
    type: GET_TEST,
    title,
    description,
    questions,
  };
};

export const getMessage = (
  message: string,
  showCareTest: boolean,
  oneBoarding: any,
) => {
  return {
    type: GET_MESSAGE,
    message,
    showCareTest,
    oneBoarding,
  };
};
