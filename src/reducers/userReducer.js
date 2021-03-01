import { ADD_USER, FETCH_USER, UPDATE_USER, DELETE_USER_ } from '../actions/actionTypes'

const initialstate = {
    users: {},
    emp: {}
}

export default function (state = initialstate, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: action.data
            }
        case FETCH_USER:
            return {
                ...state,
                emp: action.data
            }
        default:
            return state
    }
}

