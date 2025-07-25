import { Box, ChakraProvider, Heading, Image, Text,  } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";

export const DribbbleCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Link href={props.url} target="_blank" rel="noreferrer" passHref>
      <Box css={sCard} rounded={4} backgroundColor='#ffffff' h="full" w={"100%"} overflow={"hidden"}>
        <Image src={props.img} w="full" h="200px" fit="cover" alt="DribbbleにUPしているサンプル" />
        <Box p={4}>
        <Text fontWeight='nomal' fontSize='16px'>{props.title}</Text>
        </Box>
      </Box>
      </Link>
    </ChakraProvider>
    </>
  )
}

const sCard = css`
  
  :hover {
    transition: 0.2s;
    opacity:0.7;
    cursor: pointer;
  }
`
