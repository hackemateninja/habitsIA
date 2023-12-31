/*
 * pantalla de registro que obtiene el id de la empresa y los departamentos
 * */
/*import React, {useEffect, useState} from 'react';
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
} from '../../state/thunks';
import {GradientContainer, Button, Waiting} from '../../components';

const Register = ({
  navigation,
  theme,
  getCompany,
  setCompany,
  auth,
  clear,
}: any) => {
  //estado local
  const [dep, setDep] = useState([]);
  const [code, setCode] = useState('');
  const [validData, setValidData] = useState(false);
  const [shoWaiting, setShowWaiting] = useState(false);

  //borra los datos del estado cuando navega hacia atrás
  const goBack = () => {
    navigation.goBack();
    clear('register');
  };

  //guncion que sirve para activar el thunk de obtener data de la empresa
  const getData = () => {
    getCompany(code);
  };

  //funcion que sirve para mostrar el indicador en pantalla en caso de que haga un dismiss keyboard
  const onEndEditing = () => {
    if (code.length >= 7) {
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
    clear('register');
  };

  //efecto que sirve para validar el codigo y mostrar un loading mientras lo carga, si existe la data
  //hace un dismiss del teclado
  useEffect(() => {
    const companyData = auth.company;
    if (companyData.name.length > 1) {
      if (companyData.id.length < 1) {
        setValidData(false);
        alert(companyData.name);
        clear('register');
        setShowWaiting(false);
      } else {
        setValidData(true);
        setShowWaiting(false);
        Keyboard.dismiss();
      }
    }
  }, []);

  //efecto que verifica que se cumpla el patron en el text input y obtiene los datos
  useEffect(() => {
    if (code.length >= 3) {
      const start = code.substring(0, 3);
      const end = code.substring(4, 7);
      const string = start + '-' + end;
      setCode(string);
    }
  }, [code]);

  const items = [
    {
      values: [
        'Libélula Soft',
        'Murguía',
        'Asyste',
        'Biocodex',
        'Seguros Monterrey New York Life',
        'Habits',
        'Farmapronto',
        'THE',
        'Otra',
        'Natura',
      ],
      _id: '5ebddc2b404d8e002418af82',
      name: 'empresa',
    },
    {
      values: [
        'Otra',
        'Comercial',
        'Marketing',
        'Administrativo',
        'Finanzas',
        'Operaciones',
      ],
      _id: '5ebddc2b404d8e002418af83',
      name: 'areas',
    },
  ];

  const InputComponent = () => {
    if (auth.company.deps.length > 1){
      return (
        <>
          <Input
            value={auth.company.name}
            label={REGISTER.companyLabel}
            onChange={() => {}}
            editable={false}
          />
          {items.map((i, idx) => {
            return (
              <Picker
                key={i.name}
                value={dep[idx]}
                items={i.values}
                label={i.name.toUpperCase()}
                onValueChange={(itemValue: React.ReactText) => {
                  // @ts-ignore
                  setDep((prevState) => [...prevState, itemValue.toString()]);
                }}
              />
            );
          })}
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
          maxLength={8}
          value={code}
          label={REGISTER.codeLabel}
          type={REGISTER.codeType}
          placeholder={REGISTER.codePlaceHolder}
          onChange={(value: string) => setCode(value)}
          onEndEditing={onEndEditing}
          clearText={clearText}
        />
        <Link text={REGISTER.linkTitle} onPress={sendMail} />
        <InputComponent />
      </BottomAuthScreenContainer>
      <Waiting visible={shoWaiting} />
    </GradientContainer>
  );
};

//manta el estado global a los props
const mapStateToProps = (state: any) => {
  return state;
};

//funciones que ejecutan los thunks a los props
const mapDispatchToProps = (dispatch: any) => ({
  getCompany: (code: string) => dispatch(asyncGetCompany(code)),
  clear: (context: string) => dispatch(asyncClear(context)),
  setCompany: (companyId: string, dep: string) =>
    dispatch(asyncRegisterCompany(companyId, dep)),
});

//conecta el estado y las acciones y export la pantalla
export default connect(mapStateToProps, mapDispatchToProps)(Register);
*/
