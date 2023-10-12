import { Grid , Text, Box } from "@chakra-ui/react";
import { getAllPosts } from "../libs/contentful";
import dynamic from 'next/dynamic';

import { Layout } from "../components/organisms/Layout";
import { BlogCard } from "../components/molecules/BlogCard"
import { HeadSetting } from "../components/organisms/Head";
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
     
     <Box  mt={{base:4, md:6}}>
    <Text fontSize={{base:"40px",md:"64px"}} lineHeight="none">Blog</Text>
    </Box>

      <Grid mt={8} templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} rowGap={8} >
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
    </Layout>
    </>
  )
}

