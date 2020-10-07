import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header, IconButton} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../../constants';
import {Text, View} from 'react-native';

const Settings = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.goBack();
  };

  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}>
      <Header
        textColor={theme.colors.mainText}
        hasBack={true}
        title="Configuraciones"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <LinearGradient
        style={{
          width: '100%',
          height: LAYOUT.window.height * 0.15,
          overflow: 'visible',
          ...GLOBAL_STYLES.center,
        }}
        colors={[COLORS.primary, COLORS.hardPrimary]}>
        <View
          style={{
            width: LAYOUT.window.width * 0.2,
            height: LAYOUT.window.width * 0.2,
            borderRadius: (LAYOUT.window.width * 0.2) / 2,
            padding: 5,
            backgroundColor: COLORS.white,
            top: (LAYOUT.window.width * 0.2) / 1.2,
          }}
        />
      </LinearGradient>
      <View style={{marginTop: 75, ...GLOBAL_STYLES.screenContainer}}>
        <Text style={{color: theme.colors.mainText, textAlign: 'center', ...GLOBAL_STYLES.p, marginBottom: 25}}>
          Acá puedes configurar tu cuenta, actualizar tus datos personales y de la empresa , preferencias de la app y datos de seguridad
        </Text>
        <View style={{borderColor: COLORS.grey, borderBottomWidth: 1, padding: 8, ...GLOBAL_STYLES.rowBetweenCenter}}>
          <Text style={{color: COLORS.primary, ...GLOBAL_STYLES.h6}}>
            Datos Personales
          </Text>
          <IconButton onPress={()=>{}} icon="ios-chevron-forward" iconColor={COLORS.primary} size={30}/>
        </View>

        <View style={{borderColor: COLORS.grey, borderBottomWidth: 1, padding: 8, ...GLOBAL_STYLES.rowBetweenCenter}}>
          <Text style={{color: COLORS.primary, ...GLOBAL_STYLES.h6}}>
            Datos Empresa
          </Text>
          <IconButton onPress={()=>{}} icon="ios-chevron-forward" iconColor={COLORS.primary} size={30}/>
        </View>

        <View style={{borderColor: COLORS.grey, borderBottomWidth: 1, padding: 8, ...GLOBAL_STYLES.rowBetweenCenter}}>
          <Text style={{color: COLORS.primary, ...GLOBAL_STYLES.h6}}>
            Preferencias del app
          </Text>
          <IconButton onPress={()=>{}} icon="ios-chevron-forward" iconColor={COLORS.primary} size={30}/>
        </View>
        <View style={{borderColor: COLORS.grey, borderBottomWidth: 1, padding: 8, ...GLOBAL_STYLES.rowBetweenCenter}}>
          <Text style={{color: COLORS.primary, ...GLOBAL_STYLES.h6}}>
            Seguridad
          </Text>
          <IconButton onPress={()=>{}} icon="ios-chevron-forward" iconColor={COLORS.primary} size={30}/>
        </View>
      </View>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
