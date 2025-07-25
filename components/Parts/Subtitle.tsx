import React from "react";
import { ChakraProvider, useBreakpointValue, Box, Flex, Text } from "@chakra-ui/react";


export const Subtitle = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
    <ChakraProvider>
        <Flex flexDir={"row"} align={"center"} gap={1}>
            <Box backgroundColor={"#23BA78"} w={1.5} h={1.5} rounded={"50%"} />
            <Text fontSize={props.size}>
                {props.children}
            </Text>
        </Flex>
    </ChakraProvider>
    </>
  )
}
