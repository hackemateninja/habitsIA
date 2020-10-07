/*
 * Componente de carga de pantalla, una pantalla completa con un activity
 * indicator que muestra en mensaje de espera
 * */

//importaciones multiples al final
import React, {useEffect} from 'react';
import GradientContainer from '../../components/GradientContainer';
// @ts-ignore
import {connect} from 'react-redux';
import {GLOBAL_STYLES, IMAGES, LAYOUT} from '../../constants';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useCheckAndroid} from '../../hooks';
import CareStyles from './styles/CareStyles';
import {ActionCreator} from 'redux';
import {asyncGetMessage} from '../../state/thunks';

//logo

const CareLoading = ({theme, navigation, care, auth, getMessage}: any) => {
  const userId = auth.login._id;

  const textStyle = {
    color: theme.colors.mainText,
    marginTop: 30,
    ...GLOBAL_STYLES.h6,
  };
  const title = {
    color: theme.colors.mainText,
    marginBottom: LAYOUT.window.height * 0.07,
    ...GLOBAL_STYLES.h1Bold,
  };
  const caption = {
    color: theme.colors.mainText,
    opacity: 0.6,
    ...GLOBAL_STYLES.p,
  };
  //console.log(auth);


  useEffect(() => {
    /*setTimeout(() => {
      navigation.navigate('Drawer');
    }, 2000);*/
    getMessage(userId);
  }, []);

  const size = useCheckAndroid() ? 75 : 'large';
  return (
    <GradientContainer
      topColor={theme.colors.topGradient}
      bottomColor={theme.colors.bottomGradient}>
      <View style={CareStyles.loadingContainer}>
        <Image style={GLOBAL_STYLES.logo} source={IMAGES.logo} />
        <Text style={title}>HABITS.AI</Text>
        <Text style={textStyle}>{care.messageLoading.message}</Text>
        <ActivityIndicator
          size={size}
          color={theme.colors.mainText}
          style={CareStyles.activityIndicator}
        />
        <Text style={caption}>Por favor espera</Text>
        <Text style={caption}>Se está cargando la información</Text>
      </View>
    </GradientContainer>
  );
};
//exporta el estado a los props
const mapStateToProps = (state: any) => {
  return state;
};
//exporta las acciones y las pasa por los props
const mapDispatchToProps = (dispatch: ActionCreator<any>) => ({
  getMessage: (userId: string) => dispatch(asyncGetMessage(userId)),
});
//retorna el estado y exporta la pantalla
export default connect(mapStateToProps, mapDispatchToProps)(CareLoading);
