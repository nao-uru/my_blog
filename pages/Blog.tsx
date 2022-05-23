import { Flex, Grid } from "@chakra-ui/react";
import { getAllPosts } from "../libs/contentful";

import { Layout } from "../components/pages/Layout";
import { BlogCard } from "../components/molecules/BlogCard"
import { Title } from "../components/atoms/Title";
import { HeadSetting } from "../components/pages/Head";
import { TabLink } from "../components/atoms/TabLink";


export async function getStaticProps() {
  const posts = await getAllPosts();
  return{
    props: {
      blogPosts: posts,
    }
  }
}

export default function  BlogPage ({ blogPosts }) {

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

    <Layout>
       <Title>Blog</Title>

    {/* <Flex>
      <TabLink url="/Blog">All</TabLink>
      <TabLink >Design</TabLink>
      <TabLink url="/tagpages/Book">Book</TabLink>
      <TabLink>Life</TabLink>
    </Flex> */}

      <Grid mt={8} templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} gap={8}>
      {blogPosts.map((blogPost:any) => {
      return <BlogCard 
      key={blogPost.sys.id} 
      title={blogPost.fields.title}
      url={blogPost.fields.media.fields.file.url}
      slug={blogPost.fields.slug}
      />
    })} 
      </Grid>
    
    </Layout>
    </>
  )
}

