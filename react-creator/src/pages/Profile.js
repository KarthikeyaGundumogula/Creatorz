import { Fragment } from "react";
import { Text, Center, Box, Button, Image } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const Profile = (props) => {
  return (
    <Fragment margin="20px">
      <Center>
        <Box borderWidth="4px" p="2px" w="480px" margin="5%">
          <Button marginTop="2%" marginLeft="10px">
            <Link to="/home">Home</Link>
          </Button>
          <Button left="265px" borderRadius="12px" marginTop="2%">
            .connect
          </Button>
          <Center>
            <Text fontSize="6xl" borderTop="50px">
              Dan Abramov
            </Text>
          </Center>
          <Center>
            <Image
              borderRadius="full"
              boxSize="150px"
              borderColor="black.100"
              alt="Dan Abramov"
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Center>
          <Center>
            <Text fontSize="1xl">acc adress</Text>
          </Center>
          <Center>
            <Text fontSize="2xl">Acc Balance</Text>
          </Center>
          <Center>
            <Text fontSize="2xl">Ethereum</Text>
          </Center>
          <Center>
            <Text fontSize="2xl">Native TOken</Text>
          </Center>
          <Center>
            <Text fontSize="2xl">Bitcoin</Text>
          </Center>
          <Center>
            <Text fontSize="2xl">Polygon</Text>
          </Center>
          <Center margin="20px">
            <Button>See on polygonScan</Button>
          </Center>
        </Box>
      </Center>
    </Fragment>
  );
};

export default Profile;
