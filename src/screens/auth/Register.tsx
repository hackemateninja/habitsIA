/*
 * Pantalla que sirve para registrar a un usuario
 * */
import React, {useEffect, useState} from 'react';
import AuthStyles from './styles/AuthStyles';
import TopAuthScreenContainer from './components/TopAuthScreenContainer';
import BottomAuthScreenContainer from './components/BottomAuthScreenContainer';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import {useValidateEmail} from '../../hooks';
// @ts-ignore
import {connect} from 'react-redux';
import {asyncClear, asyncRegisterPersonal} from '../../state/thunks';
import {View} from 'react-native';
import {Button, GradientContainer, Waiting, Alert} from '../../components';
const Register = ({navigation, theme, auth, register, clear}: any) => {
  //stado local
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [enable, setEnable] = useState(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [passVerify, setPassVerify] = useState('');
  const [shoWaiting, setShowWaiting] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorMail, setErrorMail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorConfirmPass, setErrorConfirmPass] = useState('');
  const [alert, setAlert] = useState({
    message: '',
    title: '',
    type: '',
  });

  //limpia el estado y regresa a la pantall anterior
  const handleGoBack = () => {
    navigation.goBack();
  };

  // limbia el estado global de esta pantalla
  const handleClear = () => {
    clear('register');
  };

  //limpia el nombre
  const handleClearName = () => setName('');

  //limpia el mail
  const handleClearMail = () => setMail('');

  //envia los datos hacia el thunk
  const handleSendRegister = async () => {
    const body = {
      name: name,
      mail: mail,
      pass: pass,
      company: auth.register.companyId,
      born_date: '1993-04-11',
      gender: '5f63d92ff121cd1adfc369bb',
      //id de la categoria
      filter: ['5f73798a0e525a0ab633feb6', '5f737a380e525a0ab633feba'],
      //id del tipo de categoria
      filter_category: ['5f73779c85538c0a1d0d610e', '5f7377f685538c0a1d0d610f'],
    };
    register(body);
    setShowWaiting(true);
  };

  const handleCloseAlert = () => {
    setAlert({
      title: '',
      message: '',
      type: '',
    });
    handleClear();
    setShowWaiting(false);
  };

  const handleOnEndEditing = async () => {
    if (enable) {
      await handleSendRegister();
    }
  };

  //verifica que la data que venga sea correcta y libere un alert para cambiar de pantalla
  useEffect(() => {
    if (!auth.register.success) {
      setAlert({
        title: 'Error',
        message: auth.register.message,
        type: 'error',
      });
      handleClear();
      setShowWaiting(false);
    } else {
      setAlert({
        title: 'Registro exitoso',
        message: auth.register.message,
        type: 'success',
      });
      setShowWaiting(false);
    }
  }, [auth.register.message, auth.register.success]);

  //verifica y valida que los campos sean correctos para poder activar el boton
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const validMail = useValidateEmail(mail);
    const validName = /^([^0-9]*)$/.test(name);
    const validPassword = pass.length >= 8;
    const validPasswordVerify = passVerify === pass;
    if (
      validName &&
      validMail &&
      validPassword &&
      validPasswordVerify &&
      toggleCheckBox
    ) {
      setEnable(true);
    } else {
      setEnable(true);
    }
    if (name.length > 1 && !validName) {
      setErrorName('Nombre inválido');
    } else {
      setErrorName('');
    }
    if (!validMail) {
      setErrorMail('Email inválido');
    } else {
      setErrorMail('');
    }
    if (!validPassword) {
      setErrorPass('La contraseña debe tener al menos 8 carácteres');
    } else {
      setErrorPass('');
    }
    if (!validPasswordVerify) {
      setErrorConfirmPass('Las contraseñas deben coincidir');
    } else {
      setErrorConfirmPass('');
    }
  }, [name, mail, pass, passVerify, toggleCheckBox]);

  return (
    <GradientContainer
      topColor={theme.colors.authBackgroundColor}
      bottomColor={theme.colors.authBackgroundColor}>
      <TopAuthScreenContainer
        colorText={theme.colors.h1Auth}
        title="Regístrate"
        onPress={handleGoBack}
      />
      <BottomAuthScreenContainer
        title="Información personal"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
        <Input
          autofocus={true}
          value={name}
          onChange={(value: string) => {
            setName(value);
          }}
          label="Nombre"
          errorMessage={errorName}
          onEndEditing={handleOnEndEditing}
          clearText={handleClearName}
        />
        <Input
          value={mail}
          onChange={(value: string) => {
            setMail(value);
          }}
          label="Correo electrónico"
          type="email"
          errorMessage={errorMail}
          onEndEditing={handleOnEndEditing}
          clearText={handleClearMail}
        />
        <Input
          value={pass}
          onChange={(value: string) => {
            setPass(value);
          }}
          type="password"
          label="Contraseña"
          errorMessage={errorPass}
          onEndEditing={handleOnEndEditing}
        />
        <Input
          value={passVerify}
          onChange={(value: string) => {
            setPassVerify(value);
          }}
          type="password"
          label="Repetir contraseña"
          errorMessage={errorConfirmPass}
          onEndEditing={handleOnEndEditing}
        />
        <Checkbox
          value={toggleCheckBox}
          onPress={() => setToggleCheckBox(!toggleCheckBox)}
          label="Acepto términos y condiciones"
        />
        <Button
          title="Continuar"
          colorText={theme.colors.authButtonText}
          color={theme.colors.authButton}
          action={handleSendRegister}
          disable={!enable}
        />
        <View style={AuthStyles.separator} />
      </BottomAuthScreenContainer>
      <Waiting visible={shoWaiting} />
      {auth.register.message ? (
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
//pasa el estado por los props
const mapStateToProps = (state: any) => {
  return state;
};

//pasa las acciones a los props
const mapDispatchToProps = (dispatch: any) => ({
  clear: (context: string) => dispatch(asyncClear(context)),
  register: (body: object) => dispatch(asyncRegisterPersonal(body)),
});

//conecta las dos anteriores funciones y exporta el componente
export default connect(mapStateToProps, mapDispatchToProps)(Register);
