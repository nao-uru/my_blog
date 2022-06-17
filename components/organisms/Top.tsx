import { ChakraProvider,Text, Box, Image, Flex, keyframes, Heading,  } from "@chakra-ui/react";
import { ButtonSecond } from "../atoms/button/ButtonSecond";
import { Title } from "../atoms/Title";

export const Top = () => {

  const imgs = ["/img/top-img.png","/img/top-img2.png","/img/top-img3.png"];
  
  return(
    <>
    <ChakraProvider>
      <Flex justifyContent="end" w="100%">
        <Image src={`${imgs[2]}`} h="auto" w={{base:"80%",md:"80%"}} fit="contain" alt="Main Image"/>

        <Box position="absolute" zIndex={10} top={{base:40,md:80}} left={{base:4, md:20}} >
        <Text fontSize={{base:"60px",md:"120px"}} fontWeight="bold">NAO&#39;S</Text>
        <Text fontSize={{base:"60px",md:"120px"}} fontWeight="bold">JOURNAL</Text>
        </Box>
      </Flex>

      <Box w="80%" m="auto" mb={40}>
      <Heading size="2xl" mt={20}>Wel Come!</Heading>
      <Text size="md" lineHeight="7" mt={2} >
        ご訪問いただきありがとうございます! 大澤菜央のHPです。<br />
        公開してから約1ヶ月、新たな機能をつけたり、デザインをブラッシュアップしたりと日々アップデートを図っています!<br />
        ぜひ気になったページから見てみてください✨
      </Text>

      <Box mt={20} w="80%" borderTop='1px solid #222222' >
        <Title>Blog</Title>
        <Text size="md" lineHeight="7" >勉強した知識を言語化するために、デザインや読書に関することを中心に発信しています！<br />
        今後は旅行やワーキングホリデーなど、仕事以外のことも発信予定です。
        </Text>

        <ButtonSecond href="/Blog" color="#6BA791">Blog</ButtonSecond>
      </Box>

      <Box mt={20} w="80%" borderTop='1px solid #222222'>
        <Title>Works</Title>
        <Text size="md" lineHeight="7" >
          Dribbbleに練習として作成したデザインをUPしています!<br />
         実際に携わったお仕事に関しては非公開させていただいています。<br />
         ご興味をお持ちの方はお気軽にお問い合わせください☺︎
        </Text>
        <ButtonSecond href="/Blog" color="#6BA791">Works</ButtonSecond>
      </Box>
      
      <Box mt={20} w="80%" borderTop='1px solid #222222'>
        <Title>About</Title>
        <Text size="md" lineHeight="7">
          自己紹介のページです！

        </Text>
        <ButtonSecond href="/Blog" color="#6BA791">About</ButtonSecond>
      </Box>

      </Box>
    </ChakraProvider>
    </>
  )
}

