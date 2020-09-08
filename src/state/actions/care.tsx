import {GET_TEST} from "../actionTypes";

export const getTest = (title: string, question: []) =>{
	return {
		type: GET_TEST,
		title,
		question,
	}
}
