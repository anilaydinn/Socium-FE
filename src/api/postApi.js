import axios from "axios";
import { generateBearerToken } from "../helpers/helpers";

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

const getPosts = async () => {
  const bearerToken = generateBearerToken();
  const response = await axios.get("http://localhost:8080/user/posts", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      Authorization: bearerToken,
    },
  });

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

export { createPost, getPosts, getUserPosts };
