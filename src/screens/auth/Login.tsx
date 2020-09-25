/*
 * Pantalla de login recive data de store/auth
 * ejecuta las acciones de thunk/auth
 * */
import React, {useEffect, useState} from 'react';
import Link from './components/Link';
import LOGIN from './mocks/loginMock';
import TopAuthScreenContainer from './components/TopAuthScreenContainer';
import BottomAuthScreenContainer from './components/BottomAuthScreenContainer';
import Input from './components/Input';
import {useValidateEmail} from '../../hooks';
// @ts-ignore
import {connect} from 'react-redux';
import {asyncLogin, asyncClear} from '../../state/thunks/auth';
import {Button, GradientContainer, Waiting, Alert} from '../../components';

const Login = ({theme, navigation, login, auth, clear}: any) => {
  //estado local
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [enable, setEnable] = useState(false);
  const [errorEmailMessage, setEmailErrorMessage] = useState('');
  const [showWaiting, setShowWaiting] = useState(false);
  const [alert, setAlert] = useState({
    message: '',
    title: '',
    show: false,
    type: '',
  });

  //borra los datos del estado cuando navega hacia atrás
  const handleGoBack = () => {
    navigation.goBack();
    clear(LOGIN.clearContext);
  };

  //ciera la alerta y limpia el estado
  const handleCloseAlert = () => {
    setAlert({
      title: '',
      message: '',
      show: false,
      type: '',
    });
    clear(LOGIN.clearContext);
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

  //asigna el valor inicial del input del mail
  useEffect(() => {
    setMail(auth.registerPersonal.to || auth.forgot.mail || '');
  }, [auth.forgot.mail, auth.registerPersonal.to]);
  //valida y habilita botón
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const enable = useValidateEmail(mail);
    setEnable(enable && pass.length >= 8);
    if (!enable && mail.length > 1) {
      setEmailErrorMessage('Correo inválido');
    } else {
      setEmailErrorMessage('');
    }
  }, [mail, pass]);

  //se actualiza con el cambio del estado
  useEffect(() => {
    if (auth.login.message.length > 1 && !auth.login.isLogged) {
      setAlert({
        title: 'Error',
        message: auth.login.message,
        show: true,
        type: 'error',
      });
      setShowWaiting(false);
    }
  }, [auth.login.isLogged, auth.login.message]);

  return (
    <GradientContainer
      topColor={theme.colors.authBackgroundColor}
      bottomColor={theme.colors.authBackgroundColor}>
      <TopAuthScreenContainer
        colorText={theme.colors.h1Auth}
        title={LOGIN.topTitle}
        onPress={handleGoBack}
      />
      <BottomAuthScreenContainer
        title={LOGIN.title}
        description={LOGIN.subTitle}>
        <Input
          autofocus={mail.length <= 1}
          value={mail}
          type={LOGIN.mailType}
          placeholder={LOGIN.mailPlaceHolder}
          onChange={(value: string) => {
            setMail(value);
          }}
          errorMessage={errorEmailMessage}
          label={LOGIN.mailLabel}
        />
        <Input
          autofocus={mail.length >= 1}
          value={pass}
          type={LOGIN.passwordType}
          placeholder={LOGIN.passwordPlaceHolder}
          onChange={(value: string) => {
            setPass(value);
          }}
          label={LOGIN.passwordLabel}
        />
        <Link
          text={LOGIN.linkTitle}
          onPress={() => navigation.navigate(LOGIN.forgotRoute)}
        />
        <Button
          title={LOGIN.buttonTitle}
          disable={!enable}
          action={handleSendLogin}
          colorText={theme.colors.authButtonText}
          color={theme.colors.authButton}
        />
      </BottomAuthScreenContainer>
      <Waiting visible={showWaiting} />
      <Alert
        title={alert.title}
        desc={alert.message}
        type={alert.type}
        onPress={handleCloseAlert}
        visible={alert.show}
      />
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
