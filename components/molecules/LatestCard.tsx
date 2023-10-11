import { Box, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";


export const LatestCard = (props) => {

  return(
    <>
    <ChakraProvider>
    <Link  href={props.slug} passHref>
      <Box backgroundColor="#ffffff" m='auto' mb={6} borderRadius={8} cursor='pointer' overflow="hidden" css={sCard} >
        <Flex w="full">
          <Image src={'https:' + props.url} w="160px" h="120px" fit="cover" alt="Blog thubmnail" />
          <Text fontSize="16px" fontWeight="bold" w="full"  p={3}>{props.title}</Text>
        </Flex>
      </Box>
      </Link>
    </ChakraProvider>
    </>
  )
}

const sCard = css`
box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.08);

:hover {
  transition: 0.5s;
  box-shadow: none;
  opacity:0.7;
}
`