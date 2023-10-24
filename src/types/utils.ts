export interface utilsState {
	showRegistration: boolean
	showLogin: boolean
	showPassword: boolean
}
export enum UtilsActionsTypes {
	SET_SHOW_REGISTRATION = 'SET_SHOW_REGISTRATION',
	SET_SHOW_LOGIN = 'SET_SHOW_LOGIN',
	SET_SHOW_PASSWORD = 'SET_SHOW_PASSWORD'
}
interface setShowRegistration {
	type: UtilsActionsTypes.SET_SHOW_REGISTRATION
 
}
interface setShowLogin {
	type: UtilsActionsTypes.SET_SHOW_LOGIN
 
}
interface setShowPassword {
	type: UtilsActionsTypes.SET_SHOW_PASSWORD
 
}
export type utilsActions = setShowRegistration | setShowLogin | setShowPassword 