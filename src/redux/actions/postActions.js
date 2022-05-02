import { getPosts, getUserPosts } from "../../api";
import { SET_HOMEPAGE_FEEDS, SET_USER_FEEDS } from "./types";

export const fetchPosts = () => async (dispatch) => {
  const posts = await getPosts();

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
