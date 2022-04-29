import { SET_SOMETHING } from "./types";

export const fetchUser = () => async (dispatch) => {
  const user = await getUser();

  dispatch({
    type: SET_SOMETHING,
    payload: user,
  });
};
