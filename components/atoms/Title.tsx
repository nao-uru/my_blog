import React, { VFC } from "react";
import { Props } from "framer-motion/types/types";
import { ChakraProvider, Heading, useBreakpointValue } from "@chakra-ui/react";


export const Title:VFC<Props> = ({children}) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <Heading as="h4" size="md" mb={4} mt={4}>{children}</Heading>
      </>
    )
  }


  return (
    <>
    <ChakraProvider>
    <Heading as="h2" size="lg" mt={8} mb={4}>{children}</Heading>
    </ChakraProvider>
    </>
  )
}
