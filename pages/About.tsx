import { HeadSetting } from "../components/Templete/Head";
import Link from "next/link";
import { ChakraProvider, Box,Text, Flex, Image, Stack, Table, Tbody, Td, Tr, Grid } from "@chakra-ui/react";
import { SkillCard } from "../components/Cards/SkillCard";
import { Pagetitle } from "../components/Parts/Pagetitle";
import { Layout } from "../components/Templete/Layout";
import { Subtitle } from "../components/Parts/Subtitle";
import { css } from "@emotion/react";
import { RowCard } from "../components/Cards/RowCard";


export default function About() {

  return (
    <>

     <HeadSetting
      title="About Me"
      description="私について"
      path="/About"
      ogImage="https://www.naosjournal.com/img/Top/Portfolio.png"
      />

    <Layout>
    <Pagetitle>About Me</Pagetitle>

    <Box my={16} px={{base:0, md:32}}>
    <Flex direction={{base:"column",md:"row"}} alignItems="center" justifyContent="space-around">
     <Image src="/img/About/icon.png" w={36} h={36} mr={{base:0,md:12}} alt="Main Image" /> 
     <Table w={{base:"100%", md:"60%"}} mr="auto" mt={4}>
        <Tbody>
          <Tr>
          <Td fontSize="md" fontWeight="bold" p={0} >Name</Td>
          <Td fontSize="md">NAO OSAWA</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold" p={0} >Age</Td>
          <Td fontSize="md">29</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold" p={0} >E-Mail</Td>
          <Td fontSize="sm" _hover={{color:"#1B756C"}}>
            <Link href="mailto:nao.uru0419@gmail.com">nao.uru0419@gmail.com</Link>
            </Td>
          </Tr>

        </Tbody>
      </Table>
    </Flex>

    <Flex flexDirection={"column"} gap={{base:8,md:12}} mt={{base:8,md:12}} >

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}} width="100%">
    <Subtitle size="24px">About Me</Subtitle>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto" fontSize={{base:"14px", md:"16px"}} >
      効率を大切にし、思考することが好きなデザイナーです。チーム内では立場にとらわれず意見を出し合える環境を重視しています。仕事でも日常でも「どうしたらもっと良くなるか」を考え行動することを心がけています。 
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}} width="100%">
    <Subtitle size="24px">Career</Subtitle>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto" fontSize={{base:"14px", md:"16px"}} >
      大学卒業後にバックパッカー・フリーターを経てWeb業界へ。制作会社、旅行会社、受託企業、スタートアップで経験を積み、現在はESG領域のSaaSプロダクトを担当。プロダクト視点とユーザー視点を行き来しながら、設計と改善を続けています。
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}} width="100%">
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

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}} mb={24}  width="100%">
    <Subtitle size="24px">Vision</Subtitle>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto" fontSize={{base:"14px", md:"16px"}} >
      手を動かしながらチームを導けるプロダクトデザイナーを目指しています。マネジメントも進行管理にとどまらず、デザイン力を活かした貢献を理想とし、心理学や行動経済学を学びながらユーザー理解を深めています。
    </Text>
    </Stack>

    <RowCard
        title={"プライベートも含めたいろいろ"}
        text={"個人での活動やSNSのリンクなどをまとめています。ご興味のある方はご覧ください★"}
        img={"/img/About/Slide_1.png"}
        link={"https://bento.me/naosawa"}
        bgColor={"linear-gradient(87.37deg, #1b756c, #279c90 66.83%, #68a8a2)"}
        textColor={"#ffffff"}
         />



    </Flex>


    </Box>
    </Layout>
    </>
  )
}

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.7;
}
`