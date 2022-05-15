import React, { VFC } from "react";
import { Props } from "framer-motion/types/types";
import { Box, ChakraProvider, Flex, Spacer, useBreakpointValue, Heading, Link } from "@chakra-ui/react";

import { BackTop } from "../atoms/BackTop";
import { Menu } from "../molecules/Menu";
import { css } from "@emotion/react";



export const Footer:VFC<Props> = () => {

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

          <Link href="/" textDecoration="none">
           <a>
           <Heading css={sMainTitle} size="md">NAO&#39;S JOURNAL</Heading>
           </a>
          </Link>

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
const sMainTitle = css`
cursor: pointer;
 
 :hover {
   opacity: 0.8;
 }
`
