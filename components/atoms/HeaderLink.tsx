import React, { VFC } from "react";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Props } from "framer-motion/types/types";


export const HeaderLink:VFC<Props> = ({children},props) => {


  return (
    <>
    <ChakraProvider>
      <Box css={sHover}>
       <Heading  size="md" pt="4px" h="100%">{children}</Heading>
      </Box>
    </ChakraProvider>
    </> 
  )
}

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.8;
}
`
