import React, { VFC } from "react";
import { ChakraProvider, Flex, Box, useBreakpointValue, Heading, Text} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

import { AiOutlineInstagram,AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { ButtonPrime } from "../atoms/Button";
import Link from "next/link";


export const Contact:VFC<Props> = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <ChakraProvider>
      <Box mt={16}>
       <Flex align="center">
        <AiOutlineTwitter size="40px" />
        <Heading ml={2}>Twitter</Heading>
       </Flex>
        <Text mt={2}>デザインの情報を発信中したり、作ったものを掲載したりしています！</Text>
        <Link href="https://twitter.com/naos_journal" passHref>
        <ButtonPrime>アカウントはこちら！</ButtonPrime>
        </Link>
      </Box>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineInstagram size="40px" />
        <Heading ml={2}>Instagram</Heading>
       </Flex>
        <Text mt={2}>勉強記録として使用中。海外のデザインや流行を知るための情報収集として海外の方達との交流も楽しんでいます！</Text>
        <Link href="https://www.instagram.com/nao.journal__/" passHref>
        <ButtonPrime>アカウントはこちら！</ButtonPrime>
        </Link>
      </Box>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineYoutube size="40px" />
        <Heading ml={2}>Youtube</Heading>
       </Flex>
        <Text mt={2}>Study vlogを作り発信しています！</Text>
        <Link href="https://www.youtube.com/channel/UCnBdJFjL13ySAZ0wLf7TrFg" passHref>
        <ButtonPrime>アカウントはこちら！</ButtonPrime>
        </Link>
      </Box>

      </ChakraProvider>
      </>
    )
  }
  
  
  return(
    <>
    <ChakraProvider>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineTwitter size="40px" />
        <Heading ml={2}>Twitter</Heading>
       </Flex>
        <Text mt={2}>デザインの情報を発信中したり、作ったものを掲載したりしています！</Text>
      </Box>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineInstagram size="40px" />
        <Heading ml={2}>Instagram</Heading>
       </Flex>
        <Text mt={2}>勉強記録として使用中。海外のデザインや流行を知るための情報収集として海外の方達との交流も楽しんでいます！</Text>
      </Box>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineYoutube size="40px" />
        <Heading ml={2}>Youtube</Heading>
       </Flex>
        <Text mt={2}>Study vlogを作り発信しています！</Text>
        <ButtonPrime>アカウントはこちら！</ButtonPrime>
      </Box>

    </ChakraProvider>
    </>
  )
}
