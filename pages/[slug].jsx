import { Box, Flex, Heading, Img, Text, } from "@chakra-ui/react";
import {createClient} from "contentful"
import { FaLine, FaTwitter } from "react-icons/fa";

import { Layout } from "../components/pages/Layout"
import { Back } from "../components/atoms/Back"
import { HeadSetting } from "../components/pages/Head";
import { css } from "@emotion/react";
import { ButtonPrime } from "../components/atoms/Button";

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

md.use(require('markdown-it-container'), 'sample', {
 
  validate: function(params) {
    return params.trim().match(/^style\s+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^style\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      return '<div class="style ' + md.utils.escapeHtml(m[1]) + '"><div class="style-body">';

    } else {
      return '</div></div>\n';
    }
  }
});

console.log(md.render('::: spoiler click me\n*content*\n:::\n'));


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
    <HeadSetting 
    title={blogPost.fields.title}
    description={blogPost.fields.subtitle}
    path={'<https://www.naosjournal.com/>' + blogPost.fields.slug}
    card={image}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />
    
   <Layout>

     <Box m="auto" w={{base:"100%",md:"90%"}} >
     <Back />
     <Heading mt={{base: 10,md: 20}} size="lg">{blogPost.fields.title}</Heading>
     <Flex justify="start" align="baseline">
     <Text mt={6}>Date:{`${year}.${month}.${day}`}</Text>
     </Flex>
     <Img src={image} mt={2} w="full" h={{base:"200px",md:"400px"}} objectFit="cover" />

     <Box css={sBack} pt={6} pb={24} lineHeight="180%">
     <Box w={{base:"95%",md:"90%"}} m="auto" dangerouslySetInnerHTML={{__html:md.render(blogPost.fields.text)}} />
     </Box>

     <Flex flexDirection="column" align="center" mt={24} css={sBorder} >
       <Heading fontSize={24} pt={12}>Share</Heading>

       <Flex mt={8} flexDirection={{base:"column", md:"row"}} align="center">

      <ButtonPrime 
       href={`https://twitter.com/share?url=https://www.naosjournal.com/${blogPost.fields.slug}&text=sample&hashtags=sample`} 
       icon={<FaTwitter size={28} color="#73a1c7" />}
       color="#73a1c7"
       border="2px #73a1c7 solid" >Twitterでシェア</ButtonPrime>
      
      <Box mt={{base:4,md:0}}>
      <ButtonPrime       
       href={`https://social-plugins.line.me/lineit/share?url=https://www.naosjournal.com/${blogPost.fields.slug}`} 
       icon={<FaLine size={28} color="#6BA791" />}
       color="#6BA791"
       border="2px #6BA791 solid">LINEで送る</ButtonPrime>
      </Box>

       </Flex>

     </Flex>

     </Box>

   </Layout>
   </>
  );
} 

const sBack = css`
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 225, 225, 225, 0.2 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
  border-radius: 0 0 10px 10px;
  border-left: 1px #e7e7e7 solid;
  border-right: 1px #e7e7e7 solid;
`
const sBorder = css`
 border-top: 1px #222222 solid;
`
