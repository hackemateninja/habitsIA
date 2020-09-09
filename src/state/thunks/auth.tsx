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
      dispatch(login(false, '', '', ''));
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
    const response = await useHTTP('POST', body, 'changePass');
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
export function asyncGetCompany(body: object) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP('POST', body, 'getCompany');
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
      dispatch(getCompany('Código no existe', '', areas));
    }
  };
}

//login
export function asyncLogin(body: object) {
  return async (dispatch: ActionCreator<any>) => {
    const response = await useHTTP('POST', body, 'login');
    if (response.token) {
      const responseStringy = JSON.stringify(response);
      await AsyncStorage.setItem('@login', responseStringy).then(() => {
        dispatch(
          login(true, response.user, response.token, response.message.title),
        );
      });
    } else {
      dispatch(login(false, '', '', response.message));
    }
  };
}

export function asyncLogout() {
  return async (dispatch: ActionCreator<any>) => {
    AsyncStorage.clear()
      .then(() => {
        dispatch(login(false, '', '', ''));
      })
      .catch((e) => {
        console.log(e);
      });
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
    const response = await useHTTP('POST', body, 'saveUser');
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
    useHTTP('PUT', body, 'user/updatePassword')
      .then((e) => {
        dispatch(reset(e.message, true));
      })
      .catch((e) => {
        dispatch(reset(e.message, false));
      });
  };
}
