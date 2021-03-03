import { LOGIN_USER, LOGOUT_USER } from "../types";
// import api from "../../services/api";

export const loginUser = (user, token) => ({
    type: LOGIN_USER,
    user,
    token,
});


export const logoutUser = () => ({
    type: LOGOUT_USER,
});