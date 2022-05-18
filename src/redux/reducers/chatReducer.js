import { SET_CHAT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CHAT:
      return { ...state, chat: action.payload };
    default:
      return state;
  }
};
