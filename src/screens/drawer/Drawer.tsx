/*
 * Menù lateral que se despliega al tocar el icono superior izquierdo o al hacer swipe de
 * izquierda a derecha
 * */
//Importaciones múltiples al final
import React from 'react';
import DrawerStyles from './styles/DrawerStyle';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerItem from './components/DrawerItem';
// @ts-ignore
import {connect} from 'react-redux';
import {useChangeStatusBar} from '../../hooks';
import {View} from 'react-native';
import {asyncLogout} from '../../state/thunks/auth';
import AvatarContainer from './components/AvatarContainer';

const Drawer = (props: any) => {
  const {theme, navigation, logout, auth} = props;

  useChangeStatusBar(
    theme.colors.backGroundDrawer,
    theme.colors.backGroundScreen,
  );
  // TODO crear un componente dinamico en base a los props
  return (
    <DrawerContentScrollView
      style={DrawerStyles.drawerContainer}
      scrollEnabled={true}>
      <AvatarContainer
        name={auth.login.user}
        company={auth.login.company.name}
        avatar={auth.login.avatar}
        logo={auth.login.company.logo}
        theme={theme.colors}
      />
      <View style={DrawerStyles.itemsContainer}>
        <DrawerItem
          onPress={() => {
            navigation.navigate('Day');
          }}
          icon={'ios-calendar-outline'}
          label={'Actividades'}
          focused={false}
          color={theme.colors.mainText}
        />
        <DrawerItem
          onPress={() => {
            navigation.navigate('Courses');
          }}
          icon={'ios-library-outline'}
          label={'Cursos'}
          focused={false}
          color={theme.colors.mainText}
        />
        <DrawerItem
          onPress={() => {
            navigation.navigate('Progress');
          }}
          icon={'stats-chart-outline'}
          label={'Mi progreso'}
          focused={false}
          color={theme.colors.mainText}
        />
        <DrawerItem
          onPress={() => {
            navigation.navigate('Diet');
          }}
          icon={'ios-nutrition-outline'}
          label={'Dieta'}
          focused={false}
          color={theme.colors.mainText}
        />
        <DrawerItem
          onPress={() => {
            navigation.navigate('Points');
          }}
          icon={'trophy-outline'}
          label={'Mis puntos'}
          focused={false}
          color={theme.colors.mainText}
        />
        <DrawerItem
          onPress={() => {
            navigation.navigate('History');
          }}
          icon={'ios-checkmark-circle-outline'}
          label={'Actividades realizadas'}
          focused={false}
          color={theme.colors.mainText}
        />
        <DrawerItem
          onPress={() => {
            navigation.navigate('Connect');
          }}
          icon={'ios-watch-outline'}
          label={'Conectar'}
          focused={false}
          color={theme.colors.mainText}
        />
        <DrawerItem
          onPress={() => {
            navigation.navigate('Support');
          }}
          icon={'ios-help-buoy-outline'}
          label={'Soporte'}
          focused={false}
          color={theme.colors.mainText}
        />
        <DrawerItem
          onPress={() => {
            navigation.navigate('About');
          }}
          icon={'ios-shield-outline'}
          label={'A cerca de'}
          focused={false}
          color={theme.colors.mainText}
        />
      </View>
      <View style={DrawerStyles.logOutContainer}>
        <DrawerItem
          onPress={logout}
          icon={'ios-log-out-outline'}
          label={'Cerrar sesión'}
          focused={false}
          color={theme.colors.mainText}
        />
      </View>
    </DrawerContentScrollView>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(asyncLogout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
