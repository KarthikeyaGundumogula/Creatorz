import { Fragment } from "react";
import { Text, Center, Box, Button, Image } from "@chakra-ui/react";

const Profile = (props) => {
  return (
    <Fragment>
      <Button left="90%" borderRight="50px" borderRadius="12px" margin="2px">
        .connect
      </Button>
      <Center>
        <Box margin="20px" borderWidth="2px" w="480px">
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
            <Text fontSize="2xl">Acc Balance</Text>
          </Center>
          <Center>
            <Text fontSize="2xl">Ethereum</Text>
          </Center>
          <Center>
            <Text fontSize="2xl">Native TOken</Text>
          </Center>
        </Box>
      </Center>
    </Fragment>
  );
};

export default Profile;
