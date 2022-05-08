import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

import { css } from "@emotion/react";
import { Props } from "framer-motion/types/types";


export const TabLink = (props) => {

  return (
    <>
    <ChakraProvider>
    <Button as="a" href={props.url} css={sTabLink} fontSize="sm">{props.children}</Button>
    </ChakraProvider>
    </>
  )
}


const sTabLink = css`
padding: 12px 32px;
background-color: #E8E5DE;
border-radius: 0;
border: 1px solid #E8E5DE;
cursor: pointer;
:hover {
  background-color: white;
  border:1px solid #F6F6F6;
}
`
