import { Box, ChakraProvider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";
import React, { VFC } from "react";

export const BlogCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Link href={props.slug} passHref>
      <Box css={sCard} w="320px" h="100%" m="auto" p={4}>
        <Image className="image" src={'https:' + props.url} w="full" h="200px" py={2} fit="cover" alt="Blog thubmnail" />
        <Heading size="md" mt={2}>{props.title}</Heading>
        <Text size="xs" mt={3}>{props.date}</Text>
        <Text size="xs">{props.tag}</Text>
      </Box>
      </Link>
    </ChakraProvider>
    </>
  )
}


const sCard = css`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    z-index: 10;
  
  :hover {
    transition: 0.2s;
    cursor: pointer;
    background: linear-gradient(180deg, #EEF0F5 0%, #E6E9EF 100%);
    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
  }
`
