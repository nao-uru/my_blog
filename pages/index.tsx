import { HeadSetting } from "../components/Templete/Head";
import { LayoutWide } from "../components/Templete/Layout";
import { ChakraProvider,Text, Box, Flex, Image, } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ButtonPrime } from "../components/Parts/ButtonPrimary";
import { WorksCard } from "../components/Cards/WorksCard";
import { getAllPosts, client } from "../libs/contentful";
import { BlogCard } from "../components/Cards/BlogCard";
import { Subtitle } from "../components/Parts/Subtitle";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";


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
    card="/public/img/FV.png"
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

      
     <LayoutWide>

      {/* トップ */}
      <Box css={sFull} backgroundImage={"/img/Top/FV.png"} backgroundSize={"cover"} >
      </Box>

      {/* メイン */}
      <Flex flexDir="column" gap={8} w={{base:"100%",md:"100%"}}  m="auto">
        
      {/* About */}
      <Flex direction={{base:"column",md:'row'}}  my={16} gap={4}>
      <Flex flexDir="column" gap={8}>
        <Subtitle size="16px" >About Me</Subtitle>
      <Text fontSize={{base:"20px",md:"32px"}} lineHeight="150%">ユーザー視点とビジネス視点をつなぐ<br/>プロダクトデザイナーです</Text>
      <Text size="md" lineHeight="7">
      アプリ制作会社・旅行系サービス・SaaS事業会社にて、
        プロダクトの0→1立ち上げから既存機能の改善まで幅広く担当。
        <br/>
        スマホアプリ・Webアプリで、Figmaによるデザインシステム構築やUI設計に携わってきました。
        <br/>
        ユーザー体験とチームの開発効率を両立する設計を大切にしています。
      </Text>
      <ButtonPrime href="/About" bgColor="#23BA78" target=""  wide="fit-content" color="#ffffff" icon={''}>About Me</ButtonPrime>
      </Flex>

      <Image src="/img/Top/top_about.png" w={{base:"100%",md:'50%'}} alt="Main Image" rounded={4} /> 
      </Flex>

      {/* What I Do */}
      <Flex py={{base:4,md:12}} flexDir="column" w={"100%"} gap={10}>
        <Box gap={4}>
        <Subtitle>What I Do</Subtitle>
        <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">得意なこと</Text>
        </Box>

        {/* Card */}
          <Flex py={{ base:4, md:8 }} px={{ base:6, md:10 }} gap={6} backgroundColor={"#ffffff"} rounded={4} flexDirection={{ base: "column", md: 'row' }}>
          <Image src="/img/Top/WID_1.png" w={"300px"} alt="Main Image" rounded={4} /> 
          <Flex flexDirection={"column"} >
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"}>
            <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">SaaSプロダクトの設計・改善</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="150%">業務特化型SaaSにて、複雑な要件を扱うUIの設計・改善に従事しています。
              初期設計から参加し、関係者との要件整理をし、業務フロー全体を見渡したUIに落とし込みました。</Text>
            </Flex>
            <Link href="/What" passHref>
            <Box css={sHover} p={5} border={"1px solid #CACACA"} rounded={4} w="fit-content" ml={"auto"}>
              <AiOutlineArrowRight size={40} color="#3A3A3A" />
            </Box>
            </Link>
          </Flex>
        </Flex>

        <Flex py={{ base:4, md:8 }} px={{ base:6, md:10 }} gap={6} backgroundColor={"#ffffff"} rounded={4} flexDirection={{ base: "column", md: 'row' }} >
          <Image src="/img/Top/WID_2.png" w={"300px"} alt="Main Image" rounded={4} /> 
          <Flex flexDirection={"column"} >
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"}>
            <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">新規プロダクトの0→1立ち上げ</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="150%">複数のスマホアプリ開発プロジェクトにて0→1の立ち上げフェーズから関与してきました。
              競合調査、体験設計、UIデザインまで一貫して担当し、開発チームとの連携も重視しています。</Text>
            </Flex>
            <Link href="/What" passHref>
            <Box css={sHover} p={5} border={"1px solid #CACACA"} rounded={4} w="fit-content" ml={"auto"}>
              <AiOutlineArrowRight size={40} color="#3A3A3A" />
            </Box>
            </Link>
          </Flex>
        </Flex>

        <Flex py={{ base:4, md:8 }} px={{ base:6, md:10 }} gap={6} backgroundColor={"#ffffff"} rounded={4} flexDirection={{ base: "column", md: 'row' }} >
          <Image src="/img/Top/WID_3.png" w={"300px"} alt="Main Image" rounded={4} /> 
          <Flex flexDirection={"column"} >
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"}>
            <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">デザインシステム構築</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="150%">様々なプロジェクトや案件で、Figmaを用いたデザインシステムの立ち上げを担当しました。
              複数人での効率的なデザイン制作や、エンジニアとの共通言語として機能するシステムを目指して構築を進めています。</Text>
            </Flex>
            <Link href="/What" passHref>
            <Box css={sHover} p={5} border={"1px solid #CACACA"} rounded={4} w="fit-content" ml={"auto"}>
              <AiOutlineArrowRight size={40} color="#3A3A3A" />
            </Box>
            </Link>
          </Flex>
        </Flex>

        <Flex py={{ base:4, md:8 }} px={{ base:6, md:10 }} gap={6} backgroundColor={"#3A3A3A"} rounded={4} flexDirection={{ base: "column", md: 'row' }}>
          <Image src="/img/Top/Portfolio.png" w={"300px"} alt="Main Image" rounded={4} /> 
          <Flex flexDirection={"column"} textColor={"#ffffff"} >
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"}>
            <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">制作実績</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="150%">実務の詳細は制作実績にてご確認いただけます。閲覧をご希望の方は、お手数ですがパスワードをお問い合わせください！</Text>
            </Flex>
            <Link href="/Work" passHref>
            <Box css={sHover} p={5} border={"1px solid #CACACA"} rounded={4} w="fit-content" ml={"auto"}>
              <Link href="/" passHref legacyBehavior>
              <AiOutlineArrowRight size={40} color="#ffffff" />
              </Link>
            </Box>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      {/* Work */}
      <Flex py={{base:4,md:12}} flexDir="column" w={{base:"94%",md:"100%"}} gap={6}>
        <Box gap={4}>
        <Subtitle>My Work</Subtitle>
        <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">自主制作</Text>
        </Box>

        {/* Card */}
      <Flex direction={{base:"column",md:'row'}} justifyContent="flex-start" alignItems='center' overflowX='scroll' gap={4} py={8} >
        <WorksCard link={'/Work'} title={"IDEAL ME"} text={"2023/10 個人制作"} img={'/img/Top/Work_3.png'} />
        <WorksCard link={'/Work'} title={"OOUI実践 Vol1"} text={"2023/12 個人制作"} img={'/img/Top/Work_2.png'} />
        <WorksCard link={'/Work'} title={"OOUI実践 Vol2"} text={"2024/02 個人制作"} img={'/img/Top/Work_1.png'} />
      </Flex>
      <ButtonPrime href="/Work" bgColor="#23BA78" target="" color="#ffffff" wide="fit-content" icon={''}>Detail</ButtonPrime>
    

      </Flex>

      {/* Article */}
      <Flex py={{base:4,md:12}} flexDir="column" w={{base:"94%",md:"100%"}} gap={10}>
        <Box gap={4}>
        <Subtitle>Article</Subtitle>
        <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">執筆記事</Text>
        </Box>
     <Flex direction={{base:"column",md:'row'}} justifyContent="flex-start" alignItems='center' gap={4} py={8} >
      {allPosts.map((BlogPost) => {
      const date = BlogPost.fields.date;
      const year = new Date(date).getFullYear();
      const smonth = new Date(date).getMonth();
      const month = smonth +1;
      const day = new Date(date).getDate();

      return  <BlogCard 
      key={BlogPost.sys.id} 
      title={BlogPost.fields.title}
      url={BlogPost.fields.media.fields.file.url}
      slug={BlogPost.fields.slug}
      date ={`${year}/${month}/${day}`}
      />
     }).slice(0,3)} 
     </Flex>


      <ButtonPrime href="/Blog" bgColor="#23BA78" target="" color="#ffffff" wide="fit-content" icon={''}>Detail</ButtonPrime>

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
height:720px;
`

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.7;
}
`