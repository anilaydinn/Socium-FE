import { SET_USER } from "./types";
import { getUser } from "../../api";

export const fetchUser = (userId) => async (dispatch) => {
  const user = await getUser(userId);

  dispatch({
    type: SET_USER,
    payload: user,
  });
};
