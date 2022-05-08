
import React from "react";
import { useRouter } from 'next/router'
import { ChakraProvider, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";


export const Back = () => {

  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <ChakraProvider>
      <Flex css={sHover} onClick={() => router.back()}>
      <ChevronLeftIcon boxSize={8} />
      <Text fontSize="xl" fontWeight="bold">Back</Text>
      </Flex>
      </ChakraProvider>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      <Flex css={sHover} onClick={() => router.back()}>
      <ChevronLeftIcon boxSize={10} />
      <Text fontSize="2xl" fontWeight="bold">Back</Text>
      </Flex>
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
