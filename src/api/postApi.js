import axios from "axios";
import { generateBearerToken } from "../helpers/helpers";

const createPost = async (post) => {
  const bearerToken = generateBearerToken();
  console.log(bearerToken);
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

export { createPost };
