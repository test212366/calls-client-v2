import { utilsActions, UtilsActionsTypes, utilsState } from "../../types/utils"

const initinalState:utilsState = {
	showLogin:false,
	showPassword: false,
	showRegistration: false
}
export const utilsReducer = (state:utilsState = initinalState, action:utilsActions ):utilsState => {
	switch(action.type) {
		case(UtilsActionsTypes.SET_SHOW_LOGIN):
			return {showLogin: !state.showLogin, showPassword: false, showRegistration: false}
		case(UtilsActionsTypes.SET_SHOW_PASSWORD):
			return {showPassword: !state.showPassword, showLogin: false, showRegistration: false}
		case(UtilsActionsTypes.SET_SHOW_REGISTRATION):
			return {showRegistration: !state.showRegistration, showLogin: false, showPassword: false}
		default:
			return state
	}
}