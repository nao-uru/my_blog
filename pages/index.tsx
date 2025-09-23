import { HeadSetting } from "../components/Templete/Head";
import { Layout } from "../components/Templete/Layout";
import { ChakraProvider,Text, Box, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ButtonPrime } from "../components/Parts/ButtonPrimary";
import { getAllPosts, client } from "../libs/contentful";
import { Card } from "../components/Cards/Card";
import { Subtitle } from "../components/Parts/Subtitle";
import RotatingImage from "../components/Parts/RotatingImage";
import AnimatedRibbon from "../components/Parts/AnimatedRibbon";
import { RowCard } from "../components/Cards/RowCard";


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


export default function Home({ allPosts }) {

  return (
    <>
    <ChakraProvider>

     <HeadSetting
      title="NAO's Home"
      description="ホーム"
      path="/index"
      ogImage="https://www.naosjournal.com/img/Top/Portfolio.png"
      />

      
     <Layout bg={"linear-gradient(207.28deg, #bdd2c9, #d6ded4 62.5%, #f3f3f3)"}>
      
      {/* トップ */}
      <Box css={sFull} h={{ base: "400px", md: "800px"}} backgroundSize={"cover"} >
        <AnimatedRibbon />
      </Box>

      {/* メイン */}
      <Flex flexDir="column" gap={8} w={{base:"100%",md:"100%"}}  m="auto">
        
      {/* Profile */}
      <Flex direction={{base:"column",md:'row'}}  my={16} gap={4}>
      <Flex flexDir="column" gap={8}>
        <Subtitle size="16px" >About Me</Subtitle>
      <Text fontSize={{base:"28px",md:"32px"}} lineHeight="150%">ユーザー視点とビジネス視点をつなぐ、
        <Box as="br" display={{ base: "none", md: "block" }} />
        プロダクトデザイナーです</Text>
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

      <RotatingImage
      images={[
    "/img/About/Slide_1.png",
    "/img/About/Slide_2.png",
    "/img/About/Slide_3.png",
    "/img/About/Slide_4.png",
  ]}
    minMs={3000}   // 3秒〜
    maxMs={4000}   // 4秒の間でランダム
    width="100%"
    height={320}
    rounded="2xl" />
      </Flex>

      {/* What I Do */}
      <Flex py={{base:4,md:12}} flexDir="column" w={"100%"} gap={10}>
        <Box gap={4}>
        <Subtitle>What I Do</Subtitle>
        <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">得意なこと</Text>
        </Box>

        {/* Card */}
        <RowCard
        title={"SaaSプロダクトの設計・改善"}
        text={"業務特化型SaaSにて、複雑な要件を扱うUIの設計・改善に従事しています。初期設計から参加し、関係者との要件整理をし、業務フロー全体を見渡したUIに落とし込みました。"}
        img={"/img/Top/WID_1.png"}
        link={"/What"}
        bgColor={"#ffffff50"}
         />

         <RowCard
        title={"新規プロダクトの0→1立ち上げ"}
        text={"複数のスマホアプリ開発プロジェクトにて0→1の立ち上げフェーズから関与してきました。競合調査、体験設計、UIデザインまで一貫して担当し、開発チームとの連携も重視しています。"}
        img={"/img/Top/WID_2.png"}
        link={"/What"}
        bgColor={"#ffffff50"}
         />

         <RowCard
        title={"デザインシステム構築"}
        text={"様々なプロジェクトや案件で、Figmaを用いたデザインシステムの立ち上げを担当しました。複数人での効率的なデザイン制作や、エンジニアとの共通言語として機能するシステムを目指して構築を進めています。"}
        img={"/img/Top/WID_3.png"}
        link={"/What"}
        bgColor={"#ffffff50"}
         />

         <RowCard
        title={"制作実績"}
        text={"実務の詳細は制作実績にてご確認いただけます。普段の仕事でどんなデザインをしているのか気になる方は、ぜひ制作実績ページをご覧ください！"}
        img={"/img/Top/Portfolio.png"}
        link={"/Portfolio"}
        bgColor={"linear-gradient(87.37deg, #91a59c, #3a5d4e)"}
        textColor={"#ffffff"}
         />

      </Flex>

      {/* Work */}
      <Flex py={{base:4,md:12}} flexDir="column" w={{base:"94%",md:"100%"}} gap={6}>
        <Box gap={4}>
        <Subtitle>My Work</Subtitle>
        <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">自主制作</Text>
        </Box>

      <Flex direction={{base:"column",md:'row'}} justifyContent="flex-start" alignItems='center' overflowX='scroll' gap={4} py={8} >
        <Card key={"/"} title={"IDEAL ME"} url={'//www.naosjournal.com/img/Top/Work_3.png'} slug={'/Work'} date ={"2023/10 個人制作"}></Card>
        <Card key={"/"} title={"OOUI実践 Vol1"} url={'//www.naosjournal.com/img/Top/Work_2.png'} slug={'/Work'} date ={"2023/12 個人制作"}></Card>
        <Card key={"/"} title={"OOUI実践 Vol2"} url={'//www.naosjournal.com/img/Top/Work_1.png'} slug={'/Work'} date ={"2024/02 個人制作"}></Card>


      </Flex>
      <ButtonPrime href="/Work" bgColor="#23BA78" target="" color="#ffffff" wide="fit-content" icon={''}>Read More</ButtonPrime>
    

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

      return  <Card 
      key={BlogPost.sys.id} 
      title={BlogPost.fields.title}
      url={BlogPost.fields.media.fields.file.url}
      slug={BlogPost.fields.slug}
      date ={`${year}/${month}/${day}`}
      />
     }).slice(0,3)} 
     </Flex>


      <ButtonPrime href="/Article" bgColor="#23BA78" target="" color="#ffffff" wide="fit-content" icon={''}>Read More</ButtonPrime>

      </Flex>

      </Flex>


     </Layout>


    </ChakraProvider>
    </>
  )
}


const sFull = css`
margin-right: calc(50% - 50vw);
margin-left: calc(50% - 50vw);
`

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.7;
}
`