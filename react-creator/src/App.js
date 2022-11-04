import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"

const App = () => {
  return (
    <React.Fragment>
      Nothing here
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
