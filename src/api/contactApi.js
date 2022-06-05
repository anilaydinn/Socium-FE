import axios from "axios";
import { generateBearerToken } from "../helpers/helpers";

const createContact = async (name, surname, email, message) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.post(
    `${apiBaseURL}/api/contacts`,
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
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.get(`${apiBaseURL}/admin/contacts`, {
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
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.delete(
    `${apiBaseURL}/admin/contacts/${contactId}`,
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
