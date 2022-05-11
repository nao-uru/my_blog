import React, { VFC } from "react";
import {  ChakraProvider } from "@chakra-ui/react";
import {ChevronUpIcon} from "@chakra-ui/icons"
import { css } from "@emotion/react";


export const BackTop:VFC = () => {

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  };

  return (
    <>
    <ChakraProvider>
      <ChevronUpIcon css={sHover} onClick={returnTop} w={16} h={16}  mr="6" alignSelf="top" />
    </ChakraProvider>
    </>
  )
}

const sHover = css`
 :hover {
   color: #6BA791;
 }
`
