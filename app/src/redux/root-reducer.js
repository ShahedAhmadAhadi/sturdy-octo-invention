import { combineReducers } from 'redux'
import counterReducer from './counter/couter-reducer'

import userReducer from './user/user-reducer'


export default combineReducers({
    user: userReducer,
    counter: counterReducer
})