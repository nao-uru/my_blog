import {  ChakraProvider, Flex } from "@chakra-ui/react";
import React, { VFC } from "react";
import { Menu } from "./Menu";
import {ChevronUpIcon} from "@chakra-ui/icons"
import { css } from "@emotion/react";


export const MenuBack:VFC = () => {

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  };

  return (
    <>
    <ChakraProvider>
      <Flex align="baseline" justify="center">
      <ChevronUpIcon css={sHover} onClick={returnTop} w={16} h={16}  mr="6" alignSelf="top" />
      <Menu />
      </Flex>
    </ChakraProvider>
    </>
  )
}

const sHover = css`
 :hover {
   color: #6BA791;
 }
`
