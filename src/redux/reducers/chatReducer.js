import { SET_CHAT_MESSAGES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CHAT_MESSAGES:
      return { ...state, chatMessages: action.payload };
    default:
      return state;
  }
};
