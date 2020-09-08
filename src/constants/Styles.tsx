/*
* Estilos generales como tamaños de textos, filas, columnas, alineaciones, contenedores
* no colocar estilos específicos solo generales
*
* */
// TODO create new hook responsive
import {
	PixelRatio,
	StyleSheet
} from 'react-native';
import LAYOUT from "./Layout";

// TODO Hook responsive
export default StyleSheet.create({
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	columnBetweenCenter: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	h1:{
		fontFamily: 'roboto',
		fontSize: PixelRatio.get() < 2.5 ? 32 : 36,
	},
	h1Bold:{
		fontFamily: 'roboto-bold',
		fontSize: PixelRatio.get() < 2.5 ? 32 : 36,
	},
	h2:{
		fontFamily: 'roboto-medium',
		fontSize: PixelRatio.get() < 2.5 ? 26 : 30,
	},
	h3:{
		fontFamily: 'roboto',
		fontSize: PixelRatio.get() < 2.5 ? 24 : 28,
	},
	h4:{
		fontFamily: 'roboto',
		fontSize: PixelRatio.get() < 2.5 ? 22 : 26,
		lineHeight: 36
	},
	h5:{
		fontFamily: 'roboto-medium',
		fontSize: PixelRatio.get() < 2.5 ? 18 : 22,
	},
	h6:{
		fontFamily: 'roboto-medium',
		fontSize: PixelRatio.get() < 2.5 ? 14 : 18,
	},
	iconSize: {
		fontSize: PixelRatio.get() < 2.5 ? 22 : 26
	},
	link:{
		textDecorationLine:'underline',
	},
	logo: {
		height: LAYOUT.window.height * 0.1,
		resizeMode:'contain'
	},
	p:{
		fontFamily: 'roboto-medium',
		fontSize: PixelRatio.get() < 2 ? 12 : 16,
	},
	rowAroundCenter: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignSelf: 'center',
	},
	rowBetweenCenter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	rowStartCenter: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'center',
	},
	screen:{
		flex: 1,
		padding:0,
		elevation: 0
	},
	screenContainer:{
		paddingHorizontal: 24,
		width: '100%'
	},
	smallText:{
		fontFamily: 'roboto',
		fontSize: PixelRatio.get() < 2 ? 10 : 14,
	},
	smallTextBold:{
		fontFamily: 'roboto-medium',
		fontSize: PixelRatio.get() < 2 ? 10 : 14,
	},
	superSmallText:{
		fontFamily: 'roboto',
		fontSize: PixelRatio.get() < 2 ? 8 : 10,
	},
	shadow:{
		shadowColor: "#000",
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	}
});
