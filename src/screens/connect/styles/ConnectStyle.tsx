import {StyleSheet} from "react-native";
import {COLORS, GLOBAL_STYLES} from "../../../constants";

export default StyleSheet.create({
	actionStyle:{
		marginTop: 50
	},
	card: {
		borderBottomWidth: 0.2,
		borderColor: COLORS.hardBlue,
		borderTopWidth: 0.2,
		paddingHorizontal:24,
		paddingVertical:14,
		width: '100%',
		...GLOBAL_STYLES.rowStartCenter
	},
	image:{
		width: 100,
		height: 100,
		resizeMode: 'cover',
		marginRight: 24
	},
	statusText: {
		textAlign: 'right',
		...GLOBAL_STYLES.smallText
	}
})
