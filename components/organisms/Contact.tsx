import React, { VFC } from "react";
import { ChakraProvider, Flex, Box, useBreakpointValue, Spacer} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

import { ImgTitle } from "../molecules/ImgTitle ";
import { Content } from "../molecules/Content"


export const Contact:VFC<Props> = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <ChakraProvider>
      <Box w="ful">

        <Box w="full">
        <ImgTitle url="/img/Chefchaouen.jpeg" title="Social Media" />
        </Box>

        <Box w="90%" m="auto" mt={16}>
        
        </Box>

        </Box>
      </ChakraProvider>
      </>
    )
  }
  
  
  return(
    <>
    <ChakraProvider>
      
    </ChakraProvider>
    </>
  )
}
