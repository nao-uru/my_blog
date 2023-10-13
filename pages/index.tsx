import { HeadSetting } from "../components/Templete/Head";
import { LayoutWide } from "../components/Templete/LayoutWide";

import { ChakraProvider,Text, Box, Flex, Image, } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ButtonPrime } from "../components/Parts/ButtonPrimary";
import { WorkCard } from "../components/Cards/WorksCard";
import { getAllPosts, client } from "../libs/contentful";
import { BlogCardSmall } from "../components/Cards/BlogCardSmall";


// データ取得（記事一覧と記事個別の内容）
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
  })

  const posts = await getAllPosts();

  return {
    props:{allPosts: posts}
  }
}


export default function Home({allPosts }) {

  return (
    <>
    <ChakraProvider>
    <HeadSetting 
    title={'Home'}
    description={"ホーム"}
    path="/"
    card="/img/portfolio.png"
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

      
     <LayoutWide>

      {/* トップ */}
      <Box css={sFull}>
      <Box  overflow="hidden" position="relative" width="90%" m='auto'>
      <Image src={`/img/Top/img_1.png`} borderRadius={4} alt="Main Image" w="full" maxH='80vh' minH="70vh"  />
      <Text position="absolute" right={{base:"-2",md:"24"}} top={{base:"75%",md:"400"}} fontSize={{base:"68px",md:"120px"}} fontWeight="nomal" zIndex={10} lineHeight={{base:"60px",md:'120px'}} >OSAWA<br />NAO</Text>
      <Image src={'/svg/main.svg'} position="absolute" right={{base:"-20%",md:"-12%"}} top={{base:"25%",md:"6%"}} w={{base:'600px',md:'1000px'}} h={{base:"500px",md:'800px'}} opacity="0.6" alt="Main Image"  />
      </Box>
      </Box>

      {/* メイン */}
      <Flex flexDir="column" gap={8} w={{base:"100%",md:"60%"}}  m="auto" mb={40}>
        
      <Flex flexDir="column" gap={2} px={4}>
      <Text fontSize={{base:"40px",md:"64px"}} mt={{base:16,md:24}} lineHeight="none">About</Text>
      <Text size="md" lineHeight="7" mt={2} >
      ご訪問いただきありがとうございます！
      </Text>
      <ButtonPrime href="/About" bgColor="#25D088" target=""  wide="fit-content" color="#ffffff" icon={''}>READ MORE</ButtonPrime>
      </Flex>

      <Box css={sFull} backgroundColor="#ffffff">
      <Box maxW={{base:"92%", md:"1200px"}} m="auto" mt={''}>
      <Flex py={{base:4,md:12}} flexDir="column" w={{base:"100%",md:"60%"}} gap={4} m="auto">
      <Text fontSize={{base:"40px",md:"64px"}} lineHeight="none">Works</Text>
      <Text size="md" lineHeight="7" mt={2} >
      オリジナルのアプリをデザインしました！figmaファイルも公開しています！<br />
      制作実績は非公開となっておりますので、ご興味をお持ちの方はお問い合わせください！
      </Text>
      <Flex direction={{base:"column",md:'row'}} justifyContent="flex-start" alignItems='center' gap={8}>
        <WorkCard link={'/Work'} title={"IDEAL ME"} text={"2023/10 自主制作"} img={'/img/ideallMe.png'} />
        <WorkCard link={'/Work'} title={"Portfolio"} text={"2022/9~ 制作実績"} img={'/img/portfolio.png'} />
      </Flex>
      <ButtonPrime href="/Work" bgColor="#25D088" target="" color="#ffffff" wide="fit-content" icon={''}>READ MORE</ButtonPrime>
      </Flex>
      </Box>
      </Box>

      <Flex flexDir="column" gap={2} px={4}>
      <Text fontSize={{base:"40px",md:"64px"}} mt={{base:8,md:24}} lineHeight="none">Blog</Text>
      <Text size="md" lineHeight="7" mt={2} >
      デザインに関するアウトプットを発信しています。<br />
      現在は読んだ本や美術館の感想がメインになってしまっていますが、マテリアルデザインやHIGコンポーネントの深掘りをしてみたいと思っています！
      </Text>

    <Box w={{base:'100%',md:"70%"}} >
    <Box mt={2}>
      {allPosts.map((shinglePost) => {
      return <BlogCardSmall
      key={shinglePost.sys.id} 
      title={shinglePost.fields.title}
      url={shinglePost.fields.media.fields.file.url}
      slug={shinglePost.fields.slug}
      />
    }).slice(0,3)} 
    </Box>
    </Box>



      <ButtonPrime href="/Blog" bgColor="#25D088" target="" color="#ffffff"  wide="fit-content" icon={''}>READ MORE</ButtonPrime>
      </Flex>

      </Flex>

     </LayoutWide>


    </ChakraProvider>
    </>
  )
}


const sFull = css`
margin-right: calc(50% - 50vw);
margin-left: calc(50% - 50vw);
`

