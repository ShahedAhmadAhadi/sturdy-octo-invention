import {createSlice} from '@reduxjs/toolkit'

export const setCounter = (counter) => ({
    type : 'increment',
    payload: counter
})

// const INITIAL_STATE = {
//     counter: 0
// }

// const counterReducer = (state = INITIAL_STATE, action) => {
//     switch (action.payload) {
//         case 'increment':
//             return {...state,
//                 counter: action.payload
//                 }

//         case 'decrement':
//             return {
//                 ...state,
//                 counter: action.payload
//             }    
//         default:
//             return state
//     }
// }

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      increment: state => {
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      }
    }
  })
  
  export const { increment, decrement } = counterSlice.actions

  export const counter  = (state) => state.counter.value
  
  export default counterSlice.reducer

// export default counterReducer