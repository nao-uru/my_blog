import React from "react";
import { ChakraProvider, Box, Text, Flex, } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";


export const  ButtonSecond = ( props ) => {


  return (
    <>
    <ChakraProvider>
       <Link href={props.href}  passHref>
         <Box mt={4} borderRadius={8} py={2} w="full" css={sHover} cursor="pointer" 
         _hover={{bg:`${props.color}`, border:`1px solid ${props.color}`}} >
          
         <Text fontWeight="bold" textAlign="center">{props.children}</Text>
         </Box>
       </Link>
    </ChakraProvider>
    </>
  )
}

const sHover = css`
 border: 1px solid #222222;
:hover {
  transition: 0.2s;
  color: #E9EDF0;
}
`
