import { ChakraProvider, Stack, Text} from "@chakra-ui/react";
import React, { VFC } from "react";
import { Title } from "../atoms/Title";


export const AboutContent:VFC = () => {

  return (
    <>
    <ChakraProvider>
     <Stack mt="10">
     <Title>Work</Title>
     <Text mt="8">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aperiam vero atque. Beatae, commodi officia! Porro harum accusantium rem ex sit. Quasi nobis iste est! Accusantium ullam tenetur nulla quibusdam?
     </Text>
     </Stack>
    </ChakraProvider>
    </>
  )
}
