import { LOGIN_USER, LOGOUT_USER } from "../types";

const INITIAL_STATE = {
    user: null,
    token: null,
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.user,
                token: action.token,
            };


        case LOGOUT_USER:
            return {...INITIAL_STATE };
        default:
            return state;
    }
};