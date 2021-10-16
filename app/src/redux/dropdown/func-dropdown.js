const INITIAL_STATE = {
    drop: false
}

export const setDropdownToggle = (type, payload) => ({
    type: 'DROPDOWN',
    payload: bool
})

const funcDropdownReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'DROPDOWN':
            return {
                ...state,
                drop: action.payload
            }
        case "DROPDOWN-FALSE":
            return {
                ...state,
                drop: action.payload
            }
    
        default:
            return {
                state
            }
    }
}

export default funcDropdownReducer