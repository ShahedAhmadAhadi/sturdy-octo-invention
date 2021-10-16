import { combineReducers } from 'redux'
import counterReducer from './counter/couter-reducer'
import textReducer from './text/text-reducer'
import funcDropdownReducer from './dropdown/func-dropdown'
import userReducer from './user/user-reducer'


export default combineReducers({
    user: userReducer,
    counter: counterReducer,
    text: textReducer,
    dropdown: funcDropdownReducer
})