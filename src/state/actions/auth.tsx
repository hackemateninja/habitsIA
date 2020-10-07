import {FORGOT, GET_COMPANY, LOGIN, REGISTER, RESET} from '../actionTypes';
import {LoginType} from '../../types/login';

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

export function login({
  _id,
  user,
  avatar,
  company,
  email,
  message,
  token,
}: LoginType) {
  return {
    type: LOGIN,
    _id,
    user,
    avatar,
    company,
    email,
    message,
    token,
  };
}

export function setCode(companyId: string, dep: string) {
  return {
    type: REGISTER,
    companyId,
    dep,
  };
}

export function register(
  message: string,
  user: string,
  from: string,
  to: string,
) {
  return {
    type: REGISTER,
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
