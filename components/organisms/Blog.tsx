// 使ってない


import { createClient } from "contentful";

import { BlogCard } from "../../components/molecules/BlogCard"
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { VFC } from "react";
import { Props } from "framer-motion/types/types";


export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

const res = await client.getEntries({ content_type: 'blogPost' });
  
  return{
    props: {
      blogPosts: res.items,
    }
  }
}


export const Blog:VFC<Props> = ({ blogPosts }) => {

  return (
    <>
    <ChakraProvider>
      <Flex mt={10}>
      {blogPosts.map((blogPost) => {
      return <BlogCard 
      key={blogPost.sys.id} 
      title={blogPost.fields.title}
      url={blogPost.fields.media.fields.file.url}
      />
    })} 
      </Flex>
    </ChakraProvider>
    </>
  )

}



