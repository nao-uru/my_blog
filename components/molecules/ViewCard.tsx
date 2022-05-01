import { Box, ChakraProvider, Heading, Image, Text} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Props } from "framer-motion/types/types";
import React, { VFC } from "react";


export const ViewCard:VFC<Props> = (props) => {

  return(
    <>
    <ChakraProvider>
        <a href={props.url}>
      <Box css={sHover} w="320px" m="auto" p="4">
        <Heading size="md">{props.title}</Heading>
        <Image src={props.img} w="full" h="180px" mt="4" mb="4" fit="cover" alt="DribbbleにUPしているサンプル" />
        <Text size="md" fontWeight="bold">{props.date}</Text>
      </Box>
        </a>
    </ChakraProvider>
    </>
  )
}

const sHover = css`
  :hover {
    cursor: pointer;
    background-color: #f4f4f4;
  }
`
