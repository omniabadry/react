import { LOGIN_USER, LOGOUT_USER } from "../types";
// import api from "../../services/api";

export const loginUser = (user, token, chatContactsData) => ({
    type: LOGIN_USER,
    user,
    token,
    chatContactsData,
});


export const logoutUser = () => ({
    type: LOGOUT_USER,
});