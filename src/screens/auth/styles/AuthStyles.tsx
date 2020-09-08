import React from 'react';
import {PixelRatio, StyleSheet} from "react-native";
import COLORS from "../../../constants/Colors";
import {GLOBAL_STYLES, LAYOUT} from "../../../constants";
import Layout from "../../../constants/Layout";

export default StyleSheet.create({
	bottomAuthScreen: {
		backgroundColor: COLORS.white,
		borderTopLeftRadius: 14,
		borderTopRightRadius: 14,
		height: LAYOUT.window.height * 0.85,
		...GLOBAL_STYLES.screenContainer
	},
	bottomAuthTitleContainer: {
		marginVertical: LAYOUT.window.height * 0.04
	},
	bottomAuthTitle:{
		color: COLORS.black,
		marginBottom:10,
		...GLOBAL_STYLES.h4,
	},
	bottomAuthDescription:{
		color: COLORS.grey,
		...GLOBAL_STYLES.smallText,
	},
	checkBoxContainer:{
		alignItems:'center',
		flexDirection: 'row',
		marginBottom: LAYOUT.window.height * 0.02,
		width: '100%',
	},
	checkBoxStyle:{
		color: COLORS.black,
		...GLOBAL_STYLES.p
	},
	inputContainer:{
		alignItems: 'center',
		flexDirection: 'row',
		height: LAYOUT.window.height * 0.06,
		marginBottom: 10,
		width: '100%',
	},
	inputErrorMessage:{
		color: COLORS.red,
		textAlign: 'right',
		top: -12,
		...GLOBAL_STYLES.superSmallText
	},
	inputValue:{
		color: COLORS.black,
		height: LAYOUT.window.height * 0.05,
		letterSpacing: 2,
		marginTop:10,
		paddingBottom:12,
		paddingHorizontal: 8,
		textDecorationLine: 'none',
		width: '100%',
		...GLOBAL_STYLES.p
	},
	inputIcon:{
		alignItems: 'center',
		justifyContent:'center',
		height: '100%',
		position: 'absolute',
		right:0,
	},
	label:{
		color: COLORS.hardGrey,
		...GLOBAL_STYLES.smallTextBold
	},
	link:{
		color: COLORS.hardGrey,
		...GLOBAL_STYLES.link,
		...GLOBAL_STYLES.smallText,
	},
	linkContainer:{
		width: '60%',
		marginBottom: Layout.window.height * 0.04,
	},
	pickerContainer:{
		backgroundColor: COLORS.light,
		height: LAYOUT.window.height * 0.06,
		width: '100%',
		marginBottom: Layout.window.height * 0.04
	},
	pickerContainerIOS:{
		backgroundColor: COLORS.light,
		overflow: 'hidden',
		height: Layout.window.height * 0.1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: Layout.window.height * 0.04
	},
	pickerIOS: {
		top: PixelRatio.get() < 2.5 ? '-110%' : '-70%',
		height: '100%',
		width: '100%'
	},
	pickerValueIOS:{
		color: COLORS.black,
		...GLOBAL_STYLES.p,
	},
	separator:{
		marginBottom: LAYOUT.window.height * 0.04,
	},
	topAuthScreen: {
		height: LAYOUT.window.height * 0.15,
		justifyContent: 'space-evenly',
		marginBottom: 10,
		marginTop: 5,
		...GLOBAL_STYLES.screenContainer
	},
	welcomeButtonSeparation:{
		marginBottom: '5%'
	},
	welcomeContainer:{
		bottom: '5%',
		position: 'absolute',
		...GLOBAL_STYLES.screenContainer,
	},
	welcomeLogo:{
		height: Layout.window.height*0.1,
		marginBottom: '5%',
		resizeMode: 'contain',
		width: Layout.window.width * 0.15,
	},
	welcomeSubTitle:{
		marginBottom: '10%',
		...GLOBAL_STYLES.p,
	},
	welcomeTitle:{
		marginBottom: '5%',
		...GLOBAL_STYLES.h1,
	}
})
