

export const setCounter = () => {

}

const INITIAL_STATE = {
    counter: 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        case 'increment':
            return {...state,
                counter: state.counter + 1
                }

        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }    
        default:
            return {state}
    }
}

export default counterReducer