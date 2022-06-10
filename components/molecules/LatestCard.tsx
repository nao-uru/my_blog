import { Box, ChakraProvider, Flex, Heading, Image } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import Link from "next/link";
import React, { VFC } from "react";

export const LatestCard:VFC<Props> = (props) => {

  return(
    <>
    <ChakraProvider>
      <Link  href={props.slug} passHref>
      <Box border='1px solid #373737' m='auto' mb={6} borderRadius={8} cursor='pointer'>
        <Flex p={6}>
          <Image src={'https:' + props.url} w="120px" h="80px" fit="cover" alt="Blog thubmnail" />
          <Heading size='sm' ml={4}>{props.title}</Heading>
        </Flex>
      </Box>
      </Link>
    </ChakraProvider>
    </>
  )
}


