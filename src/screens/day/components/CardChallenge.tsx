import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {COLORS, GLOBAL_STYLES,} from "../../../constants";
import {Chip} from "../../../components";
import DayStyles from "../styles/DayStyles";
import CardChallengesType from "../types/CardChallengesType";

export default (props:CardChallengesType)=>{
	const {background, colorText, title, onPress, description, started, isGrupal, timeToStart} = props;

	const cardStyle = {
		backgroundColor: background,
		...DayStyles.cardContainer
	}

	const titleStyle = {
		color: colorText,
		marginVertical: 10,
		...GLOBAL_STYLES.p
	}
	const descriptionStyle = {
		color: COLORS.grey,
		marginBottom: 8,
		...GLOBAL_STYLES.smallText
	}
	const indicatorStyle = {
		backgroundColor: started? COLORS.green:COLORS.grey,
		...DayStyles.completedIndicator
	}

	const ChipComponent = ()=>{
		return(
			<Chip
				color={isGrupal ? COLORS.yellow : COLORS.greenPastel}
				textColor={COLORS.black}
				title={isGrupal ? 'Reto grupal' : 'Reto individual'}
				width={'60%'}
			/>
		)
	}

	return (
		<TouchableOpacity onPress={onPress} style={cardStyle}>
			<ChipComponent/>
			<Text style={titleStyle}>
				{title}
			</Text>
			<Text style={descriptionStyle}>
				{description}
			</Text>
			<View style={DayStyles.completedIndicatorContainer}>
				<View style={indicatorStyle}/>
				<Text style={DayStyles.completeIndicatorText}>
					{started ? 'EMPEZÓ AHORA': `EMPIEZA EN ${timeToStart}`}
				</Text>
			</View>
		</TouchableOpacity>
	)
}
