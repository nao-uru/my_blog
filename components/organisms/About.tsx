import React, { VFC } from "react";
import { ChakraProvider, Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

import { ImgTitle } from "../molecules/ImgTitle ";
import { AboutContent } from "../molecules/AboutContent";
import { AboutTable } from "../molecules/AboutTable";


export const About:VFC<Props> = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <Box>

       <Box w="full">
       <ImgTitle url="/img/Chefchaouen.jpeg" title="About" />
       </Box>
       
       <Box  w="100%" m="auto">
       <AboutTable />
       <AboutContent />
       </Box>
       
      </Box>
      </>
    )
  }

  
  return(
    <>
    <ChakraProvider>

        <Flex w="ful" mt={16}>

        <Box w="full">
        <ImgTitle url="/img/Chefchaouen.jpeg" title="About" />
        </Box>

        <Box>
        <AboutTable />
        <AboutContent />
        </Box>

        </Flex>

    </ChakraProvider>
    </>
  )
}
