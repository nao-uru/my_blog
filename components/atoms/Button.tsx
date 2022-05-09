import React from "react";
import { css } from "@emotion/react";
import { ChakraProvider, useBreakpointValue, Button } from "@chakra-ui/react";


export const ButtonPrime = ( props, {children} ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <ChakraProvider>
      <Button css={sButton} mt={4} >{props.children}</Button>
      </ChakraProvider>
      </>
    )
  }


  return (
    <>
    <ChakraProvider>
    <Button css={sButton} mt={4} >{props.children}</Button>
    </ChakraProvider>
    </>
  )
}

const sButton = css`
 background-color: #6BA791;
 color: #e7e7e7;
`
