import React, { VFC } from "react";
import {  Box, ChakraProvider } from "@chakra-ui/react";
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
      <Box css={sBack} onClick={returnTop} 
      w={{base:"50px",md:"64px"}} 
      h={{base:"50px",md:"64px"}} 
      position="fixed" 
      right={{base:"40px",md:"80px"}}
      bottom={{base:"40px",md:"80px"}}>
      <ChevronUpIcon w={{base:8,md:12}} h={{base:8,md:12}} alignSelf="top" />
      </Box>
    </ChakraProvider>
    </>
  )
}

const sBack = css`
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 border: #FEFEFF;
 border-radius: 50%;
 background: linear-gradient(180deg, #E9EDF0 0%, #E9EDF0 100%);
 filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));
 
 :hover {
   color:  linear-gradient(180deg, #EEF0F5 0%, #E6E9EF 100%);
   background: #6BA791;
   border: #FFFFFF;
   filter:none;
 }
`
