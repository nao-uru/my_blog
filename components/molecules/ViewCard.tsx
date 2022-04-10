import { Box, ChakraProvider, Heading, Image, Text} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Props } from "framer-motion/types/types";
import React, { VFC } from "react";


export const ViewCard:VFC<Props> = (props) => {

  return(
    <>
    <ChakraProvider>
      <Box css={sHover} w="320px" m="auto" p="4">
        <Heading size="md">{props.title}</Heading>
        <Image src={props.url} w="full" h="180px" mt="4" mb="4" fit="cover" alt="ポートフォリオの写真" />
        <Text size="md">Company name</Text>
        <Text size="xl">This is a sample site A</Text>
      </Box>
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
