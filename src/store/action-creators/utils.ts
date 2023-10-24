import { Dispatch } from "react";
import { utilsActions, UtilsActionsTypes } from "../../types/utils";

export const setShowLogin = () => (dispatch: Dispatch<utilsActions>) =>	dispatch({type: UtilsActionsTypes.SET_SHOW_LOGIN}),
	setShowRegistration = () => (dispatch: Dispatch<utilsActions>) => dispatch({type: UtilsActionsTypes.SET_SHOW_REGISTRATION})
