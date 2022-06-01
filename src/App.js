import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import ResetPassword from "./pages/ResetPassword";
import ProfileEdit from "./pages/ProfileEdit";
import OtherProfile from "./pages/OtherProfile";
import FriendRequests from "./pages/FriendRequests";
import ProfileFriends from "./pages/ProfileFriends";
import ChatRoom from "./pages/Chatroom";
import NotFound from "./pages/NotFound";
import { getCookie, isAdminUser, isLogin } from "./helpers/helpers";
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/admin"
            element={
              isLogin() && isAdminUser(getCookie("user-token")) ? (
                <Navigate to={"/admin/dashboard"} />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              isLogin() && isAdminUser(getCookie("user-token")) ? (
                <Dashboard />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/admin/users"
            element={
              isLogin() && isAdminUser(getCookie("user-token")) ? (
                <Users />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userId" element={<OtherProfile />} />
          <Route path="/profile/:userId/messages" element={<ChatRoom />} />
          <Route path="/profile/friend-requests" element={<FriendRequests />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/friends" element={<ProfileFriends />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reset-password/:id" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
