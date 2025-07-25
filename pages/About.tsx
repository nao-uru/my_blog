import { HeadSetting } from "../components/Templete/Head";
import Link from "next/link";
import { ChakraProvider, Box,Text, Flex, Image, Stack, Table, Tbody, Td, Tr, Grid } from "@chakra-ui/react";
import { SkillCard } from "../components/Cards/SkillCard";
import { Pagetitle } from "../components/Parts/Pagetitle";
import { LayoutWide } from "../components/Templete/Layout";
import { Subtitle } from "../components/Parts/Subtitle";
import { css } from "@emotion/react";


export default function AboutPage() {

  return (
    <>
    <ChakraProvider>
    <HeadSetting 
    title={'About'}
    description={""}
    path={"/About"}
    card={'/img/portfolio.png'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />
    <LayoutWide>
    <Pagetitle>About</Pagetitle>

    <Box my={16} px={32}>
    <Flex direction={{base:"column",md:"row"}} alignItems="center" justifyContent="space-around">
     <Image src="/img/icon.png" w={36} h={36} mr={4} alt="Main Image" /> 
     <Table w={{base:"100%", md:"60%"}} mr="auto" mt={4}>
        <Tbody>
          <Tr>
          <Td fontSize="md" fontWeight="bold">Name</Td>
          <Td fontSize="md">NAO OSAWA</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">Age</Td>
          <Td fontSize="md">28</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">E-Mail</Td>
          <Td fontSize="sm" _hover={{color:"#23BA78"}}>
            <Link href="mailto:nao.uru0419@gmail.com">nao.uru0419@gmail.com</Link>
            </Td>
          </Tr>

        </Tbody>
      </Table>
    </Flex>

    <Flex flexDirection={"column"} gap={8}>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}} width="100%">
    <Subtitle size="24px">Work</Subtitle>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto" fontSize={{base:"14px", md:"16px"}} >
      SaaSプロダクト:複雑な要件のUI設計や改善業務に強み<br/>
      スマホアプリ:0→1の立ち上げ、ユーザー体験設計<br/>
      デザインシステム:Figmaでの構築と運用、開発との連携を意識<br/>
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}} width="100%">
    <Subtitle size="24px">Career</Subtitle>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto" fontSize={{base:"14px", md:"16px"}} >
      大学卒業後にバックパッカー・フリーターを経てWeb業界へ。制作会社、旅行会社、受託企業、スタートアップで経験を積み、現在はESG領域のSaaSプロダクトを担当。プロダクト視点とユーザー視点を行き来しながら、設計と改善を続けています。
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}} width="100%">
    <Subtitle size="24px">Skill</Subtitle>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto" fontSize={{base:"14px", md:"16px"}} >
      Design:Figmaを使用したデザインシステム構築・運用、Sketch、Photoshop<br/>
      Code:HTML/CSS/JavaScript、React、Next.js<br/>
      Tools:Notion、Backlog、GitHub<br/>
      Soft Skills:フルリモート環境・ドキュメント化<br/>

    <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} rowGap={3} columnGap={3} my={8}>
    <SkillCard src='/img/Skills/figma.png'  text="コンポーネントやバリアブルの設計などデザインシステムの構築・運用を行っています。" />
    <SkillCard src='/img/Skills/sketch.png' text="figmaを使う前に使用していたツールです。最近は使っていません。" />
    <SkillCard src='/img/Skills/photoshop.png' text="仕事ではほとんど使わないため、練習やスキルアップのために学習中です。" />
    <SkillCard src='/img/Skills/html.png'  text="特異に複雑でない限り問題なくコーディングができます。LPやHPのコーディング経験があります。" />
    <SkillCard src='/img/Skills/js.png'  text="複雑なコードを書くことは難しいですが、たいていの動きは調べながら作成できます。" />
    <SkillCard src='/img/Skills/react.png'  text="実務経験はありません。このサイトはReat(Next.js)で構築しました。" />
    </Grid>
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}} width="100%">
    <Subtitle size="24px">Vision</Subtitle>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto" fontSize={{base:"14px", md:"16px"}} >
      手を動かしながらチームを導けるプロダクトデザイナーを目指しています。マネジメントも進行管理にとどまらず、デザイン力を活かした貢献を理想とし、心理学や行動経済学を学びながらユーザー理解を深めています。
    </Text>
    </Stack>

    <Flex py={8} px={10} gap={6} backgroundColor={"#3A3A3A"} rounded={4}>
          <Image src="/img/Fly.png" w={"300px"} alt="Main Image" rounded={4} /> 
          <Flex flexDirection={"column"} textColor={"#ffffff"} >
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"}>
            <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">その他の個人活動</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="150%">個人での活動やSNSのリンクなどをまとめています。ご興味のある方はご覧ください★</Text>
            </Flex>
            <Link href="https://bento.me/naosawa" passHref target="brank">
            <Box css={sHover} p={4} border={"1px solid #CACACA"} rounded={4} w="fit-content" ml={"auto"}>
              Bento Linkはこちら
            </Box>
            </Link>
          </Flex>
        </Flex>



    </Flex>


    </Box>
    </LayoutWide>
    </ChakraProvider>
    </>
  )
}

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.7;
}
`