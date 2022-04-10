import React, { VFC } from "react";
import { Props } from "framer-motion/types/types";
import { ChakraProvider, Heading } from "@chakra-ui/react";


export const SubTitle:VFC<Props> = ({children}) => {

  return (
    <>
    <ChakraProvider>
    <Heading as="h2" size="md">{children}</Heading>
    </ChakraProvider>
    </>
  )
}
