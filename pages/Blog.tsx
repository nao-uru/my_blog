import { Grid , Flex } from "@chakra-ui/react";
import { getAllPosts } from "../libs/contentful";
import dynamic from 'next/dynamic';

import { Layout } from "../components/organisms/Layout";
import { BlogCard } from "../components/molecules/BlogCard"
import { Title } from "../components/atoms/Title";
import { HeadSetting } from "../components/organisms/Head";
import { TabLink } from "../components/atoms/TabLink";
import { BreadcrumbList } from "../components/atoms/Breadcrumb";

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
    import('../components/organisms/Scroll'),
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

    <BreadcrumbList
     tree1={'Blog'}
     tree2={''}
     tree1Link={'/Blog'}
     tree2Link={''}
     />
     
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

