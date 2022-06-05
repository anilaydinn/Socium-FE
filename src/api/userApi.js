import axios from "axios";
import { generateBearerToken } from "../helpers/helpers";

const registerUser = async (user) => {
  const apiBaseURL = window.API_BASE_URL;
  const response = await axios.post(
    `${apiBaseURL}/api/register`,
    {
      email: user.email,
      password: user.password,
      name: user.name,
      surname: user.surname,
      birthDate: user.birthDate,
      latitude: user.latitude,
      longitude: user.longitude,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
  );

  return response.status === 201 ? response.data : null;
};

const loginUser = async (email, password) => {
  const apiBaseURL = window.API_BASE_URL;
  const response = await axios.post(
    `${apiBaseURL}/api/login`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
  );
  return response.status === 200 ? response.data : null;
};

const forgotPassword = async (email) => {
  const apiBaseURL = window.API_BASE_URL;
  await axios.post(`${apiBaseURL}/api/forgotPassword`, {
    email: email,
  });
};

const resetPassword = async (id, password) => {
  const apiBaseURL = window.API_BASE_URL;
  await axios.patch(
    `${apiBaseURL}/api/resetPassword/${id}`,
    {
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
  );
};

const getUser = async (userId) => {
  const apiBaseURL = window.API_BASE_URL;
  const response = await axios.get(`${apiBaseURL}/api/users/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });
  return response.status === 200 ? response.data : null;
};

const updateUser = async (userId, description, profileImage) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.patch(
    `${apiBaseURL}/user/users/${userId}`,
    {
      description: description,
      profileImage: profileImage,
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

const sendFriendRequest = async (userId, targetUserId) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  await axios.post(
    `${apiBaseURL}/user/users/${targetUserId}/friendRequests`,
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
};

const getUserFriendRequests = async (userId) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();

  const response = await axios.get(
    `${apiBaseURL}/user/users/${userId}/friendRequests`,
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

const acceptOrDeclineFriendRequest = async (userId, targetUserId, accept) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  await axios.post(
    `${apiBaseURL}/user/users/${userId}/friendRequests/${targetUserId}`,
    {
      accept: accept,
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
};

const getUserFriends = async (userId) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.get(
    `${apiBaseURL}/user/users/${userId}/friends`,
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

const getUsersWithFilter = async (filter) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.get(
    `${apiBaseURL}/user/users?filter=${filter}`,
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

const getAllUsers = async (page, size, filter) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();

  const response = await axios.get(
    `${apiBaseURL}/admin/users?page=${page}&size=${size}&filter=${
      filter ? filter : ""
    }`,
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

const getAdminUser = async (userId) => {
  const apiBaseURL = window.API_BASE_URL;
  const bearerToken = generateBearerToken();
  const response = await axios.get(`${apiBaseURL}/admin/users/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      Authorization: bearerToken,
    },
  });

  return response.status === 200 ? response.data : null;
};

export {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getUser,
  updateUser,
  sendFriendRequest,
  getUserFriendRequests,
  acceptOrDeclineFriendRequest,
  getUserFriends,
  getUsersWithFilter,
  getAllUsers,
  getAdminUser,
};
