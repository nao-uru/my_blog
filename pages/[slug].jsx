import { Box, Flex, Heading, Img, Text, useBreakpointValue } from "@chakra-ui/react";
import {createClient} from "contentful"

import { Layout } from "../components/pages/Layout"
import { Back } from "../components/atoms/Back"
import Head from "next/head";

const md = require('markdown-it')();


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

  const date = blogPost.sys.createdAt;
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();

  console.log(blogPost);

  return (
   <>
   <Head>
     <title>{blogPost.fields.title}</title>
   </Head>
   <Layout>

     <Box m="auto" w={{base:"90%",md:""}} >
     <Back />
     <Heading mt={{base: 10,md: 20}} size="lg">{blogPost.fields.title}</Heading>
     <Flex justify="start" align="baseline">
     <Text mt={4}>Date:{`${year}.${month}.${day}`}</Text>
     <Text>Tag</Text>
     </Flex>
     <Img src={`https:${blogPost.fields.media.fields.file.url}`} w="full"  h={{base:"200px",md:"400px"}} objectFit="cover" />
     <div dangerouslySetInnerHTML={{__html:md.render(blogPost.fields.text)}}></div>
     </Box>

   </Layout>
   </>
  );
}

