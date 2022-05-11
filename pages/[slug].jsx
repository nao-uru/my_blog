import { Box, Flex, Heading, Img, Text, } from "@chakra-ui/react";
import {createClient} from "contentful"
import Head from 'next/head';

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

  const date = blogPost.fields.date;
  const year = new Date(date).getFullYear();
  const smonth = new Date(date).getMonth();
  const month = smonth +1;
  const day = new Date(date).getDate();

  const image = `https:${blogPost.fields.media.fields.file.url}`;

  console.log(blogPost);
  console.log(`https:${blogPost.fields.media.fields.file.url}`)

  return (
   <>
   {/* <Head>
      <title>{blogPost.fields.title}</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content={blogPost.fields.title} />
      <meta property="og:description" content={""} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={'<https://www.naosjournal.com/>' + blogPost.fields.slug} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={blogPost.fields.title} />
      <meta name="keywords" content={"ブログ"} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@naos_journal" />
      <meta name="twitter:url" content={'<https://www.naosjournal.com/>' + blogPost.fields.slug} />
      <meta name="twitter:title" content={blogPost.fields.title} />
      <meta name="twitter:description" content={""} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={'<https://www.naosjournal.com/>' + blogPost.fields.slug} />
    </Head> */}

    <HeadSetting 
    title={blogPost.fields.title}
    description={blogPost.fields.subtitle}
    path={'<https://www.naosjournal.com/>' + blogPost.fields.slug}
    card={image}
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
     <Img src={image} mt={2} w="full" h={{base:"200px",md:"400px"}} objectFit="cover" />

     <Box w="90%" m="auto" mt={8} lineHeight="180%">
     <div dangerouslySetInnerHTML={{__html:md.render(blogPost.fields.text)}}></div>
     </Box>

     </Box>

   </Layout>
   </>
  );
}

