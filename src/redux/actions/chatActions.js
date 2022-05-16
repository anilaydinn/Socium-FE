import { SET_CHAT_MESSAGES } from "./types";

export const setChatMessages = (messages) => async (dispatch) => {
  dispatch({
    type: SET_CHAT_MESSAGES,
    payload: messages,
  });
};
