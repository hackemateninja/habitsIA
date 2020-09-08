import React from 'react';
import CheckboxType from '../types/CheckboxType';
import IconButton from "../../../components/IconButton";
import AuthStyles from "../styles/AuthStyles";
import {COLORS} from "../../../constants";
import {
	Text,
	TouchableOpacity
} from 'react-native';


export default ({value, onPress, label}: CheckboxType) => {

	const icon = value ? 'ios-checkbox' : 'ios-square-outline';
	return (
		<TouchableOpacity
			onPress={onPress}
			style={AuthStyles.checkBoxContainer}>
			<IconButton
				icon={icon}
				iconColor={COLORS.black}
				size={22}
			/>
			<Text
				style={AuthStyles.checkBoxStyle}>
				{label}
			</Text>
		</TouchableOpacity>
	)
}
