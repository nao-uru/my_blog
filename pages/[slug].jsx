import { Box, Flex, Img, Text, Image } from "@chakra-ui/react";
import { FaLine, FaTwitter } from "react-icons/fa";
import { css } from "@emotion/react";
import { getAllPosts, client } from "../libs/contentful";
import { md } from '../libs/markdown';
import Link from "next/link";

import { HeadSetting } from "../components/Templete/Head";
import { ButtonPrime } from "../components/Parts/ButtonPrimary";
import { BlogCardSmall } from "../components/Cards/BlogCardSmall";
import { LayoutWide } from "../components/Templete/LayoutWide";
import { BreadcrumbList } from "../components/Parts/Breadcrumb";

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

    <Flex  flexDirection={{base:"column", lg:"row"}}>

    <Box m="auto" w="100%" mr={8}>
     <Text mt={{base:6,md:12}} fontSize={{base:"24px",md:"32px"}} fontWeight="bold">{blogPost.fields.title}</Text>
     <Flex mt={{base:0,md:0}}  justify="start" align="baseline">
     <Text mt={{base:0,md:4}} mr={2}>Date: {`${year}/${month}/${day}`}</Text>
     {tags.map((tagEl) => {
       return <Text css={sTag} key={tagEl.length}>{tagEl}</Text>;
       })}
     </Flex>
     <Img src={image} mt={2} w="full" h={{base:"200px",md:"400px"}} objectFit="cover" />

     <Box css={sBack} pt={{base:2, md:6}} pb={{base:4, md:16}} lineHeight="180%">
     <Box w={{base:"95%",md:"90%"}} m="auto" dangerouslySetInnerHTML={{__html:md.render(blogPost.fields.text)}} />
     </Box>

     {/* 共有ボタン */}
     <Flex flexDirection="column" align="center" mt={{base:0, md:8}}>
       <Text fontSize={24} fontWeight="bold" pt={12}>Share</Text>

       <Flex mt={8} flexDirection={{base:"column", md:"row"}} align="center">
      <ButtonPrime 
       href={`https://twitter.com/share?url=https://www.naosjournal.com/${blogPost.fields.slug}&text=sample&hashtags=sample`} 
       icon={<FaTwitter size={28} color="#53a1e1" />}
       color="#53a1e1"
       border="#53a1e1"
       >Twitterでシェア</ButtonPrime>
      
      <Box mt={{base:4,md:0}}>
      <ButtonPrime       
       href={`https://social-plugins.line.me/lineit/share?url=https://www.naosjournal.com/${blogPost.fields.slug}`} 
       icon={<FaLine size={28} color="#25D088" />}
       color="#25D088"
       border="#25D088">LINEで送る</ButtonPrime>
      </Box>

      </Flex>


     </Flex>

    </Box>

    {/* Aside  */}
    <Box m='auto' mt={{base:24,lg:"120px"}} w={{base:'100%',md:"40%"}} >

    {/* Profile */}
    <Box  width="100%">
    <Flex mt={6}>
      <Link href='/About' passHref>
      <Image src="/img/icon-circle.png" alt="icon" width="100px" height="100px" mr={4} cursor='pointer' _hover={{opacity:'0.7'}} />
      </Link>
      <Box>
        <Text fontSize={32} fontWeight="bold">NAO</Text>
        <Text fontSize={16} >UI/UXデザイナー<br />たまにコードも書く</Text>
      </Box>
    </Flex>
    <Text fontSize={16} my={4}>プログラミング学習経験を活かしたアプリケーションのデザインが得意</Text>
    <ButtonPrime href="/About" bgColor="#25D088"  wide="full" target="" color="#ffffff" icon={''}>About Me</ButtonPrime>
    </Box>


    {/* Posts */}
    <Box borderTop="1px solid #C6CEDA" mt={12}>
    <Text fontWeight="bold" size="2xl" my={6} >最新の投稿</Text>
      {allPosts.map((shinglePost) => {
      return <BlogCardSmall
      key={shinglePost.sys.id} 
      title={shinglePost.fields.title}
      url={shinglePost.fields.media.fields.file.url}
      slug={shinglePost.fields.slug}
      />
    }).slice(0,4)} 
    <ButtonPrime href="/Blog" bgColor="#25D088"  wide="full" target="" color="#ffffff" icon={''}>All Posts</ButtonPrime>
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

const sTag = css`
 margin: 0 10px 0 0;
 padding: 2px 8px;
 border-radius: 8px;
 border: 1px solid #25D088;
 color: #25D088;
`
