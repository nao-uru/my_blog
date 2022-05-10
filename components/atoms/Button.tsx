import React from "react";
import { css } from "@emotion/react";
import { ChakraProvider, useBreakpointValue, Button, Box } from "@chakra-ui/react";
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
  color: #fff;
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


  ::before, ::after {
   position: absolute;
   content: "";
   height: 0%;
   width: 1px;
   box-shadow:
     -1px -1px 20px 0px rgba(255,255,255,1),
     -4px -4px 5px 0px rgba(255,255,255,1),
     7px 7px 20px 0px rgba(0,0,0,.4),
     4px 4px 5px 0px rgba(0,0,0,.3);
  }

  ::before {
   right: 0;
   top: 0;
   transition: all 500ms ease;

   :hover {
    transition: all 500ms ease;
    height: 100%;
   }
  }

  ::after {
   left: 0;
   bottom: 0;
   transition: all 500ms ease;

   :hover {
    transition: all 500ms ease;
    height: 100%;
   }
  }

  :hover {
    background: transparent;
    color: #6BA791;
    box-shadow: inset 4px 4px 13px rgba(124, 124, 124, 0.25);
  }
`

const sButtonText = css`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  ::before,::after {
  position: absolute;
  content: "";
  box-shadow:
   -1px -1px 20px 0px rgba(255,255,255,1),
   -4px -4px 5px 0px rgba(255,255,255,1),
   7px 7px 20px 0px rgba(0,0,0,.4),
   4px 4px 5px 0px rgba(0,0,0,.3);
  }

  ::before {
   left: 0;
   top: 0;
   width: 0%;
   height: .5px;
   transition: all 500ms ease;
  }

  ::after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: .5px;
  transition: all 500ms ease;
  }

  :hover, ::before {
    width: 100%;
  }

  :hover,::after {
    width: 100%;
  }
`
