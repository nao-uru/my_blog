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
      <Box css={sCard} w="320px" m="auto" p={4} >
        <Image className="image" src={'https:' + props.url} w="full" h="240px" pt={2} pb={2} fit="cover" alt="Blog thubmnail" />
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
  
  :hover {
    transition: 0.2s;
    cursor: pointer;
    background-color: #f4f4f4;
    background: #E7E7E7;
    box-shadow: 16px 16px 19px #DADADA, -12px -12px 19px #FAFAFA;
    
    /* .image {
      overflow: hidden;
      transition: 0.2s;
      transform: scale(1.2);
    } */
  }
`
