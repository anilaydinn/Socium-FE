import axios from "axios";
import { generateBearerToken } from "../helpers/helpers";

const createContact = async (name, surname, email, message) => {
  const bearerToken = generateBearerToken();
  const response = await axios.post(
    "http://localhost:8080/api/contacts",
    { name, surname, email, message },
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

export { createContact };
