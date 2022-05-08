import { ChakraProvider, Heading, Stack, Text} from "@chakra-ui/react";
import React from "react";


export const Content = (props,{children}) => {

  return (
    <>
    <ChakraProvider>
     <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}>
     <Heading as="h3" size="md" mt={4}>{props.title}</Heading>
     <Text mt={0} w={{base:"100%",md:"80%"}}>
       {props.children}
     </Text>
     </Stack>
    </ChakraProvider>
    </>
  )
}
