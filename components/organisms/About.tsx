import React, { VFC } from "react";
import { ChakraProvider, Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

import { ImgTitle } from "../molecules/ImgTitle ";
import { Content } from "../molecules/Content";
import { TableContent } from "../molecules/Table";


export const About:VFC<Props> = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <Box>

       <Box w="full">
       <ImgTitle url="/img/Chefchaouen.jpeg" title="About" />
       </Box>
       
       <Box mt={4}>
       <TableContent />

       <Content title="Career">
        法学部を卒業後、フリーター
        海外でも通用する仕事をしたいと思っていたところでWEBの世界に興味を持つ
        html,cssの勉強からスタートし、今はフロントエンド全般の勉強中。<br />
        約1年間勉強したのち小さなデザイン会社に就職。<br />
        その後はフリーランスでデザインとWEB制作両方の仕事をしています。<br />
        どっちつかずは良くないなと思いながらも両方楽しくて勉強しています。<br />
        お仕事の割合はデザイン8割。
       </Content>

       <Content title="Goal">
      これからの目標は、趣味としてプログラミングを勉強しつつ、コーディングとデザインはプロとしてのクオリティを追求することです。<br />
      また最近はサボっている英語の学習を再開し、30歳までに海外での仕事をしてみたいと思っています。<br />
      決して簡単なことではないですが、自信を持って挑戦できるスキルを身につけたいと思います！<br />
      また、ブログやSNSでの発信も頑張っていきたいのでフォローしていただけると嬉しいです😊
       </Content>

       </Box>
       
      </Box>
      </>
    )
  }

  
  return(
    <>
    <ChakraProvider>

    <Flex w="ful" mt={16}>

    <Box w="full" mt={4}>
    <ImgTitle url="/img/Chefchaouen.jpeg" title="About" />
    </Box>
    
    <Box>
    <TableContent />
    <Content title="Career">
      法学部を卒業後、フリーター
      海外でも通用する仕事をしたいと思っていたところでWEBの世界に興味を持つ
      html,cssの勉強からスタートし、今はフロントエンド全般の勉強中。<br />
      約1年間勉強したのち小さなデザイン会社に就職。<br />
      その後はフリーランスでデザインとWEB制作両方の仕事をしています。<br />
      どっちつかずは良くないなと思いながらも両方楽しくて勉強しています。<br />
      お仕事の割合はデザイン8割。
    </Content>
    
    <Content title="Goal">
      これからの目標は、趣味としてプログラミングを勉強しつつ、コーディングとデザインはプロとしてのクオリティを追求することです。<br />
      また最近はサボっている英語の学習を再開し、30歳までに海外での仕事をしてみたいと思っています。<br />
      決して簡単なことではないですが、自信を持って挑戦できるスキルを身につけたいと思います！<br />
      また、ブログやSNSでの発信も頑張っていきたいのでフォローしていただけると嬉しいです😊
    </Content>
    
    </Box>
    
    </Flex>

    </ChakraProvider>
    </>
  )
}
