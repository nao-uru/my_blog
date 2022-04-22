
import React, { VFC } from "react";
import { useRouter } from 'next/router'
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";


export const Back = () => {

  const router = useRouter();

  return (
    <>
    <ChakraProvider>
      <Box css={sHover} onClick={() => router.back()}>
      <Text fontSize="2xl"><ChevronLeftIcon boxSize={10} />Back</Text>
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
