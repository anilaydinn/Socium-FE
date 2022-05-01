import jwtdecode from "jwt-decode";

const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const isLogin = () => {
  let x = getCookie("user-token");
  return x.length > 10;
};

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

const generateBearerToken = () => {
  return "Bearer " + getCookie("user-token");
};

function isAdminUser(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  jsonPayload = JSON.parse(jsonPayload);

  return jsonPayload.userType === "admin";
}

const getUserId = () => {
  const parsedToken = jwtdecode(getCookie("user-token"));
  return parsedToken.iss;
};

export {
  getCookie,
  isLogin,
  setCookie,
  generateBearerToken,
  isAdminUser,
  getUserId,
};
