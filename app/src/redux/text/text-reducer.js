const INITIAL_STATE = {
    text: ''
}

// export const setCurrentUser = user => ({
//     type: userActionTypes.SET_CURRENT_USER,
//     payload: user
// })

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

export default textReducer;