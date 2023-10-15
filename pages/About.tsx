import { Layout } from "../components/Templete/Layout"
import { HeadSetting } from "../components/Templete/Head";
import { BreadcrumbList } from "../components/Parts/Breadcrumb";
import Link from "next/link";
import { ChakraProvider, Box,Text, Flex, Image, Stack, Table, Tbody, Td, Tr, Grid } from "@chakra-ui/react";
import { SkillCard } from "../components/Cards/SkillCard";

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
    <Layout>

    <BreadcrumbList
     tree1={'About'}
     tree1Link={'/About'}
     />

    <Box  mt={{base:4, md:6}}>
    <Text fontSize={{base:"40px",md:"64px"}} lineHeight="none">About</Text>
    </Box>

    <Box mt={4}>
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
          <Td fontSize="md">27</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">Work</Td>
          <Td fontSize="md">UI/UXデザイナー</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">Hobby</Td>
          <Td fontSize="md">旅行・映画鑑賞</Td>
          </Tr>
          <Tr>
          <Td fontSize="md" fontWeight="bold">E-Mail</Td>
          <Td fontSize="sm" _hover={{color:"#25D088"}}>
            <Link href="mailto:nao.uru0419@gmail.com">nao.uru0419@gmail.com</Link>
            </Td>
          </Tr>

        </Tbody>
      </Table>
    </Flex>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}} width="100%">
    <Text fontSize={24} fontWeight="bold" mt={6}>Career</Text>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto">
        法学部に在学中、就職に失敗し、ヨーロッパや東南アジアをバックパック。
        その後フリーターをしていました。
        海外でも通用する仕事をしたいと思っていたところでWEBの世界に興味を持ちました。
        約1年間、デザインやWEB制作の勉強したのち小さなデザイン会社にアシスタントとして業務しました。<br />
        その後は勉強&フリーランスをの期間経て、2022年から正社員として旅行会社のWEB部署でデザイン業務、
        副業でアプリの制作会社に業務委託として在籍しています。<br />
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}
      borderTop="1px solid #C6CEDA" width="100%">
    <Text fontSize={24} fontWeight="bold" mt={8}>Work</Text>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto">
        会社では主にアプリ・WEBデザインをしていて、副業はアプリデザインがメインです。<br />
        個人としてはデザインのお仕事はもちろん、Wordpressdの構築、小規模なWEBサイトのデザイン〜コーディングまでやっていました。
        近年はデザインのお仕事に注力していて、そのキャリアを歩みたいと考えていますがプログラミングも好きなので趣味で学習しています。
        このサイトもデザインから自分で構築しました!（Next.js×contentful）<br />
        プログラミングの経験を活かした仕様の設計や、エンジニアさんと連携して効率的な開発を進めることが得意です。
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}
      borderTop="1px solid #C6CEDA">
    <Text fontSize={24} fontWeight="bold" mt={8}>Skills</Text>
    <Text fontSize={20} mt={3}>Skill Sets</Text>
    <Text>
    基本的な使用ツールとスキルです。近年はデザインをメインで行なっているので実務でコードはほとんど書いていません。<br />
    これらに加えNotion・Backlogを用いたタスク管理、GitHubを使ったコード管理の等経験があります。<br />
    フルリモートの会社に属した経験もあるのでリモート下でも問題なくコミュニケーションをとることができます。
    </Text>
    <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} rowGap={3} columnGap={3}>
    <SkillCard src='/img/Skills/figma.png' title="figma" text="メインで使用しているツールです。オートレイアウトはもちろん、デザインシステムや管理の仕方も考えながら使用しています。" />
    <SkillCard src='/img/Skills/sketch.png' title="Sketch" text="figmaを使う前に使用していたツールです。最近は使っていません。" />
    <SkillCard src='/img/Skills/photoshop.png' title="Photoshop" text="仕事ではほとんど使わないため、練習やスキルアップのために学習中です。" />
    <SkillCard src='/img/Skills/html.png' title="HTML CSS" text="特異に複雑でない限り問題なくコーディングができます。LPやHPのコーディング経験があります。" />
    <SkillCard src='/img/Skills/js.png' title="JavaScript" text="複雑なコードを書くことは難しいですが、たいていの動きは調べながら作成できます。" />
    <SkillCard src='/img/Skills/react.png' title="React" text="実務経験はありません。完全に独学で勉強をしています。記事や動画を調べて四苦八苦しています。このサイトもReat(Next.js)で構築しました。" />
    </Grid>
    <Flex mt={6} direction={{base:"column",md:"row"}}>
    <Box w={{base:"100%",md:"50%"}}>
    <Text fontSize={20} mt={3}>Skill Maps</Text>
    <Text w={{base:"100%",md:"100%"}} mr="auto">
    アプリのUI/UXデザインが一番得意で好きです。また、コンポーネントの管理方法やデザインのシステム化に興味があり、日頃から情報をキャッチアップしています。
    最近参考にしているのは「デザイン庁 デザインシステム」と「iOS17(Apple Design Resources)」です。<br />
    アプリケーションのデザインには、状態変化や画面遷移などグラフィックやWEBデザインとは少し違う部分があります。そこに関してプログラミングの経験を活かし、エンジニアさんと協力して取り組むとこができます。<br />

    </Text>
    </Box>
    <Image p={4} className="image" src="/img/Skills/chart.png" w={{base:"100%",md:"50%"}} alt="Skill maps" />
    </Flex>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}
      borderTop="1px solid #C6CEDA" width="100%">
    <Text fontSize={24} fontWeight="bold" mt={8}>Goal</Text>
    <Text w={{base:"100%",md:"100%"}} mr="auto">
      将来的にはマネジメントや、ディレクションの業務に携わりたいと思っています。しかし、まだまだ手を動かしてデザインに携わりたいという気持ちが強いです。
      最近は新人さんを教えながらリーダーとしてデザイン制作に取り組んでいて、教えることが自分の成長にもつながっていると実感しています。<br />
      進行係としてのマネジメントではなく、しっかりとデザイナーとしての実績を積み、経験を活かしたマネージャーやリーダーがになることが理想です。
    </Text>
    </Stack>


    </Box>
    </Layout>
    </ChakraProvider>
    </>
  )
}
