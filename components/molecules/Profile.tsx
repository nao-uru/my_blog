import { Box, ChakraProvider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import Link from "next/link";
import React, { VFC } from "react";
import { ButtonSecond } from "../atoms/button/ButtonSecond";

const Icon = require('../../public/img/icon.png')

export const Profile:VFC<Props> = (props) => {

  return(
    <>
    <ChakraProvider>
    <Box borderTop="1px solid #373737" width="100%">
    <Heading size="md" mt={8} mb={12}>著者プロフィール</Heading>
    <Flex justify="" my={6}>
      <Link href='/About' passHref>
      <Image src="/img/icon-circle.png" alt="icon" width="100px" height="100px" mr={4} cursor='pointer' _hover={{opacity:'0.7'}} />
      </Link>
      <Box>
        <Heading size="lg">NAO</Heading>
        <Heading size="sm" mt={2}>デザイナー</Heading>
        <Heading size="sm">コードも書く</Heading>
      </Box>
    </Flex>
    <Text size="md" mt={0}>デザインとフロントエンドのプログラミングを勉強中〜<br />
          仕事探し中のフリーランス<br />
    </Text>
    <ButtonSecond 
     href="/About"
     color="#6BA791"
    >About Me</ButtonSecond>
    </Box>
    </ChakraProvider>
    </>
  )
}
