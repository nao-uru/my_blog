import { Box, Flex, Heading, Img, Text, } from "@chakra-ui/react";
import { FaLine, FaTwitter } from "react-icons/fa";
import { css } from "@emotion/react";
import { getAllPosts, client,  getTagBook } from "../libs/contentful";
import { md } from '../libs/markdown';

import { HeadSetting } from "../components/organisms/Head";
import { ButtonPrime } from "../components/atoms/button/ButtonPrime";
import { LatestCard } from "../components/molecules/LatestCard";
import { Title } from "../components/atoms/Title";
import { LayoutWide } from "../components/organisms/LayoutWide";
import { Profile } from "../components/molecules/Profile";
import { ButtonSecond } from "../components/atoms/button/ButtonSecond";
import { BreadcrumbList } from "../components/atoms/Breadcrumb";

// パスの生成
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



// データ取得（記事一覧と記事個別の内容）
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug':params.slug
  })

  const posts = await getAllPosts();

  return {
    props:{ blogPost: items[0], allPosts: posts,}
  }
}




export default function PostPage({blogPost, allPosts }) {

  console.log(allPosts);
  console.log(blogPost);

  const date = blogPost.fields.date;
  const year = new Date(date).getFullYear();
  const smonth = new Date(date).getMonth();
  const month = smonth +1;
  const day = new Date(date).getDate();

  const image = `https:${blogPost.fields.media.fields.file.url}`;
  const tags = blogPost.fields.tags;


  return (
   <>
    <HeadSetting 
    title={blogPost.fields.title}
    description={blogPost.fields.subtitle}
    path={'<https://www.naosjournal.com/>' + blogPost.fields.slug}
    card={image}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />
    
   <LayoutWide>

   <BreadcrumbList
     tree1={'Blog'}
     tree2={blogPost.fields.title}
     tree1Link={'/Blog'}
     tree2Link={'<https://www.naosjournal.com/>' + blogPost.fields.slug}
     />

    <Flex flexDirection={{base:"column", lg:"row"}}>

    <Box m="auto" w="100%" mr={12}>
     <Title>{blogPost.fields.title}</Title>
     <Flex mt={6} justify="start" align="baseline">
     <Text mt={6} mr={6}>Date:{`${year}.${month}.${day}`}</Text>
     {tags.map((tagEl) => {
       return <Text css={sTag} key={tagEl.length}>{tagEl}</Text>;
       })}
     </Flex>
     <Img src={image} mt={2} w="full" h={{base:"200px",md:"400px"}} objectFit="cover" />

     <Box css={sBack} pt={6} pb={24} lineHeight="180%">
     <Box w={{base:"95%",md:"90%"}} m="auto" dangerouslySetInnerHTML={{__html:md.render(blogPost.fields.text)}} />
     </Box>

     {/* 共有ボタン */}
     <Flex flexDirection="column" align="center" mt={24} css={sBorder} >
       <Heading fontSize={24} pt={12}>Share</Heading>

       <Flex mt={8} flexDirection={{base:"column", md:"row"}} align="center">
      <ButtonPrime 
       href={`https://twitter.com/share?url=https://www.naosjournal.com/${blogPost.fields.slug}&text=sample&hashtags=sample`} 
       icon={<FaTwitter size={28} color="#53a1e1" />}
       color="#53a1e1"
       border="2px #53a1e1 solid" >Twitterでシェア</ButtonPrime>
      
      <Box mt={{base:4,md:0}}>
      <ButtonPrime       
       href={`https://social-plugins.line.me/lineit/share?url=https://www.naosjournal.com/${blogPost.fields.slug}`} 
       icon={<FaLine size={28} color="#0da970" />}
       color="#0da970"
       border="2px #0da970 solid">LINEで送る</ButtonPrime>
      </Box>

      </Flex>


     </Flex>

    </Box>

    {/* Aside  */}
    <Box m='auto' mt={{base:24,lg:"160px"}} w={{base:'100%',md:"35%"}} >
    <Profile />
    <Box borderTop="1px solid #373737" mt={24}>
    <Heading size="md" mt={8} mb={12}>最新の投稿</Heading>
      {allPosts.map((shinglePost) => {
      return <LatestCard
      key={shinglePost.sys.id} 
      title={shinglePost.fields.title}
      url={shinglePost.fields.media.fields.file.url}
      slug={shinglePost.fields.slug}
      />
    }).slice(0,4)} 
    <ButtonSecond href="/Blog" color="#0da970">All Posts</ButtonSecond>
    </Box>
    </Box>

    </Flex>
   </LayoutWide>
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
const sTag = css`
 margin: 0 10px 0 0;
 padding: 5px 10px;
 border-radius: 8px;
 border: 1px #222222 solid;
`
