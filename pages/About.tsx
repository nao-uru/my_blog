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
          <Td fontSize="md">旅行・映画鑑賞<br />今でも3ヶ月に1回のペースで海外に行くほどの旅行好き</Td>
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
    <Text fontSize={24} fontWeight="bold" mt={6}>Likes</Text>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto">
      ・効率的に業務をする、効率的になるように工夫をすることが好きです<br />
      figmaの機能を使って作業を早める、便利ツールを使用する、同じ洋服を用意するなど、ちょっとせっかちなので仕事でもプライベートでも効率的にできたら良いなと思いながら生活しています。
      <Text mt={4}>
      ・年齢や立場に関係なく、リスペクトし合えるようなチームが好きです<br />
      上の人が言っているからA案で、ということに何度もぶつかってきました。自分の意見を通したいわけではなく、チームで意見を出し合い意思決定できるといいなと思っています！
      </Text>
      <Text mt={4}>
      ・考えることが好きです<br />
      よく考え事をします。仕事に関すること、紛争・貧困など社会的に大きな問題から、どうやったらカードのポイントがたくさん貯められるかまで様々なことに対して疑問を持ち考え、調べています。
      </Text>
    </Text>
    </Stack>

    <Stack borderTop="1px solid #C6CEDA" lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}} width="100%">
    <Text fontSize={24} fontWeight="bold" mt={6}>Career</Text>
    <Text mt={0} w={{base:"100%",md:"100%"}} mr="auto">
        大学卒業後もやりたいことが見つからずヨーロッパや東南アジアをバックパック。
        その後フリーターをしていました。
        世界でも通用するスキルを身につけたいと思い、WEBの世界に入りました。<br />
        約1年間、デザインやWEB制作の勉強をし、小さなデザイン会社でアシスタントとして業務しました。<br />
        その後は勉強&フリーランスの期間を経て、2022年から正社員として旅行会社のWEB部署でデザイン業務、
        副業でアプリの制作会社に業務委託として在籍しています。<br />
        学習初期は1日10時間以上PCと向き合い勉強をしました。仕事をしている今でも5時半に起床し朝の学習・仕事時間を確保しています。
    </Text>
    </Stack>

    <Stack lineHeight="180%"  mt={{base:6,md:8}}
      borderTop="1px solid #C6CEDA" width="100%">
    <Text fontSize={24} fontWeight="bold" mt={8}>Work</Text>
    <Text fontSize={20} mt={3}>やってきたこと</Text>
    <Text>
        ・アプリ・WEBアプリケーションのデザイン<br />
        ・小規模なWEBサイト・LPのデザイン〜コーディング<br />
        ・画面設計・仕様設計<br />
        ・社外・社内のエンジニアさんに実装を依頼、連携して開発を進める<br />
        ・新人デザイナーさんへのレクチャーやマネジメント

        <Text mt={4}>引き続きWEBアプリケーションや、アプリのデザインを中心とした仕事をしたいと考えています。<br />また、エンジニアさんとの距離が近く、早いサイクルでユーザーに価値を届けられるような環境で働きたいと思っています。</Text>
    </Text>
    </Stack>

    <Stack lineHeight="180%" mt={{base:6,md:8}}
      borderTop="1px solid #C6CEDA">
    <Text fontSize={24} fontWeight="bold" mt={8}>Skills</Text>
    <Text fontSize={20} mt={3}>Skill Sets</Text>
    <Text>
    基本的な使用ツールとスキルです。近年はデザインをメインで行なっているので実務でコードはほとんど書いていません。<br />
    趣味でプログラミングを学習していて、このサイトも自分で構築しました！
    これらに加えNotion・Backlogを用いたタスク管理、GitHubを使ったコード管理などの経験があります。<br />
    フルリモートの会社に属した経験もあるのでリモート下でも問題なくコミュニケーションをとることができます。伝わりやすく、お互いに気持ちよく仕事ができるコミュニケーションを心がけています。
    </Text>
    <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} rowGap={3} columnGap={3}>
    <SkillCard src='/img/Skills/figma.png' title="figma" text="メインで使用しているツールです。オートレイアウトはもちろん、デザインシステムや管理の仕方も考えながら使用しています。" />
    <SkillCard src='/img/Skills/sketch.png' title="Sketch" text="figmaを使う前に使用していたツールです。最近は使っていません。" />
    <SkillCard src='/img/Skills/photoshop.png' title="Photoshop" text="仕事ではほとんど使わないため、練習やスキルアップのために学習中です。" />
    <SkillCard src='/img/Skills/html.png' title="HTML CSS" text="特異に複雑でない限り問題なくコーディングができます。LPやHPのコーディング経験があります。" />
    <SkillCard src='/img/Skills/js.png' title="JavaScript" text="複雑なコードを書くことは難しいですが、たいていの動きは調べながら作成できます。" />
    <SkillCard src='/img/Skills/react.png' title="React" text="実務経験はありません。独学なので記事や動画を調べ、四苦八苦しています。このサイトもReat(Next.js)で構築しました。" />
    </Grid>
    <Flex mt={6} direction={{base:"column",md:"row"}} gap={4}>
    <Box w={{base:"100%",md:"50%"}}>
    <Text fontSize={20} mt={3}>Skill Maps</Text>
    <Text>
    コンポーネントの管理方法やデザインのシステム化に興味があり、日頃から情報をキャッチアップしています。
    最近参考にしているのは「デザイン庁 デザインシステム」と「iOS17(Apple Design Resources)」です。<br />
    アプリケーションのデザインには、状態変化や画面遷移などグラフィックやWEBデザインとは少し違う部分があります。それらの部分に対して経験を活かし、エンジニアさんと協力して取り組むとこができます。<br />
    一方で、ユーザーのモデリングに関してより深く経験・勉強する必要があると日々感じています。（このあたりの勉強方法が最近の悩みです）
    </Text>
    </Box>
    <Image className="image" src="/img/Skills/chart.png" w={{base:"100%",md:"50%"}} alt="Skill maps" />
    </Flex>
    </Stack>

    <Stack lineHeight="180%" w={{base:"90%", md:"100%"}} ml="auto" m={{base:"auto"}}  mt={{base:6,md:8}}
      borderTop="1px solid #C6CEDA" width="100%">
    <Text fontSize={24} fontWeight="bold" mt={8}>Vison</Text>
    <Text>
     最近は新人さんを教えながらリーダーとしてデザイン制作に取り組んでいて、教えることが自分の成長にもつながっていると実感しています。
     ですのでマネジメントや、ディレクションの業務に携わりたいと思っていますが、まだまだ自分自身で手を動かしてデザインに携わりたい気持ちが強いです。 <br />
     進行係としてのマネジメントではなく、しっかりとデザイナーとしての実績を積み、経験を活かしたマネージャーになることが理想です。<br />
     また、ユーザーに対する理解が足りないと感じることが多いのでユーザー心理を理解するための要件定義方法やその意義についての知識をもっと増やしたいです。そのために今は心理学や行動経済学の本を読んで勉強中です！
    </Text>
    </Stack>


    </Box>
    </Layout>
    </ChakraProvider>
    </>
  )
}
