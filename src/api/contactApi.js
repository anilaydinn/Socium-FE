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

const getContacts = async () => {
  const bearerToken = generateBearerToken();
  const response = await axios.get("http://localhost:8080/admin/contacts", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      Authorization: bearerToken,
    },
  });

  return response.status === 200 ? response.data : null;
};

const deleteContact = async (contactId) => {
  const bearerToken = generateBearerToken();
  const response = await axios.delete(
    `http://localhost:8080/admin/contacts/${contactId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Authorization: bearerToken,
      },
    }
  );

  return response.status === 204 ? true : false;
};

export { createContact, getContacts, deleteContact };
