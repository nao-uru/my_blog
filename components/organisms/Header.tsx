import React, { VFC } from "react";
import Image from "next/image";
import { css } from "@emotion/react";

import { Box, ChakraProvider,  Flex,  Center, useBreakpointValue} from "@chakra-ui/react";

import { Menu } from "../molecules/Menu";
import { MainTitle } from "../atoms/MainTitle";

const Icon = require('../../public/img/icon.png')


export const Header:VFC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile){
    return(
      <>
      <Flex w="100%" justify="space-between" alignItems="center" css={sBorder} py={2} px={4} zIndex={60}>
      <MainTitle>NAO&#39;S JOURNAL</MainTitle>
      <Menu />
      </Flex>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      <Box pb="16px" w="100%" position="fixed" zIndex={60} css={sBack}>
        <Flex h="80px" w="80%" m="auto" align="flex-end" justify="space-between">

         <Box boxSize='60px'>
         <Image src="/img/icon.png" alt="icon" width="60px" height="80%" />
         </Box>


         <Center>
           <MainTitle>NAO&#39;S JOURNAL</MainTitle>
         </Center>

         <Box>
          <Menu />
         </Box>


        </Flex>

      </Box>
    </ChakraProvider>

    </>
  )
}

const sBorder = css`
 border-bottom: 2px solid #E8E5DE;
`

const sBack = css`
 /* background: rgba( 255, 255, 255, 0.25 ); */
 background: rgba(231, 231, 231, 0.25);
 box-shadow: 0 8px 28px 0 rgba( 139, 142, 184, 0.1 );
 backdrop-filter: blur( 5px );
 -webkit-backdrop-filter: blur( 5px );
 border-radius: 10px;
 border: 1px solid rgba( 255, 255, 255, 0.1 );
`

