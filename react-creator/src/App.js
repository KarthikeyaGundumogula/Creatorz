import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default App;
