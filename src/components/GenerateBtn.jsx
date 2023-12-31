import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

const GenerateBtn = (props) => {
  const [palletes, setPalletes] = useState([]);

  function createNewColorset() {
    const val = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    let newPalletes = [];

    for (let i = 0; i < 5; i++) {
      let hexCode = "";
      //for to loop 6 times to get 6vals of hex
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * val.length);
        hexCode += val[index];
      }
      newPalletes.push("#" + hexCode);
    }
    setPalletes(newPalletes);
  }

  //Sending generated color val array to App.jsx
  useEffect(() => {
    props.toggleColor(palletes);
  }, [palletes]);

  //Generate on spacebar
  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.code === "Space") {
        createNewColorset();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <Button
      bgColor="green.400"
      _hover={{
        bgColor: "green.300",
        transform: "scale(1.1)",
      }}
      onClick={createNewColorset}
      size={["md", "lg"]}
    >
      Generate
    </Button>
  );
};

export default GenerateBtn;
