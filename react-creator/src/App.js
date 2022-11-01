import { Button, Box } from "@chakra-ui/react";
import classes from "./app.module.css";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [items, setItems] = useState({
    name: "Karthikeya",
    year: 102,
  });
  const clickHandler = async () => {
    const response = await fetch(
      "https://demo1-6b4f0-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
    );
    const data = await response.json();
    setItems(data);
    setClicked(!clicked);
  };
  return (
    <ChakraProvider>
      <div className={classes.main}>
        <Button color="blue" bg="black" onClick={clickHandler}>
          click me
        </Button>
        <Box border="2px" bg="black" h="500px">
          {clicked && (
            <Box
              h="100px"
              w="100px"
              bg="white"
              margin="4px"
              p="4px"
              border="4px"
              borderColor="blue"
              alignItems="center"
            >
              {items.name} <br />{items.data}
            </Box>
          )}
        </Box>
      </div>
    </ChakraProvider>
  );
};
export default App;
