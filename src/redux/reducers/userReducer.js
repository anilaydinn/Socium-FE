import { SET_USER, SET_USER_FRIEND_REQUESTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USER_FRIEND_REQUESTS:
      return {
        ...state,
        friendRequests: action.payload,
      };
    default:
      return state;
  }
};
