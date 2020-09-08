import React from 'react';
import PickerType from '../types/PickerType';
import AuthStyles from '../styles/AuthStyles';
import Layout from '../../../constants/Layout';
import {COLORS} from '../../../constants';
import {Picker} from '@react-native-community/picker';
import {
	View,
	Text,
	PixelRatio,
} from 'react-native';
import {CheckAndroid} from "../../../hooks";

export default ({label, value, items, onValueChange}: PickerType)=>{

	const IOS = !CheckAndroid()

	if (IOS){
		return (
			<>
				<Text style={AuthStyles.label}>{label}</Text>
				<View
					style={AuthStyles.pickerContainerIOS}>
					<Picker
						mode='dropdown'
						selectedValue={value}
						style={AuthStyles.pickerIOS}
						itemStyle={AuthStyles.pickerValueIOS}
						onValueChange={onValueChange}>
						{
							items.map((item: string)=> (
								<Picker.Item key={item} label={item} value={item} />
							))
						}
					</Picker>
				</View>
			</>
		)
	}
	return(
		<>
			<Text style={AuthStyles.label}>{label}</Text>
			<View style={AuthStyles.pickerContainer}>
				<Picker
					mode='dropdown'
					selectedValue={value}
					itemStyle={{fontSize: 8}}
					style={{marginTop: -2,}}
					onValueChange={onValueChange}>
					{
						items.map((item: string)=> (
							<Picker.Item key={item} label={item} value={item} />
						))
					}
				</Picker>
			</View>
		</>
	)

}
