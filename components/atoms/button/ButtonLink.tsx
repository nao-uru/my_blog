import React from "react";
import { ChakraProvider, useBreakpointValue, Box, Flex, Text, } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";


export const ButtonLink = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

//   if(isMobile) {
//     return(
//       <>
//       <ChakraProvider>
//        <Link href={props.href}  passHref legacyBehavior>
//          <a target="_blank">
//          <Flex color={props.color} css={sHover} px={4} py={2} mr={4} align="center" cursor="pointer" border={props.border} _hover={{bg:`${props.color}`}}  w="fit-content">
//          <Text>{props.children}</Text>
//          <Box ml={2}>{props.icon}</Box>
//          </Flex>
//          </a>
//        </Link>
//     </ChakraProvider>
//       </>
//     )
//   }

  return (
    <>
    <ChakraProvider>
      
       <Link href={props.href} passHref legacyBehavior>
         <a target={props.target}>
         <Flex mt={2} color="#0da970" css={sHover} cursor="pointer">
         <Text fontWeight="bold" >{props.children}</Text>
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
  opacity: 60%;
}
`