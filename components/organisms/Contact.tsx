import React, { VFC } from "react";
import { ChakraProvider, Flex, Box, useBreakpointValue, Heading, Text} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

import { AiOutlineInstagram,AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { ButtonPrime } from "../atoms/Button";


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
        <ButtonPrime link="https://twitter.com/naos_journal">アカウントはこちら！</ButtonPrime>
      </Box>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineInstagram size="40px" />
        <Heading ml={2}>Instagram</Heading>
       </Flex>
        <Text mt={2}>勉強記録として使用中。海外のデザインや流行を知るための情報収集として海外の方達との交流も楽しんでいます！</Text>
        <ButtonPrime link="https://www.instagram.com/nao.journal__/">アカウントはこちら！</ButtonPrime>
      </Box>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineYoutube size="40px" />
        <Heading ml={2}>Youtube</Heading>
       </Flex>
        <Text mt={2}>Study vlogを作り発信しています！</Text>
        <ButtonPrime link="https://www.youtube.com/channel/UCnBdJFjL13ySAZ0wLf7TrFg">アカウントはこちら！</ButtonPrime>
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
        <ButtonPrime link="https://twitter.com/naos_journal">アカウントはこちら！</ButtonPrime>
      </Box>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineInstagram size="40px" />
        <Heading ml={2}>Instagram</Heading>
       </Flex>
        <Text mt={2}>勉強記録として使用中。海外のデザインや流行を知るための情報収集として海外の方達との交流も楽しんでいます！</Text>
        <ButtonPrime link="https://www.instagram.com/nao.journal__/">アカウントはこちら！</ButtonPrime>
      </Box>

      <Box mt={16}>
       <Flex align="center">
        <AiOutlineYoutube size="40px" />
        <Heading ml={2}>Youtube</Heading>
       </Flex>
        <Text mt={2}>Study vlogを作り発信しています!</Text>
        <ButtonPrime link="https://www.youtube.com/channel/UCnBdJFjL13ySAZ0wLf7TrFg">アカウントはこちら！</ButtonPrime>
      </Box>

    </ChakraProvider>
    </>
  )
}
