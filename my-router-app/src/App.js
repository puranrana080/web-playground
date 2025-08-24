import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Setting from "./components/Setting";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="account">
        <Route path="profile" element={<Profile />} />
         <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default App;
