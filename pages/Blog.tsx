import { createClient } from "contentful";
import { Flex, Grid } from "@chakra-ui/react";

import { Layout } from "../components/pages/Layout";
import { BlogCard } from "../components/molecules/BlogCard"
import { TabLink } from "../components/atoms/TabLink";

import { getAllPosts } from "../libs/contentful";
import { Title } from "../components/atoms/Title";


export async function getStaticProps() {
  const posts = await getAllPosts();
  return{
    props: {
      blogPosts: posts,
    }
  }
}

export default function BlogPage({ blogPosts }) {

  console.log(blogPosts);

  return (
    <>
    <Layout>

      <Title>Blog</Title>

    <Flex>
      <TabLink>All</TabLink>
      <TabLink>Design</TabLink>
      <TabLink>English</TabLink>
      <TabLink>Life</TabLink>
    </Flex>

      <Grid mt={8} templateColumns='repeat(3, 1fr)' gap={8}>
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


