import {
  SET_CHAT_TARGET_USER,
  SET_USER,
  SET_USER_FRIENDS,
  SET_USER_FRIEND_REQUESTS,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USER_FRIEND_REQUESTS:
      return {
        ...state,
        friendRequests: action.payload,
      };
    case SET_USER_FRIENDS:
      return {
        ...state,
        friends: action.payload,
      };
    case SET_CHAT_TARGET_USER:
      return {
        ...state,
        chatTargetUser: action.payload,
      };
    default:
      return state;
  }
};
