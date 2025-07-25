import { Grid, Flex } from "@chakra-ui/react";
import { getAllPosts } from "../libs/contentful";
import dynamic from 'next/dynamic';

import { BlogCard } from "../components/Cards/BlogCard"
import { HeadSetting } from "../components/Templete/Head";
import { Pagetitle } from "../components/Parts/Pagetitle";
import { LayoutWide } from "../components/Templete/Layout";
import { Subtitle } from "../components/Parts/Subtitle";


export async function getStaticProps() {
  const posts = await getAllPosts();
  return{
    props: {
      blogPosts: posts,
    }
  }
}

export default function  BlogPage ({ blogPosts }) {

  const ScrollRevealContainer = dynamic(
    import('../components/Templete/Scroll'),
    {ssr: false,}
  );

  return (
    <>
    {console.log(blogPosts)}

    <HeadSetting 
    title={'Blog'}
    description={"なおのブログ"}
    path={"/Blog"}
    card='/img/spain.jpeg'
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

    <LayoutWide>

    <Pagetitle>Article</Pagetitle>

    <Flex flexDirection={"column"} my={16} >

    <Flex flexDirection={"column"} gap={8}>
      <Subtitle size="24">My Blog</Subtitle>
      <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} rowGap={8} columnGap={8}>
      {blogPosts.map((blogPost:any) => {

      const date = blogPost.fields.date;
      const year = new Date(date).getFullYear();
      const smonth = new Date(date).getMonth();
      const month = smonth +1;
      const day = new Date(date).getDate();

      return <BlogCard 
      key={blogPost.sys.id} 
      title={blogPost.fields.title}
      url={blogPost.fields.media.fields.file.url}
      slug={blogPost.fields.slug}
      date ={`${year}/${month}/${day}`}
      />
      })} 

      </Grid>
    </Flex>


    </Flex>



    </LayoutWide>
    </>
  )
}

