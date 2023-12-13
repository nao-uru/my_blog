import { HeadSetting } from "../components/Templete/Head";
import { LayoutWide } from "../components/Templete/LayoutWide";

import { ChakraProvider,Text, Box, Flex, Image, } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ButtonPrime } from "../components/Parts/ButtonPrimary";
import { WorksCard } from "../components/Cards/WorksCard";
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
      <Box  overflow="hidden" position="relative" width="90%" m='auto' minH="70vh" maxH='80vh' >
      <Image src={`/img/Top/Main_Image.png`} borderRadius={4} objectFit="cover" w="full" h="800px" alt="Main Image" />
      <Text position="absolute" right={{base:"-2",md:"24"}} top={{base:"75%",md:"400"}} fontSize={{base:"68px",md:"120px"}} zIndex={10} lineHeight={{base:"60px",md:'120px'}} >NAO<br />OSAWA</Text>
      <Image src={'/svg/main.svg'} position="absolute" right={{base:"-20%",md:"-12%"}} top={{base:"30%",md:"6%"}} w={{base:'600px',md:'1000px'}} h={{base:"500px",md:'800px'}} opacity="0.6" alt="Main Image"  />
      </Box>
      </Box>

      {/* メイン */}
      <Flex flexDir="column" gap={8} w={{base:"100%",md:"60%"}}  m="auto" mb={40}>
        
      <Flex flexDir="column" gap={2} px={4}>
      <Text fontSize={{base:"40px",md:"64px"}} mt={{base:8,md:16}} lineHeight="none">About</Text>
      <Text size="md" lineHeight="7" mt={{base:0,md:2}} >
      ご訪問いただきありがとうございます！
      NAO OSAWAのポートフォリオサイト兼ブログです。
      今までの経歴やスキル、考え方などはこちらのページからご覧いただけます。
      </Text>
      <ButtonPrime href="/About" bgColor="#25D088" target=""  wide="fit-content" color="#ffffff" icon={''}>Read More</ButtonPrime>
      </Flex>

      <Box css={sFull} backgroundColor="#ffffff">
      <Box maxW={{base:"92%", md:"1200px"}} m="auto">
      <Flex py={{base:4,md:12}} flexDir="column" w={{base:"94%",md:"60%"}} gap={0} m="auto">
      <Text fontSize={{base:"40px",md:"64px"}} lineHeight="none">Work</Text>
      <Text size="md" lineHeight="7" mt={{base:0,md:2}} >
      個人での制作はこのページにまとめています。<br />
      法人として作成した実績は非公開です。ご興味をお持ちの方はお問い合わせください！
      </Text>
      <Flex direction={{base:"column",md:'row'}} justifyContent="flex-start" alignItems='center' overflowX='scroll' gap={4} py={8} >
        <WorksCard link={'/Work'} title={"IDEAL ME"} text={"2023/10 個人制作"} img={'/img/ideallMe.png'} />
        <WorksCard link={'/Work'} title={"OOUI実践「営業支援アプリ」"} text={"2023/12 個人制作"} img={'/img/ooui_1.png'} />
        <WorksCard link={'/Work'} title={"Portfolio"} text={"2022/9~ 制作実績"} img={'/img/portfolio.png'} />
      </Flex>
      <ButtonPrime href="/Work" bgColor="#25D088" target="" color="#ffffff" wide="fit-content" icon={''}>Read More</ButtonPrime>
      </Flex>
      </Box>
      </Box>

      <Flex flexDir="column" gap={2} px={4}>
      <Text fontSize={{base:"40px",md:"64px"}} mt={{base:8,md:24}} lineHeight="none">Blog</Text>
      <Text size="md" lineHeight="7" mt={{base:0,md:2}}  >
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



      <ButtonPrime href="/Blog" bgColor="#25D088" target="" color="#ffffff"  wide="fit-content" icon={''}>Read More</ButtonPrime>
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

