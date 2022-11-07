import React, { Fragment } from 'react'
import {Box,Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <Fragment>
      <Box margin="2px" p="2px">
        <Button colorScheme="gray" p="20px" borderWidth="2px">
          <Link to="/dex">Dex</Link>
        </Button>
        <Button colorScheme="gray" p="20px" borderWidth="2px">
          <Link to="/profile">Profile</Link>
        </Button>
        <Button colorScheme="gray" p="20px" borderWidth="2px">
          <Link to="/about">About</Link>
        </Button>
      </Box>
    </Fragment>
  );
}

export default Home