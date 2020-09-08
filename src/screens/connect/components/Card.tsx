import React from "react";
import ConnectStyle from "../styles/ConnectStyle";
import CardType from "../types/CardType";
import {Image, Text, View} from "react-native";
import {COLORS, GLOBAL_STYLES} from "../../../constants";
import {TouchableOpacity} from "react-native-gesture-handler";

export default ({name, status, action, image, theme}:CardType)=>{
// TODO refactor esta vista
	const cardStyle = {
		backgroundColor: theme.cardBackground,
		...ConnectStyle.card,
	}
	const nameStyle = {
		color: theme.mainText,
		...GLOBAL_STYLES.p
	}
	const statusTest = {
		color: status?COLORS.primary:COLORS.grey,
		...ConnectStyle.statusText
	}

	return(
		<View style={cardStyle}>
			<Image
				style={ConnectStyle.image}
				source={{uri: image}}
			/>
			<View style={{width: '65%'}}>
				<Text style={nameStyle}>
					{name}
				</Text>
				<TouchableOpacity
					style={ConnectStyle.actionStyle}
					onPress={action}>
					<Text style={statusTest}>
						{status?"Desconectar":"Conectar"}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
