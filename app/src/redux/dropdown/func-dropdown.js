const INITIAL_STATE = {
    drop: false
}

export const setDropdownToggle = (bool) => ({
    type: 'DROPDOWN',
    paylaod: bool
})

const funcDropdownReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'DROPDOWN':
            return {
                ...state,
                drop: action.paylaod
            }    
        default:
            return state
    }
}

export const dropdownToggle  = (state) => state.dropdown.drop

export default funcDropdownReducer
// export default funcDropdownReducer