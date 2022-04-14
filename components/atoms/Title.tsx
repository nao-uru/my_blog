import React, { VFC } from "react";
import { Props } from "framer-motion/types/types";
import { ChakraProvider, Heading } from "@chakra-ui/react";


export const Title:VFC<Props> = ({children}) => {

  return (
    <>
    <ChakraProvider>
    <Heading as="h2" size="lg">{children}</Heading>
    </ChakraProvider>
    </>
  )
}