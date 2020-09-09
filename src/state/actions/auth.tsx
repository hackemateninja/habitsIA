import {
  FORGOT,
  GET_COMPANY,
  LOGIN,
  REGISTER,
  REGISTER_PERSONAL,
  RESET,
} from '../actionTypes';

export function forgot(
  message: string,
  status: number,
  success: boolean,
  data: string,
  mail: string,
) {
  return {
    type: FORGOT,
    message,
    status,
    success,
    data,
    mail,
  };
}

export function getCompany(name: string, id: string, deps: Array<string>) {
  return {
    type: GET_COMPANY,
    name,
    id,
    deps,
  };
}

export function login(
  isLogged: boolean,
  user: string,
  token: string,
  message: string,
  resolvedTest: boolean,
  messageBoarding: Array<any>,
  avatar: string,
  company: object,
  email: string,
) {
  return {
    type: LOGIN,
    isLogged,
    user,
    token,
    message,
    resolvedTest,
    messageBoarding,
    avatar,
    company,
    email,
  };
}

export function register(companyId: string, dep: string) {
  return {
    type: REGISTER,
    companyId,
    dep,
  };
}

export function registerPersonal(
  message: string,
  user: string,
  from: string,
  to: string,
) {
  return {
    type: REGISTER_PERSONAL,
    message,
    user,
    from,
    to,
  };
}
export function reset(message: string, status: boolean) {
  return {
    type: RESET,
    message,
    status,
  };
}
