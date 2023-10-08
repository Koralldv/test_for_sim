import { ADD_USER }  from '../Actions/Types'
import users from '../assets/users.json'

const defaultState = {
    usersList: users
}

export const usersListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, usersList: [...state.usersList, {...action.payload}]} 
            default:
            return state;
    }
}