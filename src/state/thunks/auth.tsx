import {useHTTP, useLogout} from '../../hooks';
import AsyncStorage from '@react-native-community/async-storage';
import {ActionCreator} from 'redux';
import {
  forgot,
  getCompany,
  login,
  setCode,
  register,
  reset,
} from '../actions/auth';
import {LoginType} from '../../types/login';

//limpia los los estados selecionados al ser accionado
export function asyncClear(context: string) {
  return (dispatch: ActionCreator<any>) => {
    if (context === 'login') {
      dispatch(
        login({
          _id: '',
          avatar: undefined,
          company: undefined,
          email: '',
          message: '',
          token: '',
          user: '',
        }),
      );
    } else if (context === 'getCode') {
      dispatch(setCode('', ''));
      dispatch(getCompany('', '', []));
    } else if (context === 'register') {
      dispatch(register('', '', '', ''));
    } else if ('reset') {
      dispatch(reset('', false));
    } else if ('forgot') {
      dispatch(forgot('', 0, false, '', ''));
    }
  };
}

export function asyncForgot(body: {mail: string}) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP({
      method: 'POST',
      body: body,
      endpoint: 'api/user/requestChangeUserPassword',
    });
    dispatch(
      forgot(
        response.data,
        response.status,
        response.succes,
        response.error,
        body.mail,
      ),
    );
  };
}

//obtiene los datos de la companía
export function asyncGetCompany(code: string) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP({
      method: 'GET',
      endpoint: `api/company/one/?where[key]=${code}`,
    });
    let areas: string[] = [];
    if (response.company) {
      const filters = response.company.filtros;
      filters.forEach((filter: any) => {
        if (filter.name === 'areas') {
          areas = filter.values;
        }
      });
      dispatch(getCompany(response.company.name, response.company._id, areas));
    } else {
      dispatch(getCompany(response.global.es_MX, '', areas));
    }
  };
}

//login
export function asyncLogin(body: object) {
  return async (dispatch: ActionCreator<any>) => {
    const response: LoginType = await useHTTP({
      method: 'POST',
      body: body,
      endpoint: 'login',
    });
    if (response.token) {
      const responseStringy = JSON.stringify(response);
      await AsyncStorage.setItem('@Login', responseStringy);
      dispatch(
        login({
          _id: response._id,
          user: response.user,
          message: '',
          avatar: response.avatar,
          company: response.company,
          email: response.email,
          token: response.token,
        }),
      );
    } else {
      dispatch(
        login({
          _id: '',
          user: '',
          // @ts-ignore
          message: response.global.es_MX,
          avatar: '',
          company: {_id: '', logo: '', name: ''},
          email: response.email,
          token: response.token,
        }),
      );
    }
  };
}
export function asyncLoginVerify(data: any) {
  return async (dispatch: ActionCreator<any>) => {
    await dispatch(login({...data}));
  };
}

export async function asyncLogout() {
  return async (dispatch: ActionCreator<any>) => {
    dispatch(
      login({
        _id: '',
        avatar: undefined,
        company: {name: '', logo: '', _id: ''},
        email: '',
        message: '',
        token: '',
        user: '',
      }),
    );
    await AsyncStorage.clear();
  };
}

//registra el nombre de la empresa, el id y el departamento
/*export function asyncRegisterCompany(companyId: string, dep: string) {
  return (dispatch: ActionCreator<any>) => {
    //dispatch(register(companyId, dep));
  };
}*/

//registra los datos personales
export function asyncRegisterPersonal(body: object) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP({
      method: 'POST',
      body: body,
      endpoint: 'api/user/register',
    });
    if (response.user) {
      dispatch(
        register(
          'usuario registrado con éxito',
          response.user,
          response.sendMail.envelope.from,
          response.sendMail.envelope.to[0],
        ),
      );
    } else {
      dispatch(register(response.message, '', '', ''));
    }
  };
}

//resetea la contraseña
export function asyncReset(body: object) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP({
      method: 'PUT',
      body: body,
      endpoint: 'api/user/updatePassword',
    });
    dispatch(reset(response.message, true));
  };
}
