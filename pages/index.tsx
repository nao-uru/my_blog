import { HeadSetting } from "../components/organisms/Head";
import { LayoutWide } from "../components/organisms/LayoutWide";

import { ChakraProvider,Text, Box, Flex, Image, } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ButtonPrime } from "../components/atoms/button/ButtonPrime";
import { WorkCard } from "../components/molecules/WorksCard";
import { getAllPosts, client } from "../libs/contentful";
import { LatestCard } from "../components/molecules/LatestCard";


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
    card="/img/spain.jpeg"
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

     <LayoutWide>
      

      <Box>
      <Image src={'/img/sample.png'} borderRadius={4} alt="Main Image" w="full" maxH='80vh' />
      <Text position="absolute" right={{base:"-2",md:"24"}} top={{base:"11%",md:"400"}} fontSize={{base:"68px",md:"120px"}} fontWeight="nomal" zIndex={100}>OSAWA<br />NAO</Text>
      <Image src={'/svg/main.svg'} position="absolute" right={{base:"-16",md:"-16"}} top={{base:"4%",md:"6%"}} w={{base:'440px',md:'900px'}} h={{base:"20%",md:'800px'}} opacity="0.6" alt="Main Image" />
      <Box   />
      </Box>

      <Flex flexDir="column" gap={8} w={{base:"100%",md:"60%"}}  m="auto" mb={40}>
        
      <Flex flexDir="column" gap={2} px={4}>
      <Text fontSize={{base:"40px",md:"64px"}} mt={{base:16,md:24}} lineHeight="none">About</Text>
      <Text size="md" lineHeight="7" mt={2} >
      サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
      </Text>
      <ButtonPrime href="/About" bgColor="#25D088" target="" color="#ffffff" icon={''}>READ MORE</ButtonPrime>
      </Flex>

      <Box css={sFull} backgroundColor="#ffffff">
      <Flex p={{base:4,md:4}} flexDir="column" w={{base:"92%",md:"50%"}} gap={4} m="auto">
      <Text fontSize={{base:"40px",md:"64px"}} lineHeight="none">Works</Text>
      <Text size="md" lineHeight="7" mt={2} >
      サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
      </Text>
      <Flex direction={{base:"column",md:'row'}} justifyContent="flex-start" alignItems='center' gap={8}>
        <WorkCard link={'/'} title={"IDEAL ME"} text={"2023/10 自主制作"} img={'/img/ideallMe.png'} />
        <WorkCard link={'/'} title={"IDEAL ME"} text={"2022/9~ 制作実績"} img={'/img/portfolio.png'} />
      </Flex>
      <ButtonPrime href="/Work" bgColor="#25D088" target="" color="#ffffff" icon={''}>READ MORE</ButtonPrime>
      </Flex>
      </Box>

      <Flex flexDir="column" gap={2} px={4}>
      <Text fontSize={{base:"40px",md:"64px"}} mt={{base:8,md:24}} lineHeight="none">Blog</Text>
      <Text size="md" lineHeight="7" mt={2} >
      サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
      </Text>

    <Box m='auto' mt={{base:0,lg:0}} w={{base:'100%',md:"35%"}} >
    <Box mt={0}>
      {allPosts.map((shinglePost) => {
      return <LatestCard
      key={shinglePost.sys.id} 
      title={shinglePost.fields.title}
      url={shinglePost.fields.media.fields.file.url}
      slug={shinglePost.fields.slug}
      />
    }).slice(0,3)} 
    </Box>
    </Box>



      <ButtonPrime href="/Blog" bgColor="#25D088" target="" color="#ffffff" icon={''}>READ MORE</ButtonPrime>
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

