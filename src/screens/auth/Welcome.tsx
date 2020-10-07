/*
 * Pantalla de bienvenida la primer pantalla que se muestra cuando
 * no se está loggeado
 * */
import React from 'react';
import AuthStyles from './styles/AuthStyles';
import {Button, GradientContainer} from '../../components';
import {View, Text, Image} from 'react-native';
// @ts-ignore
import {connect} from 'react-redux';
import {IMAGES} from '../../constants';

const Welcome = ({theme, navigation}: any) => {
  //styles
  const subTitleStyle = {
    color: theme.colors.p,
    ...AuthStyles.welcomeSubTitle,
  };
  const titleStyle = {
    color: theme.colors.h1,
    ...AuthStyles.welcomeTitle,
  };

  return (
    <GradientContainer
      topColor={theme.colors.topGradient}
      bottomColor={theme.colors.bottomGradient}>
      <View style={AuthStyles.welcomeContainer}>
        <Image style={AuthStyles.welcomeLogo} source={IMAGES.logo} />
        <Text style={titleStyle}>Bienvenido. Ingresa o regístrate</Text>
        <Text style={subTitleStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Button
          colorText={theme.colors.primaryButtonText}
          color={theme.colors.primaryButton}
          title="Iniciar sesión"
          action={() => navigation.navigate('Login')}
        />
        <View style={AuthStyles.welcomeButtonSeparation} />
        <Button
          color={theme.colors.secondaryButton}
          colorText={theme.colors.secondaryButtonText}
          title="Regístrate"
          action={() => navigation.navigate('Register')}
        />
      </View>
    </GradientContainer>
  );
};

//retorna el estado
const mapStateToProps = (state: any) => {
  return state;
};
//retorna el estado y exporta la pantalla
export default connect(mapStateToProps)(Welcome);
