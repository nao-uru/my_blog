import React from "react";
import { ChakraProvider, useBreakpointValue, Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";


export const LinkButton = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
    <ChakraProvider>
      
       <Link href={props.href}  passHref legacyBehavior>
         <a target={props.target}>
         <Flex css={sHover} alignItems="center" justifyContent="center" cursor="pointer" w={"fit-content"}
         color={props.color}
         borderBottom={`1px solid ${props.border}`}
         >
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
  opacity: 0.6;
}
`
