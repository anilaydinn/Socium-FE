import axios from "axios";
import { generateBearerToken, getUserId } from "../helpers/helpers";

const createPost = async (post) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.post(`${apiBaseURL}/user/posts`, post, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      Authorization: bearerToken,
    },
  });

  return response.status === 201 ? response.data : null;
};

const getPosts = async (userId, friendIds) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.get(
    `${apiBaseURL}/user/posts?userId=${userId}&homepage=true&friendIdList=${friendIds}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        Authorization: bearerToken,
      },
    }
  );

  return response.status === 200 ? response.data : null;
};

const getUserPosts = async (userId) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.get(
    `${apiBaseURL}/user/posts?userId=${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        Authorization: bearerToken,
      },
    }
  );

  return response.status === 200 ? response.data : null;
};

const likePost = async (postId, userId) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.patch(
    `${apiBaseURL}/user/posts/${postId}/like`,
    {
      userId: userId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        Authorization: bearerToken,
      },
    }
  );

  return response.status === 200 ? response.data : null;
};

const sendCommentToPost = async (postId, content) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.post(
    `${apiBaseURL}/user/posts/${postId}/comments`,
    {
      userId: getUserId(),
      content: content,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        Authorization: bearerToken,
      },
    }
  );

  return response.status === 201 ? response.data : null;
};

const getAdminUserPosts = async (userId) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.get(
    `${apiBaseURL}/admin/users/${userId}/posts`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Authorization: bearerToken,
      },
    }
  );

  return response.status === 200 ? response.data : null;
};

const deleteAdminUserPost = async (postId, userId) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.delete(
    `${apiBaseURL}/admin/users/${userId}/posts/${postId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Authorization: bearerToken,
      },
    }
  );

  return response.status === 200 ? response.data : null;
};

export {
  createPost,
  getPosts,
  getUserPosts,
  likePost,
  sendCommentToPost,
  getAdminUserPosts,
  deleteAdminUserPost,
};
