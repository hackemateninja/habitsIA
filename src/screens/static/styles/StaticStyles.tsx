import {StyleSheet} from "react-native";
import {COLORS, GLOBAL_STYLES, LAYOUT} from "../../../constants";

export default StyleSheet.create({
	infoStyle:{
		color: COLORS.primary,
		...GLOBAL_STYLES.h5
	},
	infoContainer: {
		height: '80%',
		...GLOBAL_STYLES.columnBetweenCenter
	},
	itemContainer:{
		borderBottomWidth: 0.2,
		height: 50,
		paddingHorizontal: 24,
		width: LAYOUT.window.width,
		...GLOBAL_STYLES.rowBetweenCenter
	}
})
