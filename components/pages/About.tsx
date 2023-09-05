import React, { VFC } from "react";
import { ChakraProvider, Flex, Box, useBreakpointValue, Image } from "@chakra-ui/react";

import { ImgTitle } from "../molecules/ImgTitle ";
import { Content } from "../molecules/Content";
import { TableContent } from "../molecules/TableContents";
import { TextContents } from "../molecules/TextContents";


export const About = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <Box>

       <Box w="full">
       <Image src="/img/icon.png" w={24} h={24} m={4} alt="Main Image" /> 
       {/* <ImgTitle url="/img/photo.png" title="About" /> */}
       </Box>
       
       <Box m="auto" mt={0} w="95%">
       <Content title="Profile" />
       <TableContent />
       <TextContents />
       </Box> 

      </Box>
      </>
    )
  }

  
  return(
    <>
    <ChakraProvider>

    <Flex w="ful" mt={16}>

    {/* <Box w="full">
    <ImgTitle url="/img/photo.png" title="About" />
    </Box> */}
    
    <Box ml={16}>
    <Content title="Profile" />

    <Flex alignItems="center" justifyContent="space-around">
     <Image src="/img/icon.png" w={36} h={36} mr={4} alt="Main Image" /> 
     <TableContent />
    </Flex>

    <TextContents />
    
    </Box>
    
    </Flex>

    </ChakraProvider>
    </>
  )
}
