import { Box, ChakraProvider, SimpleGrid, Text, Image, Flex } from "@chakra-ui/react";
import { DribbbleCard } from "../Cards/DribbbleCard";
import { GetDribblePost } from "../../libs/dribblepost";
import { ButtonPrime } from "../Parts/ButtonPrimary";
import { BlogCardSmall } from "../Cards/BlogCardSmall";
import { AiOutlineDribbble } from "react-icons/ai";

export const Work = () => {

  const dribblePost = GetDribblePost();
  const items = dribblePost.items;
  console.log(items);

  return(
    <>
    <ChakraProvider>

      <Box  mt={{base:4, md:6}}>
      <Text fontSize={{base:"40px",md:"64px"}} lineHeight="none">Works</Text>
      </Box>

      <Box mt={{base:2, md:12}}>

      {/* IDEAL ME */}
      <Box mt={4}  maxW={{base:"100%", md:"1000px"}}  m="auto" p={{base:4, md:6}} backgroundColor="#ffffff" rounded="2xl">
      <Text fontWeight='bold' fontSize={{base:"24px",md:"32px"}}>IDEAL ME</Text>
      <Text fontWeight='nomal' fontSize="md" mb={4} >オリジナルのアプリをデザインしました！要件定義〜デザインまですべて一人で制作しました。デザインのフローは下記の2つの記事にまとめました。<br />
      睡眠時間を記録すると同時に昨日を振り返ることのできるアプリです。最初に登録した理想の生活を簡単に確認することができ、自分の理想や目標を常に意識して生活することができます。<br />
      シンプルな構造で男女ともに使いやすいアプリを目指しました。拡張もしやすいデザインになっています。現在はデザインまでですが、いつか実装してみたいです！
      </Text>

      <Flex direction={{base:"column", md:"row"}} justifyContent="space-between" alignItems="flex-start" mt={2} gap={{base:4, md:0}}>
      <Box w={{base:"full", md:"50%"}} mr={0}>
      <Image src={"/img/ideallMe.png"} rounded="xl" alt="Work thubmnail" w="400px"  fit='cover' />
      <Flex direction={{base:'column', md:"row"}} my={{base:4, md:6}} gap={{base:3, md:0}}>
        <ButtonPrime href="https://www.figma.com/file/2r3Lm085yw0U6E9iVLi7Ta/IDEAL-ME?type=design&node-id=503%3A25036&mode=design&t=XTGedAxHjyVln4np-1"wide={{base:"full", md:"fit-content"}} bgColor="#25D088" target="_blank" color="#ffffff" icon={''}>figmaファイルはこちら</ButtonPrime>
        <ButtonPrime href="/" bgColor="#ffffff" border="#25D088" target="_blank" color="#25D088"  wide={{base:"full", md:"fit-content"}} icon={''}>PDFで見る</ButtonPrime>
      </Flex>
      </Box>
      <Box w={{base:"full", md:"60%"}}> 
        <Box>
        <BlogCardSmall
        title="IDEAL ME 要件定義・価値定義" 
        url="//images.ctfassets.net/dd0roywjqx3t/5OUZIh5kUUhO9YScnNHPm9/56517bfe23ccadd49908a5e11b46dc4b/Thubmneil.png" 
        slug="https://www.naosjournal.com/IdealMe_concept" />
        <BlogCardSmall 
        title="IDEAL ME ワイヤーフレーム・デザイン制作" 
        url="//images.ctfassets.net/dd0roywjqx3t/4WmBoTIWroXZv5bvPraDvQ/1ba265402aece2f00c78d43ddf846600/Thubmneil-1.png" 
        slug="https://www.naosjournal.com/IdealMe_design" />
        </Box>
      </Box>
      </Flex>
      </Box>

      {/* 制作実績 */}
      <Box maxW={{base:"100%", md:"1000px"}} m="auto" p={6} backgroundColor="#ffffff" rounded="2xl" mt={{base:4, md:12}}>
      <Text fontWeight='bold' fontSize={{base:"24px",md:"32px"}}>制作実績</Text>
      <Text fontWeight='nomal' fontSize="md" mb={4} >制作実績は非公開となっております。ご興味をお持ちの方はお問い合わせください！採用担当者様には別途お送りしております。</Text>

      <Image src={"/img/portfolio.png"} rounded="xl" alt="Work thubmnail" w="400px"  fit='cover' mt={2} />
      <Flex direction={{base:'column', md:"row"}} my={{base:4, md:6}} gap={{base:2, md:0}}>
       <ButtonPrime href="mailto:nao.uru0419@gmail.com" bgColor="#25D088"  wide={{base:"full", md:"fit-content"}} target="_blank" color="#ffffff" icon={''}>お問い合わせ</ButtonPrime>
      </Flex>
      </Box>
     

      </Box>


       {/* Dribble */}
      <Box>
      <Box mt={16}>
      <Text fontSize={{base:"24px",md:"32px"}} lineHeight="none">Dribble</Text>
      <Text mt={2}>デザイン学習を始めた時に作成していたものです。初期の制作物なので暖かい目で見ていただけると幸いです。</Text>
      </Box>
      <SimpleGrid columns={{base:1,md:3}} spacingY={{base:8,md:'40px'}} m='auto' w="100%" mt={8} >
        {items.map((item:any) => {

        return <DribbbleCard
        key={item}
        title={item.title}
        img={item.images.hidpi}
        url={item.html_url}
        />
      })}
      
      </SimpleGrid>
      <Box mt={4}>
      <ButtonPrime href="https://dribbble.com/nao_uru" bgColor="#e3487e" wide={{base:"full", md:"fit-content"}} target="_blank" color="#ffffff" icon={<AiOutlineDribbble size={24} />}>アカウントはこちら</ButtonPrime>
      </Box>
      </Box>

    </ChakraProvider>
    </>
  )
}
