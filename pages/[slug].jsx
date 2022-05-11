import { Box, Flex, Heading, Img, Text, } from "@chakra-ui/react";
import {createClient} from "contentful"

import { Layout } from "../components/pages/Layout"
import { Back } from "../components/atoms/Back"
import { HeadSetting } from "../components/pages/Head";

const md = require('markdown-it')({
  injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
  breaks: true, // 改行コードを<br>に変換する
  html: true, // HTML タグを有効にする
  linkify: true, // URLに似たテキストをリンクに自動変換する
  typography: true,
  use: [
    ''
  ]
});
const mark = require('markdown-it-mark');
md.use(mark);


const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogPost'
  })

  const paths = res.items.map(item => {
    return {
      params:{ slug: item.fields.slug }
    }
  })

  return{
    paths,
    fallback:false
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug':params.slug
  })

  return {
    props:{ blogPost: items[0]}
  }
}

export default function PostPage({blogPost}) {

  // const date = blogPost.sys.createdAt;
  const date = blogPost.fields.date;
  const year = new Date(date).getFullYear();
  const smonth = new Date(date).getMonth();
  const month = smonth +1;
  const day = new Date(date).getDate();

  console.log(blogPost);

  return (
   <>
   <HeadSetting 
    title={blogPost.fields.title}
    description={blogPost.fields.subtitle}
    url={`https://www.naosjournal.com/${blogPost.fields.title}`}
    card={`https:${blogPost.fields.media.fields.file.url}`}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />
    
   <Layout>

     <Box m="auto" w={{base:"90%",md:""}} >
     <Back />
     <Heading mt={{base: 10,md: 20}} size="lg">{blogPost.fields.title}</Heading>
     <Flex justify="start" align="baseline">
     <Text mt={6}>Date:{`${year}.${month}.${day}`}</Text>
     {/* <Text>Tag</Text> */}
     </Flex>
     <Img src={`https:${blogPost.fields.media.fields.file.url}`} mt={2} w="full" h={{base:"200px",md:"400px"}} objectFit="cover" />

     <Box w="90%" m="auto" mt={8} lineHeight="180%">
     <div dangerouslySetInnerHTML={{__html:md.render(blogPost.fields.text)}}></div>
     </Box>

     </Box>

   </Layout>
   </>
  );
}

