import { createClient } from "contentful";

import { Layout } from "../../components/pages/Layout";
import { BlogCard } from "../../components/molecules/BlogCard"
import { Flex, Grid } from "@chakra-ui/react";
import { Menu } from "../../components/molecules/Menu";
import { TabLink } from "../../components/atoms/TabLink";


export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'blogPost'})
  
  return{
    props: {
      blogPosts: res.items,
    }
  }
}

export default function BlogPage({ blogPosts }) {

  console.log(blogPosts);

  return (
    <>
    <Layout>

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
      />
    })} 
      </Grid>
    
    </Layout>
    </>
  )
}
