import { LOGIN_USER, LOGOUT_USER, UPDATE_USER, UPDATE_CHAT_CONTACTS } from "../types";
import api from "../../services/api";

export const loginUser = (user, token, chatContactsData) => ({
  type: LOGIN_USER,
  user,
  token,
  chatContactsData,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

export const updateChatContacts = (receiverId = "") => (dispatch) =>
  api
    .axios({
      params: { user_id: receiverId },
      url: "/userChatContacts",
    })
    .then(({ data: chatContactsData }) =>
      dispatch({
        type: UPDATE_CHAT_CONTACTS,
        chatContactsData,
      }),
    );

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
