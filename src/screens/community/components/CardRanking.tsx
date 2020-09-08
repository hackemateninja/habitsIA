import React from "react";
import {Text, View} from "react-native";
import {COLORS, GLOBAL_STYLES} from "../../../constants";

export default ({textColor}:{textColor:String}) => {
	return (
		<View style={{
			width: '100%',
			borderBottomWidth: 0.2,
			borderBottomColor: COLORS.grey,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingBottom: 20
		}}>

			<View style={{
				flexDirection: 'row',
				alignItems: 'center'
			}}>
				<View style={{
					height: 40,
					width: 40,
					backgroundColor: COLORS.hardPrimary,
					borderRadius: 20,
					marginRight: 10
				}}>
				</View>
				<View>
					<Text style={{
						color:textColor,
						...GLOBAL_STYLES.p
					}}>
						Herman Morales
					</Text>
					<Text style={{
						color:COLORS.primary,
						...GLOBAL_STYLES.smallText
					}}>
						1500pts
					</Text>
				</View>
			</View>
			<Text style={{
				color: COLORS.hardPrimary,
				...GLOBAL_STYLES.h2
			}}>
				1
			</Text>

		</View>
	)
}
