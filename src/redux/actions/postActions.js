import axios from "axios";
import { generateBearerToken } from "../../helpers/helpers";
import { getPosts, getUserPosts } from "../../api";
import {
  REMOVE_ADMIN_USER_FEED,
  SET_HOMEPAGE_FEEDS,
  SET_USER_FEEDS,
} from "./types";

export const fetchPosts = (userId, friendIds) => async (dispatch) => {
  let friendIdList = "";
  if (friendIds == null || friendIds == undefined) {
    friendIds = [];
  }
  for (let i = 0; i < friendIds.length; i++) {
    friendIdList += friendIds[i] + ",";
  }
  const posts = await getPosts(userId, friendIdList);

  dispatch({
    type: SET_HOMEPAGE_FEEDS,
    payload: posts,
  });
};

export const fetchUserPosts = (userId) => async (dispatch) => {
  const posts = await getUserPosts(userId);

  dispatch({
    type: SET_USER_FEEDS,
    payload: posts,
  });
};

export const removeAdminUserPost = (postId, userId) => async (dispatch) => {
  const bearerToken = generateBearerToken();
  await axios.delete(`http://localhost:8080/users/${userId}/posts/${postId}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      Authorization: bearerToken,
    },
  });

  dispatch({
    type: REMOVE_ADMIN_USER_FEED,
  });
};
