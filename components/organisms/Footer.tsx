import React, { VFC } from "react";
import { Props } from "framer-motion/types/types";
import { Box, ChakraProvider, Flex, Spacer, useBreakpointValue } from "@chakra-ui/react";

import { MainTitle } from "../atoms/MainTitle";
import { BackTop } from "../molecules/MenuBack";
import { Menu } from "../molecules/Menu";
import { css } from "@emotion/react";



export const Footer:VFC<Props> = ({children}) => {

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <ChakraProvider>
      <Box h="240px" css={Border} pt="4" mt="52">
      <BackTop />
      </Box>
      </ChakraProvider>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      <Box h="240px" css={Border} pt="4" mt="52">
        <Box w="90%" m="auto">
        <Flex align="baseline">
          <MainTitle>NAOS Journal</MainTitle>
          <Spacer />
          <BackTop />
          <Menu />
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
