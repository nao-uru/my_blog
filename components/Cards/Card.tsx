import { Box, ChakraProvider, Image, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";

export const Card = (props) => {

  return(
    <>
    <ChakraProvider>
      <Box rounded={8} backgroundColor='#ffffff' css={sCard} h="full" w={"100%"} overflow={"hidden"}>
      <Link href={props.slug} passHref>
      <Box css={sCard} >
        <Image className="image" src={'https:' + props.url} w="full" h="200px" alt="Blog thubmnail" alignSelf={"stretch"} maxH={"100%"} maxW={"#100%"} objectFit={"cover"}  />

        <Box p={4}>
        <Text fontWeight='nomal' fontSize='16px'>{props.title}</Text>
        <Text fontWeight='nomal' fontSize="md" mt={1} textColor={"#5B5B5B"}>{props.date}</Text>
        <Text size="xs">{props.tag}</Text>
        </Box>
      </Box>
      </Link>
      </Box>
    </ChakraProvider>
    </>
  )
}


const sCard = css`
  
  :hover {
  transition: 0.5s;
  opacity:0.7;
}
`
