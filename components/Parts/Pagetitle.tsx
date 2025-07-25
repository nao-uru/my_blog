import React from "react";
import { ChakraProvider, useBreakpointValue, Flex, Text, Box } from "@chakra-ui/react";

export const Pagetitle = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
    <ChakraProvider>
      <Flex backgroundImage={"/img/Title.png"} py={6} px={40}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      height={{ base: "180px", md: "320px" }}
      width="100vw"
      justify="flex-start"
      position="relative"
      align="flex-end"
      sx={{
        marginLeft: "calc(-50vw + 50%)",
      }}>
      <Box maxW={{base:"96%", md:"1200px"}} w={"full"}>
      <Text fontSize={{base:"24px",md:"40px"}}>
                {props.children}
      </Text>
      </Box>
      </Flex>
    </ChakraProvider>
    </>
  )
}

