import {GET_TEST} from "../actionTypes";

const initialState = {
	careTest: {
		title: '',
		question: []
	}
}

export default (state = initialState, action:any) => {
	switch (action.type) {
		case GET_TEST:
			return {
				...state,
				careTest: {
					title: action.title,
					question: action.question
				}
			};
		default:
			return state
	}
}
