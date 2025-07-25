import { Box, ChakraProvider, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";

export const WorksCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Box rounded={4} backgroundColor='#ffffff' css={sCard} h="full" overflow={"hidden"}>
      <Link href={props.link} passHref>
        <Flex px={0} py={0} flexDirection='column' >
          <Image src={props.img} borderRadius={4} alt="Work thubmnail" alignSelf={"stretch"} maxH={"100%"} maxW={"#100%"} objectFit={"cover"} />

        <Box p={4}>
          <Text fontWeight='nomal' fontSize='24px'>{props.title}</Text>
          <Text fontWeight='nomal' fontSize="md" mt={1} textColor={"#5B5B5B"}>{props.text}</Text>
        </Box>
        </Flex>
      </Link>
      </Box>
    </ChakraProvider>
    </>
  )
}


const sCard = css`

:hover {
  transition: 0.5s;
  box-shadow: none;
  opacity:0.7;
}
`