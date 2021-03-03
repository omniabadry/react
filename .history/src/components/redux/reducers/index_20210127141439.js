import { combineReducers } from "redux";
import langState from "./lang";
import userState from "./user";
import searchTermState from "./searchTerm";
import uploadProgressState from "./uploadProgress";
import modalDataState from "./modalData";
import presentUsersState from "./presentUsers";
import generalState from "./general";

export default combineReducers({
  langState,
  userState,
  searchTermState,
  uploadProgressState,
  modalDataState,
  presentUsersState,
  generalState,
});
