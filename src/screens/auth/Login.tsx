/*
 * Pantalla de login recive data de store/auth
 * ejecuta las acciones de thunk/auth
 * */
import React, {useEffect, useState} from 'react';
import Link from './components/Link';
import TopAuthScreenContainer from './components/TopAuthScreenContainer';
import BottomAuthScreenContainer from './components/BottomAuthScreenContainer';
import Input from './components/Input';
import {useValidateEmail} from '../../hooks';
// @ts-ignore
import {connect} from 'react-redux';
import {asyncLogin, asyncClear} from '../../state/thunks';
import {Button, GradientContainer, Waiting, Alert} from '../../components';

const Login = ({theme, navigation, login, auth, clear}: any) => {
  //estado local
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [enable, setEnable] = useState(false);
  const [errorEmailMessage, setEmailErrorMessage] = useState('');
  const [errorPassMessage, setPassErrorMessage] = useState('');
  const [showWaiting, setShowWaiting] = useState(false);
  const [alert, setAlert] = useState({
    message: '',
    title: '',
    type: '',
  });

  //borra los datos del estado cuando navega hacia atrás
  const handleGoBack = () => {
    navigation.goBack();
    clear('login');
  };

  //ciera la alerta y limpia el estado
  const handleCloseAlert = () => {
    setAlert({
      title: '',
      message: '',
      type: '',
    });
    clear('login');
  };

  //namanda los parametros del body al thunk
  const handleSendLogin = async () => {
    const body = {
      mail: mail,
      pass: pass,
    };
    login(body);
    setShowWaiting(true);
  };

  //se dispara cuando se deja de editar el campo de mail y pass
  const handleOnEndEditing = async () => {
    if (enable) {
      await handleSendLogin();
    }
  };

  //limpia el campo del mail
  const handleClearEmail = () => {
    setMail('');
  };

  //asigna el valor inicial del input del mail
  useEffect(() => {
    setMail(auth.register.to || auth.forgot.mail || '');
  }, [auth.forgot.mail, auth.register.to]);

  //muestra mensajes de eeror en caso de que existan y habilita el botón si los datos están bien
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const validMail = useValidateEmail(mail);
    const validPass = pass.length >= 8;
    setEnable(validMail && validPass);
    if (mail.length > 0 && !validMail) {
      setEmailErrorMessage('Correo inválido');
    } else {
      setEmailErrorMessage('');
    }
    if (pass.length > 0 && !validPass) {
      setPassErrorMessage('La contraseña debe ser de 8 caracteres');
    } else {
      setPassErrorMessage('');
    }
  }, [mail, pass]);

  //se actualiza con el cambio del estado
  useEffect(() => {
    if (!auth.login.token) {
      setAlert({
        title: 'Error',
        message: auth.login.message,
        type: 'error',
      });
      setShowWaiting(false);
    }
  }, [auth.login.token, auth.login.message]);

  return (
    <GradientContainer
      topColor={theme.colors.authBackgroundColor}
      bottomColor={theme.colors.authBackgroundColor}>
      <TopAuthScreenContainer
        colorText={theme.colors.h1Auth}
        title="Inicia Sesión"
        onPress={handleGoBack}
      />
      <BottomAuthScreenContainer
        title="Bienvenido de vuelta"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
        <Input
          autofocus={mail.length <= 1}
          value={mail}
          type="mail"
          placeholder="ejemplo@mail.com"
          onChange={(value: string) => {
            setMail(value.trim());
          }}
          errorMessage={errorEmailMessage}
          label="Correo electrónico"
          clearText={handleClearEmail}
          onEndEditing={handleOnEndEditing}
        />
        <Input
          autofocus={mail.length >= 1}
          value={pass}
          type="password"
          placeholder="Escribe tu contraseña"
          onChange={(value: string) => {
            setPass(value);
          }}
          errorMessage={errorPassMessage}
          label="Contraseña"
          onEndEditing={handleOnEndEditing}
        />
        <Link
          text="¿Olvidaste tu contraseña?"
          onPress={() => navigation.navigate('Forgot')}
        />
        <Button
          title="Continuar"
          disable={!enable}
          action={handleSendLogin}
          colorText={theme.colors.authButtonText}
          color={theme.colors.authButton}
        />
      </BottomAuthScreenContainer>
      <Waiting visible={showWaiting} />
      {auth.login.message ? (
        <Alert
          title={alert.title}
          desc={alert.message}
          type={alert.type}
          onPress={handleCloseAlert}
        />
      ) : null}
    </GradientContainer>
  );
};

//pasa los datos del state a los props
const mapStateToProps = (state: object) => {
  return state;
};

//pasa las funciones para ejecutar los thunks a los props
const mapDispatchToProps = (dispatch: any) => ({
  login: (body: object) => dispatch(asyncLogin(body)),
  clear: (context: string) => dispatch(asyncClear(context)),
});

//conecta el estado y dispara las acciones y exporta la pantalla
export default connect(mapStateToProps, mapDispatchToProps)(Login);
