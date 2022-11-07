import React, { Fragment } from "react";
import {
  HStack,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <HStack margin="5px" borderWidth="1px" w="100%" h="4rem">
        <Button colorScheme="gray" p="20px" borderWidth="2px" marginLeft="5px">
          <Link to="/dex">Dex</Link>
        </Button>
        <InputGroup size="md" width="25rem" marginLeft="5rem" h="3rem">
          <Input placeholder="Serach here" pr="4.5rem" />
          <InputRightElement width="4.7rem">
            <Button height="1.9rem" size="sm">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
          <Link to="/profile">Profile</Link>
        </Button>
        <Button colorScheme="gray" p="20px" borderWidth="2px">
          <Link to="/about">About</Link>
        </Button>
      </HStack>
    </Fragment>
  );
};

export default Home;
