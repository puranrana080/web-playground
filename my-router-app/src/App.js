import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import SayUser from "./components/SayUser";
import PostPage from "./components/PostPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:userId" element={<SayUser/>} />
      <Route path="/post/:postId" element={<PostPage/>} />
      <Route path="account">
        <Route path="profile" element={<Profile />} />
         <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default App;
