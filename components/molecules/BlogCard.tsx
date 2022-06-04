import { Box, ChakraProvider, Heading, Image } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Props } from "framer-motion/types/types";
import Link from "next/link";
import React, { VFC } from "react";

export const BlogCard:VFC<Props> = (props) => {

  return(
    <>
    <ChakraProvider>
      <Link href={props.slug} passHref>
      <Box css={sCard} w="320px" h="100%" m="auto" p={4}>
        <Image className="image" src={'https:' + props.url} w="full" h="240px" py={2} fit="cover" alt="Blog thubmnail" />
        <Heading size="md" pt={2}>{props.title}</Heading>
        {/* <Text size="md">{props.text}</Text> */}
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
    
    /* .image {
      transition: 0.2s;
      transform: scale(1.2);
    } */
  }
`
