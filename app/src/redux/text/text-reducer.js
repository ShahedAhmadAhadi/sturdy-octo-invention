const INITIAL_STATE = {
    value: ''
}

export const setTextState = (type, text) => ({
    type: type,
    payload: text
})

const textReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TEXT':
            return {
                ...state,
                value: state.value + action.payload
            }
        case "NEW_TEXT":
            return {
                ...state,
                value: action.payload
            }
        default:
            return state;
    }
}

export const textstate = (state) => state.text.value;

export default textReducer;