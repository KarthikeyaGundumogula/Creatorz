import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import NewToken from "./pages/NewToken";
import MarketPlace from "./pages/MarketPlace";
import ContentDisplay from "./pages/ContentDisplay";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/dex" element={<Dex />} />
      <Route path="/new-token" element={<NewToken />} />
      <Route path="/market-place" element={<MarketPlace />} />
      <Route path="/:contentDisplayId" element={<ContentDisplay />}/>
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default App;
