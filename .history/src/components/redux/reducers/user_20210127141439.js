import { LOGIN_USER, LOGOUT_USER, UPDATE_USER, UPDATE_CHAT_CONTACTS } from "../types";

const INITIAL_STATE = {
  user: null,
  token: null,
  chatContacts: null,
  unseenMessagesCount: 0,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.user,
        token: action.token,
        chatContacts: action.chatContactsData.chatContacts,
        unseenMessagesCount: action.chatContactsData.unseenMessagesCount,
      };
    case UPDATE_USER:
      return { ...state, user: action.user };
    case UPDATE_CHAT_CONTACTS:
      return {
        ...state,
        chatContacts: action.chatContactsData.chatContacts,
        unseenMessagesCount: action.chatContactsData.unseenMessagesCount,
      };
    case LOGOUT_USER:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
