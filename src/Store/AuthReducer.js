import { LOG_IN, LOG_OUT }  from '../Actions/Types'

const defaultState = {
    userName: '',
    isAuth: false
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {...state, ...action.payload}
        case LOG_OUT:
            return {...defaultState}
            default:
            return state;
    }
}