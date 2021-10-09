

export const setCounter = (counter) => ({
    type : 'increment',
    payload: counter
})

const INITIAL_STATE = {
    counter: 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        case 'increment':
            return {...state,
                counter: action.payload
                }

        case 'decrement':
            return {
                ...state,
                counter: action.payload
            }    
        default:
            return state
    }
}

export default counterReducer