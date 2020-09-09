/*
 * Pantalla de bienvenida la primer pantalla que se muestra cuando
 * no se está loggeado
 * */
import React from 'react';
import AuthStyles from './styles/AuthStyles';
import {Button, GradientContainer} from '../../components';
import {View, Text, Image} from 'react-native';
import WELCOME from './mocks/welcomeMock';
// @ts-ignore
import {connect} from 'react-redux';

const Welcome = ({theme, navigation}: any) => {
  //styles
  const subTitleStyle = {
    ...AuthStyles.welcomeSubTitle,
    color: theme.colors.p,
  };
  const titleStyle = {
    ...AuthStyles.welcomeTitle,
    color: theme.colors.h1,
  };

  return (
    <GradientContainer
      topColor={theme.colors.topGradient}
      bottomColor={theme.colors.bottomGradient}>
      <View style={AuthStyles.welcomeContainer}>
        <Image style={AuthStyles.welcomeLogo} source={WELCOME.logo} />
        <Text style={titleStyle}>{WELCOME.title}</Text>
        <Text style={subTitleStyle}>{WELCOME.subTitle}</Text>
        <Button
          title={WELCOME.primaryButtonTitle}
          colorText={theme.colors.primaryButtonText}
          color={theme.colors.primaryButton}
          action={() => navigation.navigate('Login')}
        />
        <View style={AuthStyles.welcomeButtonSeparation} />
        <Button
          color={theme.colors.secondaryButton}
          colorText={theme.colors.secondaryButtonText}
          title={WELCOME.secondaryButtonTitle}
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
