/*
 * Pantalla que sirve para registrar a un usuario
 * */
import React, {useEffect, useState} from 'react';
import AuthStyles from './styles/AuthStyles';
import TopAuthScreenContainer from './components/TopAuthScreenContainer';
import BottomAuthScreenContainer from './components/BottomAuthScreenContainer';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import {ValidateEmail} from '../../hooks';
// @ts-ignore
import {connect} from 'react-redux';
import {asyncClear, asyncRegisterPersonal} from '../../state/thunks/auth';
import {Alert, Keyboard, View} from 'react-native';
import {Button, GradientContainer, Waiting} from '../../components';
// TODO usar stado local para manejar el store
const RegisterPersonalInfo = ({
  navigation,
  theme,
  auth,
  register,
  clear,
}: any) => {
  //stado local
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [disable, setDisable] = useState(true);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [passVerify, setPassVerify] = useState('');
  const [shoWaiting, setShowWaiting] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorMail, setErrorMail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorConfirmPass, setErrorConfirmPass] = useState('');

  //limpia el estado y regresa a la pantall anterior
  const back = () => {
    clear('personal');
    navigation.goBack();
  };

  //limpia el nombre
  const clearName = () => setName('');

  //limpia el mail
  const clearMail = () => setMail('');

  //envia los datos hacia el thunk
  const sendData = async () => {
    const body = {
      name: name,
      mail: mail,
      pass: pass,
      company: auth.register.companyId,
      filtros: [
        {
          name: 'Área',
          value: auth.register.dep,
        },
      ],
    };
    register(body);
    setShowWaiting(true);
  };

  //verifica que el campo de el nombre sea válido
  const checkName = () => {
    const reg = /^([^0-9]*)$/;
    if (name.length < 4 || !reg.test(name)) {
      setErrorName('Nombre inválido');
    } else {
      setErrorName('');
    }
  };

  //verifica que el campo del mail sea valido
  const checkMail = () => {
    if (!ValidateEmail(mail)) {
      setErrorMail('Email inválido');
    } else {
      setErrorMail('');
    }
  };

  //vefirica que el campo de la contraseña sea valido
  const checkPass = () => {
    if (pass.length < 8) {
      setErrorPass('La contraseña debe tener al menos 8 carácteres');
    } else {
      setErrorPass('');
    }
  };

  //virifica que las contraseñas sean iguales
  const checkConfirmPass = () => {
    if (pass !== passVerify) {
      setErrorConfirmPass('Las contraseñas deben coincidir');
    } else {
      setErrorConfirmPass('');
    }
  };

  //verifica que la data que venga sea correcta y libere un alert para cambiar de pantalla
  useEffect(() => {
    if (auth.registerPersonal.message.length > 1) {
      if (!auth.registerPersonal.user) {
        setShowWaiting(false);
        alert(auth.registerPersonal.message);
        clear('personal');
      } else {
        setShowWaiting(false);
        Alert.alert(
          auth.registerPersonal.message,
          `verifica tu correo: ${auth.registerPersonal.to} para poder iniciar sesion`,
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.replace('Login');
              },
            },
          ],
          {cancelable: false},
        );
      }
    }
  }, [auth.registerPersonal]);

  //verifica y valida que los campos sean correctos para poder activar el boton
  useEffect(() => {
    const validName = name.length >= 4;
    const validMail = ValidateEmail(mail);
    const validPassword = pass.length >= 8;
    const validPasswordVerify = passVerify === pass;

    if (
      validName &&
      validMail &&
      validPassword &&
      validPasswordVerify &&
      toggleCheckBox
    ) {
      setDisable(false);
      Keyboard.dismiss();
    } else {
      setDisable(true);
    }
  }, [name, mail, pass, passVerify, toggleCheckBox]);

  return (
    <GradientContainer
      topColor={theme.colors.authBackgroundColor}
      bottomColor={theme.colors.authBackgroundColor}>
      <TopAuthScreenContainer
        colorText={theme.colors.h1Auth}
        title="Regístrate"
        onPress={back}
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
          onEndEditing={checkName}
          clearText={clearName}
        />
        <Input
          value={mail}
          onChange={(value: string) => {
            setMail(value);
          }}
          label="Correo electrónico"
          type="email"
          errorMessage={errorMail}
          onEndEditing={checkMail}
          clearText={clearMail}
        />
        <Input
          value={pass}
          onChange={(value: string) => {
            setPass(value);
          }}
          type="password"
          label="Contraseña"
          errorMessage={errorPass}
          onEndEditing={checkPass}
        />
        <Input
          value={passVerify}
          onChange={(value: string) => {
            setPassVerify(value);
          }}
          type="password"
          label="Repetir contraseña"
          errorMessage={errorConfirmPass}
          onEndEditing={checkConfirmPass}
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
          action={sendData}
          disable={disable}
        />
        <View style={AuthStyles.separator} />
        <View style={AuthStyles.separator} />
        <View style={AuthStyles.separator} />
      </BottomAuthScreenContainer>
      <Waiting color={theme.colors.primary} visible={shoWaiting} />
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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPersonalInfo);
