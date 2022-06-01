import {
  SET_CHAT_TARGET_USER,
  SET_USER,
  SET_USER_FRIENDS,
  SET_USER_FRIEND_REQUESTS,
  SET_SEARCHED_USERS,
  RESET_SEARCHED_USERS,
  SET_ADMIN_USERS,
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
    case SET_SEARCHED_USERS:
      return {
        ...state,
        searchedUsers: action.payload,
      };
    case RESET_SEARCHED_USERS:
      return {
        ...state,
        searchedUsers: null,
      };
    case SET_ADMIN_USERS:
      return {
        ...state,
        adminUsers: action.payload,
      };
    default:
      return state;
  }
};
