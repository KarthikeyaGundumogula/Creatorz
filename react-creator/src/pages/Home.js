import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <React.Fragment>
      <Link to="/about">about</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/home">Home</Link>
    </React.Fragment>
  );
}

export default Home