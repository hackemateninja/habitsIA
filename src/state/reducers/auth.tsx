import {
	FORGOT,
	GET_COMPANY,
	LOGIN,
	REGISTER,
	REGISTER_PERSONAL,
	RESET
} from "../actionTypes";

const initialState = {
	forgot:{
		message: '',
		status: 0,
		success: false,
		data: '',
		mail: ''
	},
	company:{
		id: '',
		name: '',
		deps: []
	},
	login: {
		isLogged: false,
		user: '',
		token: '',
		message: ''
	},
	register: {
		companyId: '',
		dep: ''
	},
	registerPersonal: {
		message: '',
		user: '',
		from: '',
		to: ''
	},
	reset: {
		message: '',
		status: false
	}
}

export default (state = initialState, action:any) => {
	switch (action.type){
		case FORGOT:
			return {
				...state,
				forgot: {
					message: action.message,
					status: action.status,
					success: action.success,
					data: action.data,
					mail: action.mail
				}
			}
		case GET_COMPANY:
			return {
				...state,
				company:{
					id: action.id,
					name: action.name,
					deps: action.deps
				}
			}
		case LOGIN:
			return {
				...state,
				login: {
					isLogged: action.isLogged,
					user: action.user,
					token: action.token,
					message: action.message
				}
			};
		case REGISTER:
			return {
				...state,
				register: {
					companyId: action.companyId,
					dep: action.dep
				}
			};
		case REGISTER_PERSONAL:
			return {
				...state,
				registerPersonal: {
					message: action.message,
					user: action.user,
					from: action.from,
					to: action.to
				}
			}
		case RESET:
			return {
				...state,
				reset: {
					message: action.message,
					status: action.status
				}
			}
		default:
			return state
	}
}
