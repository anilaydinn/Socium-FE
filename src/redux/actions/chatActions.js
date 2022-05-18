import { SET_CHAT } from "./types";

export const setChat = (chat) => async (dispatch) => {
  dispatch({
    type: SET_CHAT,
    payload: chat,
  });
};
