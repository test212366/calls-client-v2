import {combineReducers} from 'redux'
import { utilsReducer } from './utilsReducer'

export const rootReducers = combineReducers({
	utils: utilsReducer
})
export type RootState = ReturnType<typeof rootReducers>