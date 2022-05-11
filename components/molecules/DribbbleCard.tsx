import { Box, ChakraProvider, Heading, Image, } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Props } from "framer-motion/types/types";
import React, { VFC } from "react";


export const ViewCard:VFC<Props> = (props) => {

  return(
    <>
    <ChakraProvider>
        <a href={props.url} target="_blank" rel="noreferrer">
      <Box css={sCard} w="95%" m="auto" p={4}>
        <Image src={props.img} w="full" h="180px" mt="4" mb="4" fit="cover" alt="DribbbleにUPしているサンプル" />
        <Heading size="md">{props.title}</Heading>
        {/* <Text size="md">{props.date}</Text> */}
      </Box>
        </a>
    </ChakraProvider>
    </>
  )
}

const sCard = css`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06);
  
  :hover {
    cursor: pointer;
    background-color: #f4f4f4;
    background: #E7E7E7;
    box-shadow: 16px 16px 19px #DADADA, -12px -12px 19px #FAFAFA;
  }
`
