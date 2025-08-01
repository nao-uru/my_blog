import {  Box, ChakraProvider } from "@chakra-ui/react";
import {ChevronUpIcon} from "@chakra-ui/icons"
import { css } from "@emotion/react";


export const BackTop = () => {

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
 z-index: 50;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 50%;
 background: #F5F5F5;
 filter: drop-shadow(-8px -8px 8px rgba(255, 255, 255, 0.8)) drop-shadow(8px 8px 8px rgba(166, 180, 200, 0.7));
 
 :hover {
   color:  linear-gradient(180deg, #EEF0F5 0%, #E6E9EF 100%);
   filter:drop-shadow(-6px -6px 4px rgba(255, 255, 255, 0.8));
 }
`
