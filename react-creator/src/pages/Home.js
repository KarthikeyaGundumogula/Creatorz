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
import Feed from "../components/Feed";

const Home = () => {
  return (
    <Fragment>
      <HStack spacing={2} borderWidth="1px" w="100%" h="4rem" margin={1}>
        <Link to="/dex">
          <Button
            colorScheme="gray"
            p="20px"
            borderWidth="2px"
            marginLeft="5px"
          >
            Dex
          </Button>
        </Link>
        <Heading fontSize={40}>Creatorz</Heading>
        <InputGroup size="md" width="45rem">
          <Input placeholder="Serach here" pr="4.5rem" />
          <InputRightElement width="4.7rem">
            <Button height="1.9rem" size="sm">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        <Link to="/profile">
          <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
            Profile
          </Button>
        </Link>
        <Link to="/market-place">
          <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
            MarketPlace
          </Button>
        </Link>
        <Link to="/profile">
          <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
            Collections
          </Button>
        </Link>
        <Link to="/new-token">
          <Button colorScheme="gray" p="20px" borderWidth="2px" margin="5px">
            New Token
          </Button>
        </Link>
        <Link to="/about">
          <Button colorScheme="gray" p="20px" borderWidth="2px">
            About
          </Button>
        </Link>
      </HStack>
      <Feed />
    </Fragment>
  );
};

export default Home;
