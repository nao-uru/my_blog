// import { Box, ChakraProvider, SimpleGrid, Text, Image, Flex } from "@chakra-ui/react";
// import { DribbbleCard } from "../Cards/DribbbleCard";
// import { GetDribblePost } from "../../libs/dribblepost";
// import { ButtonPrime } from "../Parts/ButtonPrimary";
// import { BlogCardSmall } from "../Cards/BlogCardSmall";
// import { AiOutlineDribbble } from "react-icons/ai";

// export const Work = () => {

//   const dribblePost = GetDribblePost();
//   const items = dribblePost.items;
//   console.log(items);

//   return(
//     <>
//     <ChakraProvider>

//       <Box  mt={{base:4, md:6}}>
//       <Text fontSize={{base:"40px",md:"64px"}} lineHeight="none">Works</Text>
//       </Box>

//       <Box mt={{base:2, md:12}}>

//       {/* IDEAL ME */}
//       <Box mt={4}  maxW={{base:"100%", md:"1000px"}}  m="auto" p={{base:4, md:6}} backgroundColor="#ffffff" rounded="2xl">
//       <Text fontWeight='bold' fontSize={{base:"20px",md:"28px"}}>IDEAL ME</Text>
//       <Text fontWeight='nomal' fontSize="md" mb={4} >オリジナルのアプリをデザインしました！要件定義〜デザインまですべて一人で制作しました。デザインのフローは下記の記事に記しました。また、figmaのファイルとPDFを公開しています。<br />
//       昨日に焦点を当てたセルフケアアプリです。シンプルな構造で男女ともに使いやすいアプリを目指しました。
//       </Text>

//       <Flex direction={{base:"column", md:"row"}} justifyContent="space-between" alignItems="flex-start" mt={2} gap={{base:4, md:4}}>
//       <Box w={{base:"full", md:"60%"}} mr={0}>
//       <iframe src="https://drive.google.com/file/d/192FfFPlX5wJIA3skCsDC3O2FGBgvc9LS/preview" width="100%" height="320px"></iframe>
//       <Flex direction={{base:'column', md:"row"}} my={{base:4, md:6}} gap={{base:3, md:0}}>
//       <ButtonPrime href="https://www.figma.com/file/2r3Lm085yw0U6E9iVLi7Ta/IDEAL-ME?type=design&node-id=503%3A25036&mode=design&t=XTGedAxHjyVln4np-1"wide={{base:"full", md:"fit-content"}} bgColor="#25D088" target="_blank" color="#ffffff" icon={''}>figmaファイルはこちら</ButtonPrime>
//       </Flex>
//       </Box>
//       <Box w={{base:"full", md:"40%"}}> 
//         <Box>
//         <BlogCardSmall
//         title="IDEAL ME ~情報設計~" 
//         url="//images.ctfassets.net/dd0roywjqx3t/7lpYRuWJB4NDx8mZmXqDWc/510391e083cdfab481e94186115bdec3/Thubmneil.png" 
//         slug="https://www.naosjournal.com/IdealMe_concept" />
//         <BlogCardSmall 
//         title="IDEAL ME ~ビジュアル編~" 
//         url="//images.ctfassets.net/dd0roywjqx3t/4WmBoTIWroXZv5bvPraDvQ/1ba265402aece2f00c78d43ddf846600/Thubmneil-1.png" 
//         slug="https://www.naosjournal.com/IdealMe_design" />
//         </Box>
//       </Box>
//       </Flex>
//       </Box>

//        {/* OOUI1 */}
//       <Box  maxW={{base:"100%", md:"1000px"}} m="auto" p={6} backgroundColor="#ffffff" rounded="2xl" mt={{base:4, md:12}}>
//       <Text fontWeight='bold' fontSize={{base:"20px",md:"28px"}}>OOUI実践1 「営業支援アプリ」</Text>
//       <Text fontWeight='nomal' fontSize="md" mb={4} >「オブジェクト指向UIデザイン」の課題を拝借してデザインを作成しました。<br />
//       こちらは応用編レベル10の「営業支援アプリ」です。本にある課題はもちろん、自分でも設定を追加して、より便利なアプリを目指しました。目指せシリーズ化！</Text>
//       <Flex direction={{base:"column", md:"row"}} justifyContent="space-between" alignItems="flex-start" mt={2} gap={{base:4, md:4}}>
//       <Box w={{base:"full", md:"60%"}} mr={0}>
//       <iframe src="https://drive.google.com/file/d/19uRqJW35kGEZwuy_8I1NL70Wdf5fD2YJ/preview" width="100%" height="320px"></iframe>
//       {/* <Image src={"/img/ideallMe.png"} rounded="xl" alt="Work thubmnail" w="400px"  fit='cover' /> */}
//       <Flex direction={{base:'column', md:"row"}} my={{base:4, md:6}} gap={{base:3, md:0}}>
//         <ButtonPrime href="https://www.figma.com/file/6rmHOT3FTgVR0v28LkECqS/%E6%A5%AD%E5%8B%99%E3%82%A2%E3%83%97%E3%83%AA?type=design&node-id=1200-10081&mode=design&t=wZDQNGLmA3FTDtFR-11"wide={{base:"full", md:"fit-content"}} bgColor="#25D088" target="_blank" color="#ffffff" icon={''}>figmaファイルはこちら</ButtonPrime>
//       </Flex>
//       </Box>
//       <Box w={{base:"full", md:"40%"}}> 
//         <Box>
//         <BlogCardSmall
//         title="OOUI実践してみた 「営業支援アプリ」" 
//         url="//images.ctfassets.net/dd0roywjqx3t/7qFn9x5wjg1wVbjaYPBIeR/52ced1c2bd43889c6dae9d86fff69edf/Thubmneil.png" 
//         slug="https://www.naosjournal.com/ooui_1" />
//         </Box>
//       </Box>
//       </Flex>
//       </Box>

//       {/* OOUI2 */}
//       <Box maxW={{base:"100%", md:"1000px"}} m="auto" p={6} backgroundColor="#ffffff" rounded="2xl" mt={{base:4, md:12}}>
//       <Text fontWeight='bold' fontSize={{base:"20px",md:"28px"}}>OOUI実践2 「イベント管理アプリ」</Text>
//       <Text fontWeight='nomal' fontSize="md" mb={4} >「オブジェクト指向UIデザイン」の応用編の課題を拝借してデザインを作成しました。<br />
//       第2弾となるこちらは応用編レベル11の「イベント管理アプリ」です。</Text>
//       <Flex direction={{base:"column", md:"row"}} justifyContent="space-between" alignItems="flex-start" mt={2} gap={{base:4, md:4}}>
//       <Box w={{base:"full", md:"60%"}} mr={0}>
//       <iframe src="https://drive.google.com/file/d/1BO9jD0ce-QKqRMERAnD98dOLW-VLjJIq/preview" width="100%" height="320px"></iframe>

//       <Flex direction={{base:'column', md:"row"}} my={{base:4, md:6}} gap={{base:3, md:0}}>
//         <ButtonPrime href="https://www.figma.com/file/6rmHOT3FTgVR0v28LkECqS/%E6%A5%AD%E5%8B%99%E3%82%A2%E3%83%97%E3%83%AA?type=design&node-id=1790-27203&mode=design&t=VZwR4WJqpOZ6gXX6-11" wide={{base:"full", md:"fit-content"}} bgColor="#25D088" target="_blank" color="#ffffff" icon={''}>figmaファイルはこちら</ButtonPrime>
//       </Flex>
//       </Box>
//       <Box w={{base:"full", md:"40%"}}> 
//         <Box>
//         <BlogCardSmall
//         title="OOUI実践してみた 「イベント管理アプリ」" 
//         url="//images.ctfassets.net/dd0roywjqx3t/6RMcxuThsQncawb17EkqUB/23d862cf0cbb221f51cb40b70a6d079b/Thubmneil_Blog.png" 
//         slug="https://www.naosjournal.com/ooiu_2" />
//         </Box>
//       </Box>
//       </Flex>
//       </Box>

//       {/* 制作実績 */}
//       <Box maxW={{base:"100%", md:"1000px"}} m="auto" p={6} backgroundColor="#ffffff" rounded="2xl" mt={{base:4, md:12}}>
//       <Text fontWeight='bold' fontSize={{base:"24px",md:"32px"}}>制作実績</Text>
//       <Text fontWeight='nomal' fontSize="md" mb={4} >業務で担当した実績は非公開となっております。ご興味をお持ちの方はお問い合わせください！<br />採用担当者様には別途お送りしております。</Text>

//       <Image src={"/img/portfolio.png"} rounded="xl" alt="Work thubmnail" w="400px"  fit='cover' mt={2} />
//       <Flex direction={{base:'column', md:"row"}} my={{base:4, md:6}} gap={{base:2, md:0}}>
//        <ButtonPrime href="mailto:nao.uru0419@gmail.com" bgColor="#25D088"  wide={{base:"full", md:"fit-content"}} target="_blank" color="#ffffff" icon={''}>お問い合わせ</ButtonPrime>
//       </Flex>
//       </Box>
     

//       </Box>
//        {/* Dribble */}
//       <Box>
//       <Box mt={16}>
//       <Text fontSize={{base:"24px",md:"32px"}} lineHeight="none">Dribble</Text>
//       <Text mt={2}>デザイン学習を始めた時に作成していたものです。初期の制作物なので暖かい目で見ていただけると幸いです。</Text>
//       </Box>
//       <SimpleGrid columns={{base:1,md:3}} spacingY={{base:8,md:'40px'}} m='auto' w="100%" mt={8} >
//         {items.map((item:any) => {

//         return <DribbbleCard
//         key={item}
//         title={item.title}
//         img={item.images.hidpi}
//         url={item.html_url}
//         />

//       })}
      
//       </SimpleGrid>
//       <Box mt={4}>
//       <ButtonPrime href="https://dribbble.com/nao_uru" bgColor="#e3487e" wide={{base:"full", md:"fit-content"}} target="_blank" color="#ffffff" icon={<AiOutlineDribbble size={24} />}>アカウントはこちら</ButtonPrime>
//       </Box>
//       </Box>

//     </ChakraProvider>
//     </>
//   )
// }
