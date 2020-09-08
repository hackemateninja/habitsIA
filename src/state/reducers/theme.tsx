import {DARK, LIGHT} from "../actionTypes";
import {DARK_THEME, LIGHT_THEME } from "../../constants";

const initialState = {
	colors: LIGHT_THEME
}

export default (state = initialState, action: any) => {
	switch (action.type){
		case DARK:
			return {
				colors: DARK_THEME
			}
		case LIGHT:
			return {
				colors: LIGHT_THEME
			}
		default: {
			return state
		}
	}
}
