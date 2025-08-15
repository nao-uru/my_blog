import { Layout } from "../components/Templete/Layout";
import { HeadSetting } from "../components/Templete/Head";
import { ChakraProvider, Flex, Image, Text, Box, Icon } from "@chakra-ui/react";
import { Pagetitle } from "../components/Parts/Pagetitle";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { css } from "@emotion/react";



export default function What() {
  return (
    <>
     <HeadSetting
      title="What I Do"
      description="得意なこと"
      path="/What"
      ogImage="https://www.naosjournal.com/img/Top/Portfolio.png"
      />


     <ChakraProvider>
    <Layout>
      <Pagetitle>What I Do</Pagetitle>

      <Flex my={{base:12, md:20}} flexDirection={"column"} gap={16}>

        {/* SaaSプロダクトの設計・改善 */}
        <Flex flexDirection={{ base: "column-reverse" , md: 'row' }} rounded={8} overflow={"hidden"} id="About_1">
          <Flex flexDirection={"column"} p={{ base: 6 , md: 12 }}  gap={{ base: 6 , md: 10 }} backgroundColor={"#ffffff"} flex={1} >
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"} gap={4}>
            <Text fontSize={{base:"18px",md:"32px"}} lineHeight="160%">SaaSプロダクトの設計・改善</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">業務特化型SaaSにて、複雑な要件を扱うUIの設計・改善に従事しています。
              初期設計から参加し、関係者との要件整理をし、業務フロー全体を見渡したUIに落とし込みました。</Text>
            </Flex>

            <Flex flexDirection={"column"} gap={5}>
            <Text color={"#23BA78"} fontSize={{base:"18px",md:"20px"}}>Project</Text>

            <Flex gap={6} flexDirection={"column"}>
            <Flex flexDirection={"column"} pb={5} borderBottom={"1px solid #C6CEDA"} gap={3}>
            <Text fontSize={{base:"18px",md:"20px"}} fontWeight={"bold"} lineHeight="150%">ESG情報開示支援クラウド</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">機能が多岐にわたる業務特化型SaaSにおいて、ユーザーのITリテラシーや利用頻度にばらつきがある中でも、誰にとっても“迷わず使える”UIを目指して構造・導線・情報設計を行いました。</Text>
            </Flex>

            <Flex flexDirection={"column"} pb={5} borderBottom={"1px solid #C6CEDA"} gap={3}>
            <Text fontSize={{base:"18px",md:"20px"}} fontWeight={"bold"} lineHeight="150%">非財務情報のKPI管理アプリケーション</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">経営・事業部門が利用するKPI集計ツールのUI改善を担当。多階層かつ多項目のデータを、非属人的に管理・把握できるよう、構造の整理と見せ方の最適化を行いました。</Text>
            </Flex>

            </Flex>
            </Flex>



          </Flex>
          <Image src="/img/WID/WID_1.png" w={{base:"full",md:"400px"}} alt="Main Image" h={{base:"280px",md:"auto"}} objectFit={"cover"} /> 
        </Flex>

        {/* 新規プロダクトの0→1立ち上げ */}
        <Flex flexDirection={{ base: "column-reverse" , md: 'row' }} rounded={8} overflow={"hidden"} id="About_2">
          <Flex flexDirection={"column"} p={{ base: 6 , md: 12 }} gap={{ base: 6 , md: 10 }} backgroundColor={"#ffffff"} flex={1}>
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"} gap={4}>
            <Text fontSize={{base:"18px",md:"32px"}} lineHeight="160%">新規プロダクトの0→1立ち上げ</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">複数のスマホアプリ開発プロジェクトにて0→1の立ち上げフェーズから関与してきました。
              競合調査、体験設計、UIデザインまで一貫して担当し、開発チームとの連携も重視しています。</Text>
            </Flex>

            <Flex flexDirection={"column"} gap={5}>
            <Text color={"#23BA78"} fontSize={{base:"18px",md:"20px"}}>Project</Text>

            <Flex gap={6} flexDirection={"column"}>
            <Flex flexDirection={"column"} pb={5} borderBottom={"1px solid #C6CEDA"} gap={3}>
            <Text fontSize={{base:"18px",md:"20px"}} fontWeight={"bold"} lineHeight="150%">エリア限定SNSアプリ</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">新規SNSアプリの立ち上げにおいて、要件定義からUI/UXを設計。位置情報・時間制限を活かした偶発的な交流体験をデザインしました。0→1フェーズ特有の要件整理や没入感のある世界観構築に携わりました。</Text>
            </Flex>

            <Flex flexDirection={"column"} pb={5} borderBottom={"1px solid #C6CEDA"} gap={3}>
            <Text fontSize={{base:"18px",md:"20px"}} fontWeight={"bold"} lineHeight="150%">都道府県記録アプリ</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">ユーザーの「訪問済み都道府県を記録したい」ニーズを満たす軽量アプリを企画段階から設計しました。
              マップUIやポップアップの構成・表現を提案し、「記録する楽しさ」を演出。デザイナー1人の体制で、画面設計〜UI制作・フィードバック対応・エンジニアとのやり取りまで一貫対応しました。</Text>
            </Flex>

            </Flex>
            </Flex>



          </Flex>
          <Image src="/img/WID/WID_2.png" w={{base:"",md:"400px"}} h={{base:"240px",md:"auto"}} alt="Main Image" objectFit={"cover"} /> 
        </Flex>

        {/* デザインシステム構築 */}
        <Flex flexDirection={{ base: "column-reverse" , md: 'row' }} rounded={8} overflow={"hidden"} id="About_3">
          <Flex flexDirection={"column"} p={{ base: 6 , md: 12 }}  gap={{ base: 6 , md: 10 }} backgroundColor={"#ffffff"} flex={1}>
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"} gap={4}>
            <Text fontSize={{base:"18px",md:"32px"}} lineHeight="160%">デザインシステム構築</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">様々なプロジェクトや案件で、Figmaを用いたデザインシステムの立ち上げを担当しました。複数人での効率的なデザイン制作や、エンジニアとの共通言語として機能するシステムを目指して構築を進めています。</Text>
            </Flex>

            <Flex flexDirection={"column"} gap={5}>
            <Text color={"#23BA78"} fontSize={{base:"18px",md:"20px"}}>Project</Text>

            <Flex gap={6} flexDirection={"column"}>
            <Flex flexDirection={"column"} pb={5} borderBottom={"1px solid #C6CEDA"} gap={3}>
            <Text fontSize={{base:"18px",md:"20px"}} fontWeight={"bold"} lineHeight="150%">大規模SaaSのデザインシステム構築</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">正社員デザインチームがない状態から、プロダクト全体のUIルールとFigmaライブラリを整備中。
              エンジニアやBizメンバーとの合意形成や工数確保を調整しながら、使いやすく・伝わりやすい共通言語として機能するシステムを構築することを目指して日々奮闘しています！
              運用フェーズに向けたルールやプロセスも含め、仕組みとして定着することが目標です。</Text>
            </Flex>

            <Flex flexDirection={"column"} pb={5} borderBottom={"1px solid #C6CEDA"} gap={3}>
            <Text fontSize={{base:"18px",md:"20px"}} fontWeight={"bold"} lineHeight="150%">受託開発会社におけるチーム横断のデザイン統一支援</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="160%">受託会社におけるプロジェクト横断の社内用デザインシステムを構築しました。
              プロジェクトごとにバラバラだったトンマナを1つのシステムに集約し、デザイン制作工数の大幅な削減に貢献しました。様々なプロジェクトに対応できるよう、柔軟に使えるコンポーネント設計を意識しました。
              よく使うフローやパターンをモジュール化して、誰が使っても安定したクオリティの制作物ができるようになりました。複数デザイナーと連携し、ライブラリの使い方や更新ルールのドキュメント化も担当しました。</Text>
            </Flex>

            </Flex>
            </Flex>



          </Flex>
          <Image src="/img/WID/WID_3.png" w={{base:"full",md:"400px"}} h={{base:"240px",md:"auto"}} alt="Main Image" objectFit={"cover"} /> 
        </Flex>

        {/* 制作実績 */}
        <Flex flexDirection={{ base: "column" , md: 'row' }}  p={{ base: 6 , md: 12 }}  gap={{ base: 6 , md: 10 }} backgroundColor={"#3A3A3A"} rounded={4}>
          <Image src="/img/Top/Portfolio.png" w={"300px"} alt="Main Image" rounded={4} /> 
          <Flex flexDirection={"column"} textColor={"#ffffff"} >
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"}>
            <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%">制作実績</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="150%">実務の詳細は制作実績にてご確認いただけます。普段の仕事でどんなデザインをしているのか気になる方は、ぜひ制作実績ページをご覧ください！</Text>
            </Flex>
            <Link href="/Portfolio" passHref>
            <Flex css={sHover} h={{base:14 ,md:20 }} w={{base:14 ,md:20 }} border={"1px solid #CACACA"} rounded={4} ml={"auto"} justifyContent={"center"} alignItems={"center"}>
              <Icon as={AiOutlineArrowRight} boxSize={{ base: 8, md: 10 }} />
            </Flex>
            </Link>
          </Flex>
        </Flex>

        

      </Flex>

      
    </Layout>
     </ChakraProvider>

    </>
  )
}

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.7;
}
`