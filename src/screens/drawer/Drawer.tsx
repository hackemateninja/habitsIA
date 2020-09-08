/*
* Menù lateral que se despliega al tocar el icono superior izquierdo o al hacer swipe de
* izquierda a derecha
* */
//Importaciones múltiples al final
import React, {useEffect, useMemo} from 'react';
import DrawerStyles from "./styles/DrawerStyle";
import {
	DrawerContentScrollView,
} from '@react-navigation/drawer';
import DrawerItem from './components/DrawerItem';
// @ts-ignore
import {connect} from 'react-redux';
import {ChangeStatusBar} from "../../hooks";
import {
	View,
} from 'react-native';
import {asyncLogout} from "../../state/thunks/auth";
import AvatarContainer from "./components/AvatarContainer";

const Drawer = (props:any)=>{

	const {theme, navigation, state, logout} = props;

	ChangeStatusBar(theme.colors.backGroundDrawer, theme.colors.backGroundScreen);
// TODO crear un componente dinamico en base a los props
	return(
		<DrawerContentScrollView
			style={DrawerStyles.drawerContainer}
			scrollEnabled={true}>
			<AvatarContainer
				name='Mc Lovin'
				company='Habits.ai'
				avatar={'https://www.tribuna.com.mx/u/fotografias/m/2019/11/7/f850x638-79459_156948_5050.jpg'}
				logo={'https://yogalayout.com/static/reactnative.4e03ea5d.png'}
				theme={theme.colors}
			/>
			<View style={DrawerStyles.itemsContainer}>
				<DrawerItem
					onPress={()=>{navigation.navigate('Day')}}
					icon={'ios-calendar'}
					label={'Actividades'}
					focused={true}
					color={theme.colors.mainText}
				/>
				<DrawerItem
					onPress={()=>{navigation.navigate('Progress')}}
					icon={'ios-stats'}
					label={'Mi progreso'}
					focused={false}
					color={theme.colors.mainText}
				/>
				<DrawerItem
					onPress={()=>{navigation.navigate('Diet')}}
					icon={'ios-nutrition'}
					label={'Dieta'}
					focused={false}
					color={theme.colors.mainText}
				/>
				<DrawerItem
					onPress={()=>{navigation.navigate('Points')}}
					icon={'ios-trophy'}
					label={'Mis puntos'}
					focused={false}
					color={theme.colors.mainText}
				/>
				<DrawerItem
					onPress={()=>{navigation.navigate('History')}}
					icon={'ios-checkmark-circle'}
					label={'Actividades realizadas'}
					focused={false}
					color={theme.colors.mainText}
				/>
				<DrawerItem
					onPress={()=>{navigation.navigate('Connect')}}
					icon={'md-watch'}
					label={'Conectar'}
					focused={false}
					color={theme.colors.mainText}
				/>
				<DrawerItem
					onPress={()=>{navigation.navigate('FAQ')}}
					icon={'md-text'}
					label={'Soporte'}
					focused={false}
					color={theme.colors.mainText}
				/>
				<DrawerItem
					onPress={()=>{navigation.navigate('About')}}
					icon={'md-rocket'}
					label={'A cerca de'}
					focused={false}
					color={theme.colors.mainText}
				/>
			</View>
			<View style={DrawerStyles.logOutContainer}>
				<DrawerItem
					onPress={logout}
					icon={'ios-exit'}
					label={'Cerrar sesión'}
					focused={false}
					color={theme.colors.mainText}
				/>
			</View>
		</DrawerContentScrollView>
	);
}
const mapStateToProps = (state: object)=>{
	return state;
}
const mapDispatchToProps = (dispatch: any)=>({
	logout: () => dispatch(asyncLogout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
