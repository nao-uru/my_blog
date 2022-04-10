import React, { VFC } from "react";
import { ChakraProvider, Flex, Box} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

import { ImgTitle } from "../molecules/ImgTitle ";
import { ContactTable } from "../molecules/ContactTable";
import { ContactText } from "../molecules/ContactText";


export const Contact:VFC<Props> = () => {
  
  
  return(
    <>
    <ChakraProvider>

        <Flex w="ful">

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
