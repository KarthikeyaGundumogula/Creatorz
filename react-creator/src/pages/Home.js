import React, { Fragment } from 'react'
import {Box,Button,Center} from "@chakra-ui/react"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <Fragment>
      <Box margin="7px" p="2px" borderWidth="1px" w="100%">
        <Center>
          <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
            <Link to="/dex">Dex</Link>
          </Button>
          <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
            <Link to="/profile">Profile</Link>
          </Button>
          <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
            <Link to="/about">About</Link>
          </Button>
        </Center>
      </Box>
    </Fragment>
  );
}

export default Home