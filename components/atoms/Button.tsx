import React from "react";
import { ChakraProvider, useBreakpointValue, Box, Flex, Text, background, color } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";


export const ButtonPrime = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <ChakraProvider>
       <Link href={props.href}  passHref>
         <a target="_blank">
         <Flex color={props.color} css={sHover} px={4} py={2} mr={4} align="center" cursor="pointer" border={props.border} _hover={{bg:`${props.color}`}}  w="fit-content">
         <Text>{props.children}</Text>
         <Box ml={2}>{props.icon}</Box>
         </Flex>
         </a>
       </Link>
    </ChakraProvider>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      
       <Link href={props.href}  passHref>
         <a target="_blank">
         <Flex color={props.color} css={sHover} px={4} py={2} mr={4} align="center" cursor="pointer" border={props.border} _hover={{bg:`${props.color}`}}  w="fit-content">
         <Text>{props.children}</Text>
         <Box ml={2} >{props.icon}</Box>
         </Flex>
         </a>
       </Link>
       
    </ChakraProvider>
    </>
  )
}

const sHover = css`
:hover {
  transition: 0.5s;
  color: #E8E5DE;
}
`
