import React, { VFC } from "react";
import { ChakraProvider, Flex, Box, useBreakpointValue} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

import { ImgTitle } from "../molecules/ImgTitle ";
import { ContactTable } from "../molecules/ContactTable";
import { ContactText } from "../molecules/ContactText";


export const Contact:VFC<Props> = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <Box w="ful">

        <Box w="full">
        <ImgTitle url="/img/Chefchaouen.jpeg" title="Contact" />
        </Box>

        <Box w="90%" m="auto" mt={16}>
        <ContactTable />
        <ContactText />
        <ContactText />
        
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
        <ImgTitle url="/img/Chefchaouen.jpeg" title="Contact" />
        </Box>

        <Box>
        <ContactTable />
        <ContactText />
        <ContactText />
        </Box>

      </Flex>

    </ChakraProvider>
    </>
  )
}
