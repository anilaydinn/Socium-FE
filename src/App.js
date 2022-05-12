import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userId" element={<OtherProfile />} />
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
