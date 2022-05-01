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
      <Flex w="100%" justify="space-between" alignItems="center" css={Border} py={2} px={4}>
      <MainTitle>NAO&#39; Journal</MainTitle>
      <Menu />
      </Flex>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      <Box  css={Border} pb="16px">
        <Flex h="120px" align="flex-end" justify="space-between">

         <Box boxSize='80px' ml="120px">
         <Image src="/img/icon.png" alt="icon" width="80px" height="100%" />
         </Box>


         <Center>
           <MainTitle>NAO&#39; Journal</MainTitle>
         </Center>

         <Box mr="72px">
          <Menu />
         </Box>


        </Flex>

      </Box>
    </ChakraProvider>

    </>
  )
}

const Border = css`
 border-bottom: 2px solid #E8E5DE;
`

