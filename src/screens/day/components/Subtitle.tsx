import React from "react";
import {Text} from "react-native";
import {COLORS, GLOBAL_STYLES} from "../../../constants";
import moment from "moment";

export default ({date, dayName, month, day}:{date:number, dayName:string, month:string, day:string})=> {

	return(
		<>
			<Text style={{
				marginTop: 24,
				color: COLORS.primary,
				...GLOBAL_STYLES.p
			}}>
				{day}
			</Text>
			<Text style={{
				marginTop: 8,
				color: COLORS.grey,
				...GLOBAL_STYLES.p
			}}>
				{dayName} {date} {month}
			</Text>
		</>
	)
}
