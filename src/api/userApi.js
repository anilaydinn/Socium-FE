import axios from "axios";

const registerUser = async (user) => {
  console.log(user.birthDate);
  const response = await axios.post(
    "http://localhost:8080/api/register",
    {
      email: user.email,
      password: user.password,
      name: user.name,
      surname: user.surname,
      birthDate: user.birthDate,
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
  const response = await axios.post(
    "http://localhost:8080/api/login",
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
  await axios.post("http://localhost:8080/api/forgotPassword", {
    email: email,
  });
};

const resetPassword = async (id, password) => {
  await axios.patch(
    `http://localhost:8080/api/resetPassword/${id}`,
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
  const response = await axios.get(
    `http://localhost:8080/api/users/${userId}`,
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

export { registerUser, loginUser, forgotPassword, resetPassword, getUser };
