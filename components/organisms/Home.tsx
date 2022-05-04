import React from "react";
import { ChakraProvider, useBreakpointValue, Text, Box, Image, Container } from "@chakra-ui/react";


export const HomeContents = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
     <>
      <p>mobile page</p>
    </>
    )
  }

  
  return(
    <>
    <ChakraProvider>
      <Container maxW="1200px" p="0" pt="24">
        <Box position="absolute" zIndex={10} top={64} left={20}>
        <Text fontSize="120px" fontWeight="bold">NAO&#39;S</Text>
        <Text fontSize="120px" fontWeight="bold">JOURNAL</Text>
        </Box>
        <Box>
        <Image position="relative" src="/img/spain.jpeg" ml="auto" mt={10} h="500px" w="80%" fit="cover" alt="Main Image"/>
        </Box>
      </Container>
    </ChakraProvider>
    </>
  )
}
