import React, {useEffect, useState} from 'react';
import Info from './components/Info';
import DeviceInfo from 'react-native-device-info';

// @ts-ignore
import {connect} from 'react-redux';
import {GLOBAL_STYLES, LAYOUT} from '../../constants';
import {View} from 'react-native';
import {GradientContainer, Header} from '../../components';
import ItemInfo from './components/ItemInfo';

const About = ({navigation, theme}: any) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');
  const [bundle, setBundle] = useState('');
  const leftAction = () => {
    navigation.goBack();
  };

  const desc = `${DeviceInfo.getSystemName()} tipo: ${DeviceInfo.getDeviceType()} size: ${
    LAYOUT.window.width
  } x ${LAYOUT.window.height}`;

  useEffect(() => {
    setName(DeviceInfo.getApplicationName() || '');
    setVersion(`${DeviceInfo.getModel()} ${DeviceInfo.getSystemVersion()}`);
    setDescription(desc);
    setBundle(DeviceInfo.getVersion());
  }, [desc]);

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
            title="Versión del sistema"
            info={version}
          />
          <ItemInfo
            color={theme.colors.mainText}
            title="Descripción"
            info={description}
          />
          <ItemInfo
            color={theme.colors.mainText}
            title="Build version"
            info={bundle}
          />
        </Info>
      </View>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(About);
