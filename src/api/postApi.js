import axios from "axios";
import { generateBearerToken, getUserId } from "../helpers/helpers";

const createPost = async (post) => {
  const bearerToken = generateBearerToken();
  const response = await axios.post("http://localhost:8080/user/posts", post, {
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
  const bearerToken = generateBearerToken();
  const response = await axios.get(
    `http://localhost:8080/user/posts?userId=${userId}&homepage=true&friendIdList=${friendIds}`,
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
  const bearerToken = generateBearerToken();
  const response = await axios.get(
    `http://localhost:8080/user/posts?userId=${userId}`,
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
  const bearerToken = generateBearerToken();
  const response = await axios.patch(
    `http://localhost:8080/user/posts/${postId}/like`,
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
  const bearerToken = generateBearerToken();
  const response = await axios.post(
    `http://localhost:8080/user/posts/${postId}/comments`,
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

export { createPost, getPosts, getUserPosts, likePost, sendCommentToPost };
