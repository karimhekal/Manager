import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS,LOGIN_USER_FAIL} from "../actions/types";

const INITIAL_STATE = {
    email: 'karimhekal@gmail.com',
    password: '123456789',
    user: null,
    error: ''
}

export default (state = INITIAL_STATE, action) => {

    console.log(action)
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload,error:'Authentication success'}
        case LOGIN_USER_FAIL:
            return {...state,error:'Authentication failed',password:''}
        default:
            return state
    }
}