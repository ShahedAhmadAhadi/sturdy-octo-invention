const INITIAL_STATE = {
    text: ''
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
                text: action.payload
            }    
        default:
            return state;
    }
}

export const textstate = (state) => state.text.text;

export default textReducer;