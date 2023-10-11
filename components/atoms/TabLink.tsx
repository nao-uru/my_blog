import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

import { css } from "@emotion/react";

// 使ってない

export const TabLink = (props) => {

  // return (
  //   <>
  //   <ChakraProvider>
  //   <Button as="a" css={sTabLink} fontSize="sm">{props.children}</Button>
  //   </ChakraProvider>
  //   </>
  // )
}

const sTabLink = css`
padding: 12px 32px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06);
border-radius: 0;
cursor: pointer;

:hover {
  border:1px solid #F6F6F6;
  background: linear-gradient(180deg, #EEF0F5 0%, #E6E9EF 100%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
}
`
