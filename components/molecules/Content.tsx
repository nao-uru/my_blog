import { ChakraProvider, Stack, Text} from "@chakra-ui/react";
import React, { VFC } from "react";
import { Title } from "../atoms/Title";


export const Content:VFC = () => {

  return (
    <>
    <ChakraProvider>
     <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}>
     <Title>Career</Title>
     <Text mt={0} w="100%">
       法学部を卒業後、フリーター
       海外でも通用する仕事をしたいと思っていたところでWEBの世界に興味を持つ
       html,cssの勉強からスタートし、今はフロントエンド全般の勉強中<br />
       約1年間勉強したのち小さなデザイン会社に就職<br />
       その後はフリーランスでデザインとWEB制作両方の仕事をしています。<br />
       どっちつかずは良くないなと思いながらも両方楽しくて勉強しています。
       お仕事の割合はデザイン8割。
     </Text>
     </Stack>
    </ChakraProvider>
    </>
  )
}
