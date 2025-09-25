import React from "react";
import { ChakraProvider, useBreakpointValue, Box, Flex, Text } from "@chakra-ui/react";


export const Subtitle = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
    <ChakraProvider>
        <Flex flexDir={"row"} align={"center"} gap={1}>
            <Box background={"linear-gradient(87.37deg, #2b5b56, #1b756c 40.87%, #00a291)"} w={1.5} h={1.5} rounded={"50%"} />
            <Text fontSize={props.size}>
                {props.children}
            </Text>
        </Flex>
    </ChakraProvider>
    </>
  )
}
