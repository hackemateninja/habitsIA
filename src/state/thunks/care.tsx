import {HTTP} from "../../hooks";
import AsyncStorage from "@react-native-community/async-storage";
import {ActionCreator} from "redux";
import {
	getTest
} from "../actions/care";

export function asyncGetTest (body: object) {
	return (dispatch: ActionCreator<any>) => {
		HTTP('POST', body, 'getTest')
			.then(e => {
				//console.log(e.test[0].question)
				dispatch(getTest(e.test[0].name, e.test[0].question))
			}).catch(e =>{
				dispatch(getTest(e.toString(), []))
		})
	}
}
