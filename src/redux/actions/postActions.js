import { getPosts } from "../../api";
import { SET_HOMEPAGE_FEEDS } from "./types";

export const fetchPosts = () => async (dispatch) => {
  const posts = await getPosts();

  dispatch({
    type: SET_HOMEPAGE_FEEDS,
    payload: posts,
  });
};
