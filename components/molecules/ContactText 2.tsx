import { ChakraProvider, Stack, Text, Flex} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React, { VFC } from "react";
import { SubTitle } from "../atoms/SubTitle";


export const ContactText:VFC = () => {

  return (
    <>
    <ChakraProvider>
     <Stack mr="10" mt="10">
       <Flex>
        <StarIcon w={6} h={6} mr={2} />
        <SubTitle>Instagram</SubTitle>
       </Flex>

        <Text mt="8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aperiam vero atque. Beatae, commodi officia! Porro harum accusantium rem ex sit. Quasi nobis iste est! Accusantium ullam tenetur nulla quibusdam?
        </Text>

     </Stack>
    </ChakraProvider>

    </>
  )
}
