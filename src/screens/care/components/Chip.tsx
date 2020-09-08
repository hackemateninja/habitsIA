import React from "react";
import CareStyles from "../styles/CareStyles";
import ChipType from "../types/ChipType";
import {
	Text,
	TouchableOpacity,
} from "react-native";

export default ({title, colorText, color, onPress, isLarge}: ChipType) => {

	const chipStyle ={
		backgroundColor: color,
		paddingVertical: 8,
		paddingHorizontal: isLarge ? '40%': 8,
		...CareStyles.chip
	}

	const chipTextStyle = {
		color: colorText,
		...CareStyles.chipText
	}
	return(
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.1}
			style={chipStyle}>
			<Text style={chipTextStyle}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}
