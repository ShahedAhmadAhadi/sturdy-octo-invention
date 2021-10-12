import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
import counterReducer from './counter/couter-reducer'
import userReducer from './user/user-reducer'

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store

// const store = configureStore({
//     reducer: {
//         user: userReducer,
//         counter: counterReducer
//     }
// })

// export default store

