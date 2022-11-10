import React, { Fragment } from "react";
import {
  HStack,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Feed from "../components/Feed"

const Home = () => {
  return (
    <Fragment margin={2}>
      <HStack spacing={21} borderWidth="1px" w="100%" h="4rem">
        <Button colorScheme="gray" p="20px" borderWidth="2px" marginLeft="5px">
          <Link to="/dex">Dex</Link>
        </Button>
        <Heading fontSize={40}>Creatorz</Heading>
        <InputGroup size="md" width="45rem">
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
        <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
          <Link to="/profile">Collections</Link>
        </Button>
        <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
          <Link to="/profile">MarketPlace</Link>
        </Button>
        <Button colorScheme="gray" p="20px" borderWidth="2px">
          <Link to="/about">About</Link>
        </Button>
      </HStack>
      <Feed />
    </Fragment>
  );
};

export default Home;
