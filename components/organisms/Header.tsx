import React, { VFC } from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { Box, ChakraProvider,  Flex, useBreakpointValue, Heading, Link} from "@chakra-ui/react";


import { Menu } from "../molecules/Menu";

const Icon = require('../../public/img/icon.png')


export const Header:VFC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile){
    return(
      <>
      <Flex w="100%" justify="space-between" alignItems="center" py={2} px={4} zIndex={60} position="fixed" css={sBack} >
      <Link href="/">
      <Heading css={sMainTitle} size="sm">NAO&#39;S JOURNAL</Heading>
      </Link>
      <Menu />
      </Flex>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      <Box w="100%" position="fixed" zIndex={60} css={sBack} >
        <Flex h="80px" w="80%" m="auto" align="flex-end" justify="space-between">

         <Flex align="flex-end">
         <Image src="/img/icon.png" alt="icon" width="70%" height="70%" />

          <Link href="/" pb={4} ml={2}>
          <Heading textDecoration="none" css={sMainTitle} size="md">NAO&#39;S JOURNAL</Heading>
          </Link>
         </Flex>


         <Box pb={4}>
          <Menu />
         </Box>
        </Flex>

      </Box>
    </ChakraProvider>

    </>
  )
}

const sBack = css`
 background: rgba(231, 231, 231, 0.25);
 box-shadow: 0 8px 28px 0 rgba( 139, 142, 184, 0.1 );
 backdrop-filter: blur( 5px );
 -webkit-backdrop-filter: blur( 5px );
 border-radius: 0 0 10px 10px;
 border: 1px solid rgba( 255, 255, 255, 0.1 );
`

const sMainTitle = css`
cursor: pointer;
 
 :hover {
   opacity: 0.8;
 }
`
