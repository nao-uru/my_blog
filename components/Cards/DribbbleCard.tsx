import { Box, ChakraProvider, Heading, Image, } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";

export const DribbbleCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Link href={props.url} target="_blank" rel="noreferrer" passHref>
      <Box css={sCard} w="95%" m="auto" p={4} borderRadius="2xl">
        <Image rounded={'lg'} src={props.img} w="full" h="180px" fit="cover" alt="DribbbleにUPしているサンプル" />
        <Heading size="md" mt={2}>{props.title}</Heading>
      </Box>
      </Link>
    </ChakraProvider>
    </>
  )
}

const sCard = css`
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    z-index: 10;
  
  :hover {
    transition: 0.2s;
    cursor: pointer;
    background: linear-gradient(180deg, #EEF0F5 0%, #E6E9EF 100%);
    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
  }
`
