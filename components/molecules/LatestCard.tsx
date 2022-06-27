import { Box, ChakraProvider, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

export const LatestCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Link  href={props.slug} passHref>
      <Box border='1px solid #373737' m='auto' mb={6} borderRadius={8} cursor='pointer' _hover={{opacity:'0.7'}} >
        <Flex px={4} py={6} >
          <Image src={'https:' + props.url} borderRadius={8} w="120px" h="80px" fit="cover" alt="Blog thubmnail" />
          <Heading size='sm' ml={2}>{props.title}</Heading>
        </Flex>
      </Box>
      </Link>
    </ChakraProvider>
    </>
  )
}


