import React, {useEffect, useState} from 'react';
import Info from './components/Info';
import DeviceInfo from 'react-native-device-info';

// @ts-ignore
import {connect} from 'react-redux';
import {GLOBAL_STYLES, LAYOUT} from '../../constants';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {GradientContainer, Header} from '../../components';
import ItemInfo from './components/ItemInfo';
import StaticStyles from './styles/StaticStyles';

const About = ({navigation, theme, auth}: any) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');
  const [bundle, setBundle] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const leftAction = () => {
    navigation.goBack();
  };

  const desc = `${DeviceInfo.getSystemName()} tipo: ${DeviceInfo.getDeviceType()} size: ${LAYOUT.window.width.toFixed()} x ${LAYOUT.window.height.toFixed()}`;

  useEffect(() => {
    setName(DeviceInfo.getApplicationName() || '');
    setVersion(`${DeviceInfo.getModel()} ${DeviceInfo.getSystemVersion()}`);
    setDescription(desc);
    setBundle(DeviceInfo.getVersion());
    setEmail(auth.login.email);
    setUser(auth.login.user);
  }, [auth.login.email, auth.login.user, desc]);

  const sendHelp = async () => {
    const message = `Hola tengo problemas en la app, con el tipo de dispositivo: ${description}, soy el usuario: ${user} registrado con el email: ${email} que tiene el sistema: ${version}`;
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
          <ItemInfo color={theme.colors.mainText} title="Usuario" info={user} />
          <ItemInfo color={theme.colors.mainText} title="Email" info={email} />
        </Info>
      </View>
      <TouchableOpacity onPress={sendHelp}>
        <Text style={StaticStyles.help}>Solicitar ayuda</Text>
      </TouchableOpacity>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(About);
