'use client'
import React from "react";
import { ChakraProvider, useBreakpointValue, Box, Flex, Text, } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";


export const ButtonPrime = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
    <ChakraProvider>
      
       <Link href={props.href}  passHref legacyBehavior>
         <a target={props.target}>
         <Flex css={sHover} backgroundColor={props.bgColor} color={props.color} borderRadius='full' px={6} py={3} mr={4} align="center" cursor="pointer" border={props.border}  w="fit-content">
         <Text>{props.children}</Text>
         <Box>{props.icon}</Box>
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
  opacity: 0.7;
}
`
