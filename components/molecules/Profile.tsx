import { Box, ChakraProvider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { VFC } from "react";
import { ButtonSecond } from "../atoms/button/ButtonSecond";

const Icon = require('../../public/img/icon.png')

export const Profile = (props) => {

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
    <Text size="md" mt={0}>アプリデザイナー<br />インハウス正社員×制作会社で副業中！<br />  
     コードも書いてます!(Next,React...)
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
