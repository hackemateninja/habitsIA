/*
 * Pantalla para recoperrar la contraseña
 * */

import React, {useEffect, useState} from 'react';
import TopAuthScreenContainer from './components/TopAuthScreenContainer';
import BottomAuthScreenContainer from './components/BottomAuthScreenContainer';
import Input from './components/Input';
// @ts-ignore
import {connect} from 'react-redux';
import {Button, GradientContainer, Waiting} from '../../components';
import {asyncClear, asyncReset} from '../../state/thunks/auth';

const Reset = ({navigation, theme, auth, clear, reset}: any) => {
  //estado local
  const [code, setCode] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorPassConfirm, setErrorPassConfirm] = useState('');
  const [showWaiting, setShowWaiting] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [disable, setDisable] = useState(true);

  //vuelve y borra los datos del store
  const back = () => {
    navigation.goBack();
    clear('reset');
    clear('forgot');
  };

  //limpia el código cuando lo presionan
  const clearText = () => {
    setCode('');
  };

  //funcion que sirve para actualizar la contraseña en el thunk
  const updatePass = () => {
    const body = {
      mail: auth.forgot.mail,
      password: passConfirm,
    };
    reset(body);
    setShowWaiting(true);
  };

  //cambia de descripción si el codigo coincide con el del mail
  const description = (): string => {
    if (showNewPass) {
      return 'Ingresa tu nueva contraseña para poder iniciar sesión';
    } else {
      return `Ingresa la clave que enviamos a ${auth.forgot.mail} e ingresa tu nueva contraseña`;
    }
  };

  //cambia de titulo si el codigo coincide con el del mail
  const title = (): string => {
    if (showNewPass) {
      return 'Nueva contraseña';
    } else {
      return 'Código de verificación';
    }
  };

  //cambia de subtitulo si el codigo coincide con el del mail
  const subTitle = (): string => {
    if (showNewPass) {
      return 'Actualiza tu contraseña';
    } else {
      return 'Ingresa código de verificación';
    }
  };

  //verivica los cambios entrantes del store
  useEffect(() => {
    if (auth.reset.message.length > 1) {
      if (auth.reset.status) {
        setShowWaiting(false);
        clear('reset');
        clear('forgot');
        navigation.replace('Login');
      } else {
        setShowWaiting(false);
        clear('reset');
      }
    }
  }, [auth.reset]);

  //valida los campos
  useEffect(() => {
    if (pass.length > 1 && pass.length < 8) {
      setErrorPass('La contraseña debe tener al menos 8 caracteres');
    } else {
      setErrorPass('');
    }
    if (passConfirm.length > 1 && pass !== passConfirm) {
      setErrorPassConfirm('Las contraseñas deben coincidir');
    } else {
      setErrorPassConfirm('');
    }
    if (pass.length > 1 && passConfirm.length > 1) {
      if (pass === passConfirm) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  }, [pass, passConfirm]);

  //verifica que el codigo sea el mismo que el del mail
  useEffect(() => {
    if (code.length > 1) {
      if (code === auth.forgot.message) {
        setShowNewPass(true);
      } else {
        setShowNewPass(false);
        setErrorCode('Código inválido');
      }
    }
  }, [code]);

  return (
    <GradientContainer
      topColor={theme.colors.authBackgroundColor}
      bottomColor={theme.colors.authBackgroundColor}>
      <TopAuthScreenContainer
        title={title()}
        onPress={back}
        colorText={theme.colors.h1Auth}
      />
      <BottomAuthScreenContainer title={subTitle()} description={description()}>
        <Input
          autofocus={true}
          maxLength={7}
          type="number"
          value={code}
          clearText={clearText}
          placeholder="1234567"
          onChange={(value: string) => {
            setCode(value);
          }}
          label="Ingresa el còdigo de verificaciòn"
          errorMessage={errorCode}
        />
        <Input
          type="password"
          value={pass}
          placeholder="Nueva contraseña"
          onChange={(value: string) => {
            setPass(value);
          }}
          label="Ingresa tu nueva contraseña"
          errorMessage={errorPass}
        />
        <Input
          type="password"
          value={passConfirm}
          placeholder="Confirma tu contraseña"
          onChange={(value: string) => {
            setPassConfirm(value);
          }}
          label="Confirma tu nueva contraseña"
          errorMessage={errorPassConfirm}
        />
        <Button
          title="Actualizar contraseña"
          action={updatePass}
          colorText={theme.colors.authButtonText}
          color={theme.colors.authButton}
          disable={disable}
        />
      </BottomAuthScreenContainer>
      <Waiting visible={showWaiting} color={theme.colors.primary} />
    </GradientContainer>
  );
};

//pasa el esto global por los props
const mapStateToProps = (state: any) => {
  return state;
};
//pasa las acciones por los props
const mapDispatchToProps = (dispatch: any) => ({
  clear: (context: string) => dispatch(asyncClear(context)),
  reset: (body: object) => dispatch(asyncReset(body)),
});

//exporta las acciones y el stado y luego la pantalla
export default connect(mapStateToProps, mapDispatchToProps)(Reset);
