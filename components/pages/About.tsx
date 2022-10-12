import React, { VFC } from "react";
import { ChakraProvider, Flex, Box, useBreakpointValue, Image } from "@chakra-ui/react";

import { ImgTitle } from "../molecules/ImgTitle ";
import { Content } from "../molecules/Content";
import { TableContent } from "../molecules/Table";


export const About = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <Box>

       <Box w="full">
       <ImgTitle url="/img/photo.png" title="About" />
       </Box>
       
       <Box m="auto" mt={4} w="95%">
       <Content title="Profile" />
       <TableContent />

       <Content title="Career">
        法学部を在学中、就職に失敗し、ヨーロッパをバックパック。
        その後フリーターをしていました。
        海外でも通用する仕事をしたいと思っていたところでWEBの世界に興味を持ちました。
        約1年間、デザインやWEB制作の勉強したのち小さなデザイン会社に就職しました。<br />
        その後はフリーランスでデザインとWEB制作両方の仕事をしています。<br />
        どっちつかずは良くないなと思いながらも両方楽しくて常に情報をキャッチアップしています！<br />
        このブログもデザインから自分で構築しました!（Next,js,contentful）<br />
        お仕事の割合はデザイン8割。
       </Content>

       <Content title="Goal">
       これからの目標は、趣味としてプログラミングを勉強しつつ、コーディングとデザインはプロとしてのクオリティを追求することです。<br />
       UI/UXを極めるために心理学や行動経済学も勉強したいなと思っています!<br />
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

    <Box w="full">
    <ImgTitle url="/img/photo.png" title="About" />
    </Box>
    
    <Box ml={16}>
    <Content title="Profile" />

    <Flex alignItems="center" justifyContent="space-around">
     <Image src="/img/icon.png" w={36} h={36} mr={4} alt="Main Image" /> 
     <TableContent />
    </Flex>

    <Content title="Career">
      法学部を在学中、就職に失敗し、ヨーロッパをバックパック。
      その後フリーターをしていました。
      海外でも通用する仕事をしたいと思っていたところでWEBの世界に興味を持ちました。
      約1年間、デザインやWEB制作の勉強したのち小さなデザイン会社に就職しました。<br />
      その後はフリーランスでデザインとWEB制作両方の仕事をしています。<br />
      どっちつかずは良くないなと思いながらも両方楽しくて常に情報をキャッチアップしています！<br />
      このブログもデザインから自分で構築しました!（Next,js,contentful）<br />
      お仕事の割合はデザイン7割。
    </Content>
    
    <Content title="Goal">
      これからの目標は、趣味としてプログラミングを勉強しつつ、コーディングとデザインはプロとしてのクオリティを追求することです。<br />
      UI/UXを極めるために心理学や行動経済学も勉強したいなと思っています!<br />
      また、ブログやSNSでの発信も頑張っていきたいのでフォローしていただけると嬉しいです😊
    </Content>
    
    </Box>
    
    </Flex>

    </ChakraProvider>
    </>
  )
}
