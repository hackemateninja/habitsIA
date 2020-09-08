import React from "react";
import moment from "moment";
import StaticStyles from "../styles/StaticStyles";
import {Image, Text, View} from "react-native";
import {GLOBAL_STYLES, LAYOUT} from "../../../constants";

const LOGO = '../../../../assets/icons/logo.png';

export default ({color, children}:{color:string, children:any})=>{

	const titleStyle = {
		color: color,
		marginVertical: 15,
		...GLOBAL_STYLES.h3
	}

	const descriptionStyle = {
		color: color,
		marginTop: LAYOUT.window.height *0.1
	}
	return(
		<View style={StaticStyles.infoContainer}>
			<Image
				style={GLOBAL_STYLES.logo}
				source={require(LOGO)}/>
			<Text
				style={titleStyle}>
				HABITS.AI
			</Text>
			<View>
				{children}
			</View>
			<Text style={descriptionStyle}>
				Habits.ai © {moment().year()} Todos los derechos reservados.
			</Text>
		</View>
	)
}
