import {
  SET_USER,
  SET_USER_FRIEND_REQUESTS,
  SET_USER_FRIENDS,
  SET_CHAT_TARGET_USER,
  SET_SEARCHED_USERS,
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
  const users = await getUsersWithFilter(filter);

  dispatch({
    type: SET_SEARCHED_USERS,
    payload: users,
  });
};
