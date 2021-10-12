const INITIAL_STATE = {
    value: ''
}

export const setTextState = text => ({
    type: 'TEXT',
    payload: text
})

const textReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TEXT':
            return {
                ...state,
                value: state.value + action.payload
            }    
        default:
            return state;
    }
}

export const textstate = (state) => state.text.value;

export default textReducer;