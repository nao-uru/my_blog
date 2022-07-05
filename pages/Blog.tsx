import { Grid } from "@chakra-ui/react";
import { getAllPosts } from "../libs/contentful";

import { Layout } from "../components/pages/Layout";
import { BlogCard } from "../components/molecules/BlogCard"
import { Title } from "../components/atoms/Title";
import { HeadSetting } from "../components/pages/Head";
import { TabLink } from "../components/atoms/TabLink";
import dynamic from 'next/dynamic';

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
    import('../components/pages/Scroll'),
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

    <Layout>
    <Title>Blog</Title>

    {/* <Flex>
      <TabLink url="/Blog">All</TabLink>
      <TabLink >Design</TabLink>
      <TabLink url="/tagpages/Book">Book</TabLink>
      <TabLink>Life</TabLink>
    </Flex> */}

      <Grid mt={8} templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} rowGap={8} >
      {blogPosts.map((blogPost:any) => {

      const date = blogPost.fields.date;
      const year = new Date(date).getFullYear();
      const smonth = new Date(date).getMonth();
      const month = smonth +1;
      const day = new Date(date).getDate();

      const tags = blogPost.fields.tags;
      const tag = tags.map((tag) => {
        return tag;
      })

      return <BlogCard 
      key={blogPost.sys.id} 
      title={blogPost.fields.title}
      url={blogPost.fields.media.fields.file.url}
      slug={blogPost.fields.slug}
      date ={`${year}.${month}.${day}`}
      tag={tag}
      />
      })} 
      </Grid>
    </Layout>
    </>
  )
}

