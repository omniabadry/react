// /* eslint-disable import/no-cycle */
// import {
//   LOGIN_USER,
//   LOGOUT_USER,
//   UPDATE_USER,
//   UPDATE_FREELANCER,
//   UPDATE_CHAT_CONTACTS,
// } from "../types";
// import api from "../../services/api";

// export const loginUser = (data) => ({
//   type: LOGIN_USER,
//   data,
// });

// export const updateUser = (user) => ({
//   type: UPDATE_USER,
//   user,
// });

// export const updateFreelancer = (freelancer) => ({
//   type: UPDATE_FREELANCER,
//   freelancer,
// });

// export const updateChatContacts = (receiverId = "") => (dispatch) =>
//   api
//     .axios({
//       params: { user_id: receiverId },
//       url: "/user-chat-contacts",
//     })
//     .then(({ data: chatContactsData }) => {
//       return dispatch({
//         type: UPDATE_CHAT_CONTACTS,
//         chatContactsData,
//       });
//     });

// export const logoutUser = () => ({
//   type: LOGOUT_USER,
// });