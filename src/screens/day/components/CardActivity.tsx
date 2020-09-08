import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {COLORS, GLOBAL_STYLES,} from "../../../constants";
import {Chip, IconButton} from "../../../components";
import DayStyles from "../styles/DayStyles";
import CardActivityType from "../types/CardActivityType";

export default (props:CardActivityType)=>{
	const {background, colorText, onPress, description, points, completed, isHabit} = props;

	const cardStyle = {
		backgroundColor: background,
		...DayStyles.cardContainer
	}

	const descriptionStyle = {
		color: colorText,
		marginBottom: 5,
		...GLOBAL_STYLES.p
	}

	const indicatorStyle = {
		backgroundColor: completed? COLORS.green:COLORS.grey,
		...DayStyles.completedIndicator
	}

	const ChipComponent = ()=>{
		return(
			<Chip
				color={isHabit ? COLORS.primary : 'transparent'}
				textColor={isHabit ? COLORS.white : 'transparent' }
				title={isHabit ? 'Habito' : ''}
				width={'50%'}
			/>
		)
	}

	return (
		<View style={cardStyle}>
			<ChipComponent/>
			<TouchableOpacity
				onPress={onPress}
				style={GLOBAL_STYLES.rowBetweenCenter}>
				<Text style={DayStyles.cardTopText}>
					HACER ACTIVIDAD
				</Text>
				<IconButton
					iconColor={COLORS.hardPrimary}
					onPress={()=>{}}
					size={GLOBAL_STYLES.iconSize.fontSize -5}
					icon={'ios-arrow-forward'}
				/>
			</TouchableOpacity>
			<Text style={descriptionStyle}>
				{description}
			</Text>
			<View style={DayStyles.completedIndicatorContainer}>
				<View style={indicatorStyle}/>
				<Text style={DayStyles.completeIndicatorText}>
					{completed ? 'COMPLETADA': 'NO REALIZADA'}
				</Text>
			</View>
			<View style={DayStyles.cardPointsContainer}>
				<Text style={DayStyles.cardPoints}>
					{points}
				</Text>
				<Text style={DayStyles.cardPointsIndicator}>
					pts
				</Text>
			</View>

		</View>
	)
}
