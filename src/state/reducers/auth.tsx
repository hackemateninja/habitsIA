import {
  FORGOT,
  GET_COMPANY,
  LOGIN,
  REGISTER,
  RESET,
} from '../actionTypes';

const initialState = {
  forgot: {
    message: '',
    status: 0,
    success: false,
    data: '',
    mail: '',
  },
  company: {
    id: '',
    name: '',
    deps: [],
  },
  login: {
    id: '',
    user: '',
    token: '',
    avatar: '',
    company: {},
    email: '',
    message: '',
  },
  register: {
    message: '',
    user: '',
    from: '',
    to: '',
  },
  reset: {
    message: '',
    status: false,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FORGOT:
      return {
        ...state,
        forgot: {
          message: action.message,
          status: action.status,
          success: action.success,
          data: action.data,
          mail: action.mail,
        },
      };
    case GET_COMPANY:
      return {
        ...state,
        company: {
          id: action.id,
          name: action.name,
          deps: action.deps,
        },
      };
    case LOGIN:
      return {
        ...state,
        login: {
          _id: action._id,
          user: action.user,
          avatar: action.user,
          email: action.email,
          company: action.company,
          token: action.token,
          message: action.message,
        },
      };
    case REGISTER:
      return {
        ...state,
        register: {
          message: action.message,
          user: action.user,
          from: action.from,
          to: action.to,
        },
      };
    case RESET:
      return {
        ...state,
        reset: {
          message: action.message,
          status: action.status,
        },
      };
    default:
      return state;
  }
};
