import { Box, ChakraProvider, Heading, Image, Text} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Props } from "framer-motion/types/types";
import Link from "next/link";
import React, { VFC } from "react";

export const BlogCard:VFC<Props> = (props) => {

  return(
    <>
    <ChakraProvider>
      <Link href={props.slug} passHref>
      <Box css={sCard} w="320px" m="auto" p="4">
        <Image src={'https:' + props.url} w="full" h="180px" mt="4" mb="4" fit="cover" alt="Blog thubmnail" />
        <Heading size="md">{props.title}</Heading>
        <Text size="md">{props.text}</Text>
      </Box>
      </Link>
    </ChakraProvider>
    </>
  )
}


const sCard = css`
 box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
 :hover {
    cursor: pointer;
    background-color: #f4f4f4;
  }
`
