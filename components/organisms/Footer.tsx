import React, { VFC } from "react";
import { Props } from "framer-motion/types/types";
import { Box, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";
import { MainTitle } from "../atoms/MainTitle";
import { MenuBack } from "../molecules/MenuBack";
import { css } from "@emotion/react";



export const Footer:VFC<Props> = ({children}) => {

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  };

  return (
    <>
    <ChakraProvider>
      <Box h="240px" css={Border} pt="4" mt="52">
        <Box w="90%" m="auto">
        <Flex align="baseline">
          <Box onClick={returnTop}>
          <MainTitle>NAOS Journal</MainTitle>
          </Box>

          <Spacer />

          <MenuBack />
        </Flex>
        </Box>
      </Box>
    </ChakraProvider>
    </>
  )
}

const Border = css`
 border-top: 2px solid #E8E5DE;
`
