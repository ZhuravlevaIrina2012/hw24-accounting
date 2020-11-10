import {ERROR_EDIT, ERROR_LOGIN, ERROR_NEW_PASSWORD, ERROR_REGISTRATION, SUCCESS_ACTION,} from "../actions/userActions";


export const userReducer = (state, action) => {
    switch (action.type){
        case SUCCESS_ACTION:
            return {...state, firstName: action.payload.firstName, lastName: action.payload.lastName};
        case ERROR_REGISTRATION:
        case ERROR_EDIT:
        case ERROR_LOGIN:
        case ERROR_NEW_PASSWORD:
            return {...state, message: action.payload};
        default:
            return state;
    }
}