import React from "react";
import AvatarContainerType from "../types/AvatarContainerType";
import DrawerStyles from "../styles/DrawerStyle";
import {Image, Text, View} from "react-native";
import {COLORS, GLOBAL_STYLES} from "../../../constants";

export default ({logo, avatar, company, name, theme}:AvatarContainerType)=>{

	const nameStyle = {
		color: theme.mainText,
		...GLOBAL_STYLES.h4
	}
	const companyNameStyle = {
		color: COLORS.grey,
		...GLOBAL_STYLES.p
	}

	return(
		<>
			<View style={DrawerStyles.avatarContainer}>
				<View style={DrawerStyles.avatar}>
					<Image
						source={{uri: avatar}}
						style={DrawerStyles.image}
					/>
				</View>
				<View style={DrawerStyles.companyLogo}>
					<Image
						source={{uri: logo}}
						style={DrawerStyles.image}
					/>
				</View>
			</View>
			<View style={DrawerStyles.nameContainer}>
				<Text style={nameStyle}>
					{name}
				</Text>
				<Text style={companyNameStyle}>
					{company}
				</Text>
			</View>
		</>
	)
}
