/*
 * Pantalla que sirve para enviar un correo de verificacion
 * */
import React, {useEffect, useState} from 'react';
import TopAuthScreenContainer from './components/TopAuthScreenContainer';
import BottomAuthScreenContainer from './components/BottomAuthScreenContainer';
import Input from './components/Input';
// @ts-ignore
import {connect} from 'react-redux';
import {ValidateEmail} from '../../hooks';
import {Button, GradientContainer, Waiting} from '../../components';
import {asyncClear, asyncForgot} from '../../state/thunks/auth';

// TODO usar stado local para manejar el store
//componente que recibe la navegación y los props del store
const Forgot = ({navigation, theme, getCode, auth, clear}: any) => {
  //estado local
  const [mail, setMail] = useState('');
  const [mailError, setMailError] = useState('');
  const [disableChangeButton, setDisableChangeButton] = useState(false);
  const [showWaiting, setShowWaiting] = useState(false);

  //función para regresar que borra el contexto actual
  const back = () => {
    navigation.goBack();
    clear('forgot');
  };

  //funciñon que envia el mail de verificación
  const sendMailToVerify = () => {
    const body = {
      mail: mail,
    };
    getCode(body);
    setShowWaiting(true);
  };

  //limpia el campo de mail
  const clearText = () => {
    setMail('');
  };
  //valida el campo del mail
  useEffect(() => {
    if (ValidateEmail(mail)) {
      setDisableChangeButton(false);
      setMailError('');
    } else {
      setDisableChangeButton(true);
      setMailError('Correo requerido');
    }
  }, [mail]);

  //funcion que acciona dependiendo los cambios del store
  useEffect(() => {
    if (auth.forgot.message.length > 1 && mail.length > 1) {
      if (auth.forgot.status === 200) {
        setShowWaiting(false);
        navigation.navigate('Reset');
      } else {
        setShowWaiting(false);
        //TODO agregar componente de alerta
        alert(auth.forgot.message);
        clear('forgot');
      }
    }
  }, [auth.forgot]);

  return (
    <GradientContainer
      topColor={theme.colors.authBackgroundColor}
      bottomColor={theme.colors.authBackgroundColor}>
      <TopAuthScreenContainer
        title="Olvidé mi clave"
        onPress={back}
        colorText={theme.colors.h1Auth}
      />
      <BottomAuthScreenContainer
        title="Recuperar contraseña"
        description="Por favor ingresa tu email con el què se registró tu cuenta">
        <Input
          value={mail}
          placeholder="example@mail.com"
          onChange={(value: string) => {
            setMail(value);
          }}
          label="Correo eléctronico"
          errorMessage={mailError}
          clearText={clearText}
        />
        <Button
          color={theme.colors.authButton}
          colorText={theme.colors.authButtonText}
          disable={disableChangeButton}
          action={sendMailToVerify}
          title="Enviar correo"
        />
      </BottomAuthScreenContainer>
      <Waiting visible={showWaiting} color={theme.colors.primary} />
    </GradientContainer>
  );
};

//exporta el estado global a los props
const mapStateToProps = (state: any) => {
  return state;
};

//exporta las acciones
const mapDispatchToProps = (dispatch: any) => ({
  getCode: (body: {mail: string}) => dispatch(asyncForgot(body)),
  clear: (context: string) => dispatch(asyncClear(context)),
});

//conecta aacciones y estado y luego exporta el componente
export default connect(mapStateToProps, mapDispatchToProps)(Forgot);
