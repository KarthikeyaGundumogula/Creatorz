import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  return (
    <React.Fragment>
      <div >
        Nothing here
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;
