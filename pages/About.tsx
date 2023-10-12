import { Layout } from "../components/organisms/Layout"
import { HeadSetting } from "../components/organisms/Head";
import { BreadcrumbList } from "../components/atoms/Breadcrumb";
import Link from "next/link";
import { ChakraProvider, Box,Text, Flex, Image, Stack, Table, Tbody, Td, Tr } from "@chakra-ui/react";

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

    <Box >
    {/* 自己紹介 */}
    <Stack lineHeight="180%" w={{base:"100%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}
      borderTop="1px solid #373737" width="100%">
    <Text  fontWeight="bold" fontSize={{base:"24px",md:"32px"}} size="2xl" my={4} >Profile</Text>
    {/* <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto">自己紹介</Text> */}
    </Stack>

    <Flex direction={{base:"column",md:"row"}} alignItems="center" justifyContent="space-around">
     <Image src="/img/icon.png" w={36} h={36} mr={4} alt="Main Image" /> 
     <Table w={{base:"100%", md:"80%"}} mr="auto" mt={4}>
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
          <Td fontSize="md">デザイナー、コーダー</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">Hobby</Td>
          <Td fontSize="md">旅行、映画、漫画</Td>
          </Tr>
          <Tr>
          <Td fontSize="md" fontWeight="bold">E-Mail</Td>
          <Td fontSize="sm" _hover={{color:"#6BA791"}}>
            <Link href="mailto:nao.uru0419@gmail.com">nao.uru0419@gmail.com</Link>
            </Td>
          </Tr>

        </Tbody>
      </Table>
    </Flex>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}
      borderTop="1px solid #373737" width="100%">
    <Text as="h3" size="md" mt={4}>Career</Text>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto">
        法学部に在学中、就職に失敗し、ヨーロッパをバックパック。
        その後フリーターをしていました。
        海外でも通用する仕事をしたいと思っていたところでWEBの世界に興味を持ちました。
        約1年間、デザインやWEB制作の勉強したのち小さなデザイン会社に就職。<br />
        その後は勉強&フリーランスをの期間経て、2022年から正社員として旅行会社のWEB部署でデザイン業務、
        副業でアプリの制作会社に業務委託として在籍しています。<br />
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}
      borderTop="1px solid #373737" width="100%">
    <Text as="h3" size="md" mt={4}>Work</Text>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto">
    会社では主にアプリ・WEBデザインをしていて、副業はアプリデザインがメインです。<br />
        個人としてはデザインのお仕事はもちろん、Wordpressdの構築、小規模なWEBサイトのデザイン〜コーディングまでやらせていただいています！
        どっちつかずは良くないなと思いながらも両方楽しくて常に情報をキャッチアップしています！<br />
        このブログもデザインから自分で構築しました!（Next.js×contentful）<br />
    </Text>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}
      borderTop="1px solid #373737" width="100%">
    <Text as="h3" size="md" mt={4}>Goal</Text>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto">
      これからの目標は、趣味としてプログラミンやコーディングを勉強しつつ、デザインはプロとしてのクオリティを追求することです。<br />
       UI/UXを極めるために心理学や行動経済学も勉強したいなと思っています!<br />
       また、ブログやSNSでの発信も頑張っていきたいのでフォローしていただけると嬉しいです😊
    </Text>
    </Stack>


    </Box>
    </Layout>
    </ChakraProvider>
    </>
  )
}
