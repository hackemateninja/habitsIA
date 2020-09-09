/*
 * pantalla de registro que obtiene el id de la empresa y los departamentos
 * */
import React, {useEffect, useState} from 'react';
import sendMail from './functions/sendMail';
import Link from './components/Link';
import BottomAuthScreenContainer from './components/BottomAuthScreenContainer';
import Picker from './components/Picker';
import Input from './components/Input';
import TopAuthScreenContainer from './components/TopAuthScreenContainer';
import REGISTER from './mocks/registerMock';
import {Keyboard} from 'react-native';
// @ts-ignore
import {connect} from 'react-redux';
import {
  asyncGetCompany,
  asyncClear,
  asyncRegisterCompany,
} from '../../state/thunks/auth';
import {GradientContainer, Button, Waiting} from '../../components';

// TODO usar stado local para manejar el store
const Register = ({
  navigation,
  theme,
  getCompany,
  setCompany,
  auth,
  clear,
}: any) => {
  //estado local
  const [dep, setDep] = useState('');
  const [code, setCode] = useState('');
  const [validData, setValidData] = useState(false);
  const [shoWaiting, setShowWaiting] = useState(false);

  //borra los datos del estado cuando navega hacia atrás
  const goBack = () => {
    navigation.goBack();
    clear(REGISTER.clearContext);
  };

  //guncion que sirve para activar el thunk de obtener data de la empresa
  const getData = () => {
    const body = {
      name: code.toUpperCase(),
      option: 3,
    };
    getCompany(body);
  };

  //funcion que sirve para mostrar el indicador en pantalla en caso de que haga un dismiss keyboard
  const onEndEditing = () => {
    if (auth.company.name.length < 1 && code.length >= 7) {
      setShowWaiting(true);
      getData();
    }
  };

  //navega a la siguiente pantalla y registra los datos en el store
  const nav = () => {
    const selectedDep = dep.length > 1 ? dep : auth.company.deps[0];
    setCompany(auth.company.id, selectedDep);
    navigation.navigate(REGISTER.buttonRoute);
  };

  const clearText = () => {
    setCode('');
    clear(REGISTER.clearContext);
  };

  //efecto que sirve para validar el codigo y mostrar un loading mientras lo carga, si existe la data
  //hace un dismiss del teclado
  useEffect(() => {
    const companyData = auth.company;
    if (companyData.name.length > 1) {
      if (companyData.id.length < 1) {
        setValidData(false);
        // eslint-disable-next-line no-alert
        alert(companyData.name);
        clear(REGISTER.clearContext);
        setShowWaiting(false);
      } else {
        setValidData(true);
        setShowWaiting(false);
        Keyboard.dismiss();
      }
    }
  }, [auth.company, clear]);

  //efecto que verifica que se cumpla el patron en el text input y obtiene los datos
  useEffect(() => {
    if (code.length >= 7) {
      getData();
    } else {
      setValidData(false);
    }
    if (code.length >= 3) {
      const start = code.substring(0, 3);
      const end = code.substring(4, 7);
      const string = start + '-' + end;
      setCode(string);
    }
  }, [code, getData]);

  const InputComponent = () => {
    if (validData && auth.company.name) {
      return (
        <>
          <Input
            value={auth.company.name}
            label={REGISTER.companyLabel}
            onChange={() => {}}
            editable={false}
          />
          <Picker
            value={dep}
            items={auth.company.deps}
            label={REGISTER.depLabel}
            onValueChange={(itemValue: React.ReactText) =>
              setDep(itemValue.toString())
            }
          />
          <Button
            title={REGISTER.buttonTitle}
            colorText={theme.colors.authButtonText}
            color={theme.colors.authButton}
            action={nav}
          />
        </>
      );
    }
    return null;
  };

  return (
    <GradientContainer
      topColor={theme.colors.authBackgroundColor}
      bottomColor={theme.colors.authBackgroundColor}>
      <TopAuthScreenContainer
        colorText={theme.colors.h1Auth}
        title={REGISTER.topTitle}
        onPress={goBack}
      />
      <BottomAuthScreenContainer
        title={REGISTER.title}
        description={REGISTER.subTitle}>
        <Input
          autofocus={true}
          maxLength={9}
          value={code}
          label={REGISTER.codeLabel}
          type={REGISTER.codeType}
          placeholder={REGISTER.codePlaceHolder}
          onChange={(value: string) => {
            setCode(value);
          }}
          onEndEditing={onEndEditing}
          clearText={clearText}
        />
        <Link text={REGISTER.linkTitle} onPress={sendMail} />
        <InputComponent />
      </BottomAuthScreenContainer>
      <Waiting color={theme.colors.primary} visible={shoWaiting} />
    </GradientContainer>
  );
};

//manta el estado global a los props
const mapStateToProps = (state: any) => {
  return state;
};

//funciones que ejecutan los thunks a los props
const mapDispatchToProps = (dispatch: any) => ({
  getCompany: (body: object) => dispatch(asyncGetCompany(body)),
  clear: (context: string) => dispatch(asyncClear(context)),
  setCompany: (companyId: string, dep: string) =>
    dispatch(asyncRegisterCompany(companyId, dep)),
});

//conecta el estado y las acciones y export la pantalla
export default connect(mapStateToProps, mapDispatchToProps)(Register);
