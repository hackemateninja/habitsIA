import {GET_MESSAGE, GET_TEST} from '../actionTypes';

const initialState = {
  careTest: {
    title: '',
    description: '',
    questions: [],
  },
  messageLoading: {
    message: '',
    showCareTest: false,
    oneBoarding: [],
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TEST:
      return {
        ...state,
        careTest: {
          title: action.title,
          description: action.description,
          questions: action.questions,
        },
      };
    case GET_MESSAGE:
      return {
        ...state,
        messageLoading: {
          message: action.message,
          showCareTest: action.showCareTest,
          oneBoarding: action.oneBoarding,
        },
      };
    default:
      return state;
  }
};
