import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import dashboardReducer from "./dashboardReducer";
import contactReducer from "./contactReducer";

export default combineReducers({
  post: postReducer,
  user: userReducer,
  chat: chatReducer,
  dashboard: dashboardReducer,
  contact: contactReducer,
});
