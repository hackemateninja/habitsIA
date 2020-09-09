import React, {useEffect, useState} from 'react';
import Info from './components/Info';
import DeviceInfo from 'react-native-device-info';

// @ts-ignore
import {connect} from 'react-redux';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../../constants';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {GradientContainer, Header} from '../../components';
import ItemInfo from './components/ItemInfo';

const About = ({navigation, theme, auth}: any) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');
  const [bundle, setBundle] = useState('');
  const leftAction = () => {
    navigation.goBack();
  };

  const desc = `${DeviceInfo.getSystemName()} tipo: ${DeviceInfo.getDeviceType()} size: ${LAYOUT.window.width.toFixed()} x ${LAYOUT.window.height.toFixed()}`;

  useEffect(() => {
    setName(DeviceInfo.getApplicationName() || '');
    setVersion(`${DeviceInfo.getModel()} ${DeviceInfo.getSystemVersion()}`);
    setDescription(desc);
    setBundle(DeviceInfo.getVersion());
  }, [desc]);

  const sendHelp = async () => {
    const user = auth.login.user;
    const mail = auth.login.email;
    const message = `Hola tengo problemas en la app, con el tipo de dispositivo: ${description}, soy el usuario: ${user} registrado con el email: ${mail} que tiene el sistema: ${version}`;
    const number = '+52 55 7767 8352';
    await Linking.openURL(`whatsapp://send?text=${message}&phone=${number}`);
  };

  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <Header
        textColor={theme.colors.mainText}
        hasBack={true}
        title="A cerca de"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <View style={GLOBAL_STYLES.center}>
        <Info color={theme.colors.mainText}>
          <ItemInfo color={theme.colors.mainText} title="Nombre" info={name} />
          <ItemInfo
            color={theme.colors.mainText}
            title="Sistema"
            info={version}
          />
          <ItemInfo
            color={theme.colors.mainText}
            title="Descripción"
            info={description}
          />
          <ItemInfo
            color={theme.colors.mainText}
            title="Versión"
            info={bundle}
          />
          <ItemInfo
            color={theme.colors.mainText}
            title="Usuario"
            info={auth.login.user}
          />
          <ItemInfo
            color={theme.colors.mainText}
            title="Email"
            info={auth.login.email}
          />
        </Info>
      </View>
      <TouchableOpacity onPress={sendHelp}>
        <Text
          style={{
            color: COLORS.greenPastel,
            textDecorationLine: 'underline',
            textAlign: 'center',
            ...GLOBAL_STYLES.h6,
          }}>
          Solicitar ayuda
        </Text>
      </TouchableOpacity>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(About);
