import React, { VFC } from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

import { ImgTitle } from "../molecules/ImgTitle ";
import { AboutContent } from "../molecules/AboutContent";
import { AboutTable } from "../molecules/AboutTable";


export const About:VFC<Props> = () => {

  
  return(
    <>
    <ChakraProvider>

        <Flex w="ful">

        <Box w="full">
        <ImgTitle url="/img/Chefchaouen.jpeg" title="About" />
        </Box>

        <Box>
        <AboutTable />
        <AboutContent />
        <AboutContent />
        </Box>

        </Flex>

    </ChakraProvider>
    </>
  )
}
