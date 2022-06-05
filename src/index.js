import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./helpers/createStore";
import App from "./App";

const store = createStore({
  post: {
    feeds: [],
    userFeeds: [],
  },
  user: {
    friendRequests: [],
    adminUsers: {
      users: [],
      page: {
        number: 0,
      },
    },
  },
});

if (window.location.href.includes("http://localhost:3000")) {
  window.API_BASE_URL = "http://localhost:8080";
} else if (window.location.href.includes("https://socium-fe.herokuapp.com")) {
  window.API_BASE_URL = "https://socium-be.herokuapp.com";
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
