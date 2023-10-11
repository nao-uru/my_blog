import { Box, ChakraProvider, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";

export const WorkCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Box borderRadius='2xl' backgroundColor='#ffffff' css={sCard} w="320px" h="full">
      <Link href={props.link} passHref>
        <Flex px={0} py={0} flexDirection='column' >
          <Image src={props.img} borderRadius={4} alt="Work thubmnail" w="320px" h="240px" fit='cover' />

        <Box p={4}>
          <Text fontWeight='bold' fontSize='lg'>{props.title}</Text>
          <Text fontWeight='nomal' fontSize="md" mt={1}>{props.text}</Text>
        </Box>
        </Flex>
      </Link>
      </Box>
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