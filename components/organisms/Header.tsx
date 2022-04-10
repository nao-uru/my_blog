import React, { VFC } from "react";
import Image from "next/image";
import { Box, ChakraProvider,  Flex,  Center, } from "@chakra-ui/react";
import { css } from "@emotion/react";

import { Menu } from "../molecules/Menu";
import { MainTitle } from "../atoms/MainTitle";

const Icon = require('../../public/img/icon.png')

export const Header:VFC = () => {


  return (
    <>

    <ChakraProvider>
      <Box  css={Border} pb="16px">
        <Flex h="120px" align="flex-end" justify="space-between">

         <Box boxSize='80px' ml="120px">
         <Image src="/img/icon.png" alt="icon" width="80px" height="100%" />
         </Box>


         <Center>
           <MainTitle>NAOS Journal</MainTitle>
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
