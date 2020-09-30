import {useHTTP} from '../../hooks';
import AsyncStorage from '@react-native-community/async-storage';
import {ActionCreator} from 'redux';
import {
  forgot,
  getCompany,
  login,
  register,
  registerPersonal,
  reset,
} from '../actions/auth';

//limpia los los estados selecionados al ser accionado
export function asyncClear(context: string) {
  return (dispatch: ActionCreator<any>) => {
    if (context === 'login') {
      dispatch(login(false, '', '', '', false, [], '', {}, ''));
    } else if (context === 'register') {
      dispatch(register('', ''));
      dispatch(getCompany('', '', []));
    } else if (context === 'personal') {
      dispatch(registerPersonal('', '', '', ''));
    } else if ('reset') {
      dispatch(reset('', false));
    } else if ('forgot') {
      dispatch(forgot('', 0, false, '', ''));
    }
  };
}

export function asyncForgot(body: {mail: string}) {
  return async (dispatch: ActionCreator<any>) => {
    const [response] = await useHTTP({
      method: 'POST',
      body: body,
      endpoint: 'api/user/changePass',
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
    const [response] = await useHTTP({
      method: 'GET',
      endpoint: 'api/company/one/',
      query: `?where[key]=${code}`,
    });
    console.log(response);
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
    const [response] = await useHTTP({
      method: 'POST',
      body: body,
      endpoint: 'login',
    });
    if (response.token) {
      const responseStringy = JSON.stringify(response);
      await AsyncStorage.setItem('@Login', responseStringy);
      dispatch(
        login(
          true,
          response.user,
          response.token,
          response.message.title,
          response.resolvedTest,
          response.messageBoarding,
          response.avatar,
          response.company,
          response.email,
        ),
      );
    } else {
      dispatch(
        login(false, '', '', response.global.es_MX, false, [], '', {}, ''),
      );
    }
  };
}
export function asyncLoginVerify(data: any) {
  return async (dispatch: ActionCreator<any>) => {
    await dispatch(
      login(
        data.isLogged,
        data.user,
        data.token,
        data.message,
        data.resolvedTest,
        data.messageBoarding,
        data.avatar,
        data.company,
        data.email,
      ),
    );
  };
}

export function asyncLogout() {
  return async (dispatch: ActionCreator<any>) => {
    dispatch(login(false, '', '', '', false, [], '', {}, ''));
    await AsyncStorage.clear();
  };
}

//registra el nombre de la empresa, el id y el departamento
export function asyncRegisterCompany(companyId: string, dep: string) {
  return (dispatch: ActionCreator<any>) => {
    dispatch(register(companyId, dep));
  };
}

//registra los datos personales
export function asyncRegisterPersonal(body: object) {
  return async (dispatch: ActionCreator<any>) => {
    const [response] = await useHTTP({
      method: 'POST',
      body: body,
      endpoint: 'api/user/saveUser',
    });
    if (response.user) {
      dispatch(
        registerPersonal(
          'usuario registrado con éxito',
          response.user,
          response.sendMail.envelope.from,
          response.sendMail.envelope.to[0],
        ),
      );
    } else {
      dispatch(registerPersonal(response.message, '', '', ''));
    }
  };
}

//resetea la contraseña
export function asyncReset(body: object) {
  return async (dispatch: ActionCreator<any>) => {
    const [response] = await useHTTP({
      method: 'PUT',
      body: body,
      endpoint: 'api/user/updatePassword',
    });
    dispatch(reset(response.message, true));
  };
}
