import { Box, ChakraProvider, Heading, Image, } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";

export const ViewCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Link href={props.url} target="_blank" rel="noreferrer">
      <Box css={sCard} w="95%" m="auto" p={4}>
        <Image src={props.img} w="full" h="180px" fit="cover" alt="DribbbleにUPしているサンプル" />
        <Heading size="md" mt={2}>{props.title}</Heading>
      </Box>
      </Link>
    </ChakraProvider>
    </>
  )
}

const sCard = css`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06);
  
  :hover {
    transition: 0.2s;
    cursor: pointer;
    background: linear-gradient(180deg, #EEF0F5 0%, #E6E9EF 100%);
    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
  }
`
