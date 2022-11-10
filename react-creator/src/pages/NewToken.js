import React from "react";
import { Box,Heading, Input,Text, HStack,Button } from "@chakra-ui/react";

const NewToken = () => {
  return (
    <Box margin="17%" borderWidth={1} p={1}>
      <Heading>Get New Token</Heading>
      <Box margin={8}>
        <HStack margin={1}>
          <Text fontSize={24}>Name:</Text>
          <Input />
        </HStack>
        <HStack margin={1}>
          <Text fontSize={24}>Amount:</Text>
          <Input />
        </HStack>
        <HStack margin={1}>
          <Text fontSize={24}></Text>
          <Input type='number'/>
        </HStack>
      </Box>
    </Box>
  );
};

export default NewToken;
