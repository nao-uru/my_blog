import { LayoutWide } from "../components/Templete/Layout";
import { HeadSetting } from "../components/Templete/Head";
import { ChakraProvider, Flex, Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { Pagetitle } from "../components/Parts/Pagetitle";
import { GetDribblePost } from "../libs/dribblepost";
import { ButtonPrime } from "../components/Parts/ButtonPrimary";
import { BlogCardSmall } from "../components/Cards/BlogCardSmall";
import { AiOutlineDribbble, AiOutlineExport } from "react-icons/ai";
import { DribbbleCard } from "../components/Cards/DribbbleCard";
import { Subtitle } from "../components/Parts/Subtitle";
import { LinkButton } from "../components/Parts/LinkButton";


export default function WorkPage() {

  const dribblePost = GetDribblePost();
  const items = dribblePost.items;
  console.log(items);

  return (
    <>
    <HeadSetting 
    title={'NAOs JOURNAL'}
    description={""}
    path={"/Work"}
    card={'/public/img/spain.jpeg'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />


    <ChakraProvider>

      <LayoutWide>
      <Pagetitle>Work</Pagetitle>

      <Flex py={{base:12, md:20}} flexDirection={"column"} gap={12}  >

      {/* IDEAL ME */}
      <Flex flexDirection={{ base: "column" , md: 'row' }} gap={8} >
        <Image src="/img/Top/Work_3.png" w={{ base: "full" , md: '400px' }} alt="Main Image" objectFit={"cover"} /> 
        {/* <iframe src="https://drive.google.com/file/d/192FfFPlX5wJIA3skCsDC3O2FGBgvc9LS/preview" width="auto" height="240px"></iframe> */}

        <Flex flexDirection={"column"}>
        <Flex flexDirection={"column"} gap={4} alignSelf="stretch" h={"100%"} >
          <Subtitle size="24">Ideal Me</Subtitle>
          <Text>オリジナルのアプリをデザインしました！要件定義〜デザインまですべて一人で制作しました。デザインのフローは下記の記事に記しました。また、figmaのファイルとPDFを公開しています。
            昨日に焦点を当てたセルフケアアプリです。シンプルな構造で男女ともに使いやすいアプリを目指しました。</Text>
        </Flex>

        <Flex gap={4} flexDirection={{ base: "column" , md: 'row' }} >
        <LinkButton href="https://www.figma.com/file/2r3Lm085yw0U6E9iVLi7Ta/IDEAL-ME?type=design&node-id=503%3A25036&mode=design&t=XTGedAxHjyVln4np-1" icon={<AiOutlineExport size={24} />} border="#151515" target="blank" >figmaファイルはこちら</LinkButton>
        <LinkButton href="https://www.naosjournal.com/IdealMe_concept" icon={<AiOutlineExport size={24} />} border="#151515" target="blank" >ブログ記事はこちら</LinkButton>
        </Flex>

        </Flex>

        {/* <Flex flexDirection={{ base: "column-reverse" , md: "column" }} >
        <BlogCardSmall
        title="IDEAL ME ~情報設計~" 
        url="//images.ctfassets.net/dd0roywjqx3t/7lpYRuWJB4NDx8mZmXqDWc/510391e083cdfab481e94186115bdec3/Thubmneil.png" 
        slug="https://www.naosjournal.com/IdealMe_concept" />
        <BlogCardSmall 
        title="IDEAL ME ~ビジュアル編~" 
        url="//images.ctfassets.net/dd0roywjqx3t/4WmBoTIWroXZv5bvPraDvQ/1ba265402aece2f00c78d43ddf846600/Thubmneil-1.png" 
        slug="https://www.naosjournal.com/IdealMe_design" />
        </Flex> */}


      </Flex>

       {/* OOUI1 */}

      <Flex flexDirection={{ base: "column" , md: 'row' }} gap={8} >
        <Image src="/img/Top/Work_2.png"  w={{ base: "full" , md: '400px' }} alt="Main Image" objectFit={"cover"} /> 
        {/* <iframe src="https://drive.google.com/file/d/19uRqJW35kGEZwuy_8I1NL70Wdf5fD2YJ/preview" width="100%" height="320px"></iframe> */}


        <Flex flexDirection={"column"}>
        <Flex flexDirection={"column"} gap={4} alignSelf="stretch" h={"100%"} >
          <Subtitle size="24">OOUI実践1 「営業支援アプリ」</Subtitle>
          <Text>「オブジェクト指向UIデザイン」の課題を拝借してデザインを作成しました。
            こちらは応用編レベル10の「営業支援アプリ」です。本にある課題はもちろん、自分でも設定を追加して、より便利なアプリを目指しました。目指せシリーズ化！</Text>
        </Flex>

        <Flex gap={4} flexDirection={{ base: "column" , md: 'row' }} >
        <LinkButton href="https://www.figma.com/file/6rmHOT3FTgVR0v28LkECqS/%E6%A5%AD%E5%8B%99%E3%82%A2%E3%83%97%E3%83%AA?type=design&node-id=1200-10081&mode=design&t=wZDQNGLmA3FTDtFR-11" icon={<AiOutlineExport size={24} />} border="#151515" >figmaファイルはこちら</LinkButton>
        <LinkButton href="https://drive.google.com/file/d/19uRqJW35kGEZwuy_8I1NL70Wdf5fD2YJ/preview" icon={<AiOutlineExport size={24} />} border="#151515" >ドキュメント資料はこちら</LinkButton>
        </Flex>

        {/* <Box>
        <BlogCardSmall
        title="OOUI実践してみた 「営業支援アプリ」" 
        url="//images.ctfassets.net/dd0roywjqx3t/7qFn9x5wjg1wVbjaYPBIeR/52ced1c2bd43889c6dae9d86fff69edf/Thubmneil.png" 
        slug="https://www.naosjournal.com/ooui_1" />
        </Box> */}

        </Flex>

      </Flex>

      {/* OOUI2 */}
      <Flex flexDirection={{ base: "column" , md: 'row' }} gap={8} >
        <Image src="/img/Top/Work_1.png"  w={{ base: "full" , md: '400px' }} alt="Main Image" objectFit={"cover"} /> 
        {/* <iframe src="https://drive.google.com/file/d/19uRqJW35kGEZwuy_8I1NL70Wdf5fD2YJ/preview" width="100%" height="320px"></iframe> */}


        <Flex flexDirection={"column"}>
        <Flex flexDirection={"column"} gap={4} alignSelf="stretch" h={"100%"} >
          <Subtitle size="24">OOUI実践1 「営業支援アプリ」</Subtitle>
          <Text>「オブジェクト指向UIデザイン」の課題を拝借してデザインを作成しました。
            こちらは応用編レベル10の「営業支援アプリ」です。本にある課題はもちろん、自分でも設定を追加して、より便利なアプリを目指しました。目指せシリーズ化！</Text>
        </Flex>

        <Flex gap={4} flexDirection={{ base: "column" , md: 'row' }} >
        <LinkButton href="https://www.figma.com/file/6rmHOT3FTgVR0v28LkECqS/%E6%A5%AD%E5%8B%99%E3%82%A2%E3%83%97%E3%83%AA?type=design&node-id=1790-27203&mode=design&t=VZwR4WJqpOZ6gXX6-11" icon={<AiOutlineExport size={24} />} border="#151515" >figmaファイルはこちら</LinkButton>
        <LinkButton href="https://drive.google.com/file/d/1BO9jD0ce-QKqRMERAnD98dOLW-VLjJIq/preview" icon={<AiOutlineExport size={24} />} border="#151515" >ドキュメント資料はこちら</LinkButton>
        </Flex>

        {/* <Box>
        <BlogCardSmall
        title="OOUI実践してみた 「イベント管理アプリ」" 
        url="//images.ctfassets.net/dd0roywjqx3t/6RMcxuThsQncawb17EkqUB/23d862cf0cbb221f51cb40b70a6d079b/Thubmneil_Blog.png" 
        slug="https://www.naosjournal.com/ooiu_2" />
        </Box> */}

        </Flex>

      </Flex>

      </Flex>

       {/* Dribble */}
      <Box>
      <Subtitle size={{base:"24px",md:"32px"}}>Dribble</Subtitle>
      <Text my={2}>デザイン学習を始めた時に作成していたものです。初期の制作物なので暖かい目で見ていただけると幸いです。</Text>
      <SimpleGrid columns={{base:1,md:4}} spacingY={{base:8,md:8}} spacingX={{base:6,md:6}} m='auto' w="100%" mt={8} >
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
      <LinkButton href="https://dribbble.com/nao_uru" icon={<AiOutlineDribbble size={24} />} border="#151515"  >アカウントはこちら</LinkButton>
      </Box>
      </Box>
        
      </LayoutWide>

      {/* <Box mt={4}  maxW={{base:"100%", md:"1000px"}}  m="auto" p={{base:4, md:6}} backgroundColor="#ffffff" rounded="2xl">
      <Text fontWeight='bold' fontSize={{base:"20px",md:"28px"}}>IDEAL ME</Text>
      <Text fontWeight='nomal' fontSize="md" mb={4} >オリジナルのアプリをデザインしました！要件定義〜デザインまですべて一人で制作しました。デザインのフローは下記の記事に記しました。また、figmaのファイルとPDFを公開しています。<br />
      昨日に焦点を当てたセルフケアアプリです。シンプルな構造で男女ともに使いやすいアプリを目指しました。
      </Text>

      <Flex direction={{base:"column", md:"row"}} justifyContent="space-between" alignItems="flex-start" mt={2} gap={{base:4, md:4}}>
      <Box w={{base:"full", md:"60%"}} mr={0}>
      <iframe src="https://drive.google.com/file/d/192FfFPlX5wJIA3skCsDC3O2FGBgvc9LS/preview" width="100%" height="320px"></iframe>
      <Flex direction={{base:'column', md:"row"}} my={{base:4, md:6}} gap={{base:3, md:0}}>
      <ButtonPrime href="https://www.figma.com/file/2r3Lm085yw0U6E9iVLi7Ta/IDEAL-ME?type=design&node-id=503%3A25036&mode=design&t=XTGedAxHjyVln4np-1"wide={{base:"full", md:"fit-content"}} bgColor="#25D088" target="_blank" color="#ffffff" icon={''}>figmaファイルはこちら</ButtonPrime>
      </Flex>
      </Box>
      <Box w={{base:"full", md:"40%"}}> 
        <Box>
        <BlogCardSmall
        title="IDEAL ME ~情報設計~" 
        url="//images.ctfassets.net/dd0roywjqx3t/7lpYRuWJB4NDx8mZmXqDWc/510391e083cdfab481e94186115bdec3/Thubmneil.png" 
        slug="https://www.naosjournal.com/IdealMe_concept" />
        <BlogCardSmall 
        title="IDEAL ME ~ビジュアル編~" 
        url="//images.ctfassets.net/dd0roywjqx3t/4WmBoTIWroXZv5bvPraDvQ/1ba265402aece2f00c78d43ddf846600/Thubmneil-1.png" 
        slug="https://www.naosjournal.com/IdealMe_design" />
        </Box>
      </Box>
      </Flex>
      </Box> */}


    </ChakraProvider>

    </>
  )
}