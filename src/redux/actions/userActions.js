import {
  SET_USER,
  SET_USER_FRIEND_REQUESTS,
  SET_USER_FRIENDS,
  SET_CHAT_TARGET_USER,
  SET_SEARCHED_USERS,
  RESET_SEARCHED_USERS,
} from "./types";
import {
  getUser,
  getUserFriendRequests,
  getUserFriends,
  getUsersWithFilter,
} from "../../api";

export const fetchUser = (userId) => async (dispatch) => {
  const user = await getUser(userId);

  dispatch({
    type: SET_USER,
    payload: user,
  });
};

export const fetchUserFriendRequests = (userId) => async (dispatch) => {
  const friendRequests = await getUserFriendRequests(userId);

  dispatch({
    type: SET_USER_FRIEND_REQUESTS,
    payload: friendRequests,
  });
};

export const fetchUserFriends = (userId) => async (dispatch) => {
  const friends = await getUserFriends(userId);

  dispatch({
    type: SET_USER_FRIENDS,
    payload: friends,
  });
};

export const fetchChatTargetUser = (userId) => async (dispatch) => {
  const chatTargetUser = await getUser(userId);

  dispatch({
    type: SET_CHAT_TARGET_USER,
    payload: chatTargetUser,
  });
};

export const fetchUserWithFilter = (filter) => async (dispatch) => {
  let users = [];
  if (filter.length > 0) {
    users = await getUsersWithFilter(filter);
  } else {
    dispatch({
      type: RESET_SEARCHED_USERS,
    });
  }

  dispatch({
    type: SET_SEARCHED_USERS,
    payload: users,
  });
};

export const resetSearchedUsers = () => async (dispatch) => {
  dispatch({
    type: RESET_SEARCHED_USERS,
  });
};
