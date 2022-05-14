import React from "react";
import { css } from "@emotion/react";
import { ChakraProvider, useBreakpointValue, Button, Text } from "@chakra-ui/react";
import Link from "next/link";


export const ButtonPrime = ( props, {children} ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <ChakraProvider>
      <Link href={props.link} passHref>
      <a target="_blank">
      <Button css={sButton} mt={4} >{props.children}</Button>
      </a>
      </Link>
      </ChakraProvider>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
    <Link href={props.link} passHref>
    <a target="_blank">
    <Button css={sButton} mt={4} >{props.children}</Button>
    </a>
    </Link>
    </ChakraProvider>
    </>
  )
}

const sButton = css`
  width: 200px;
  height: 50px;
  color: #e7e7e7;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;

  background: #6BA791;
  line-height: 42px;
  padding: 0;
  border: none;

  :hover {
    border: 2px #6BA791 solid;
    background: transparent;
    color: #6BA791;
    box-shadow: 2px 2px 2px 2px #8a8a8a2e;  
  }
`
