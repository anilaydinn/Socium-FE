import axios from "axios";

const registerUser = async (user) => {
  const response = await axios.post(
    "http://localhost:8080/register",
    {
      email: user.email,
      password: user.password,
      name: user.name,
      surname: user.surname,
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
    "http://localhost:8080/login",
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
  await axios.post("http://localhost:8080/forgotPassword", {
    email: email,
  });
};

export { registerUser, loginUser, forgotPassword };
