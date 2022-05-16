import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
  post: postReducer,
  user: userReducer,
  chat: chatReducer,
});
