import { Box } from "@chakra-ui/react";
import { LatestCard } from "../components/molecules/LatestCard";
import { getAllPosts } from "../libs/contentful";


export async function getStaticProps() {
  const posts = await getAllPosts();
  return{
    props: {
      blogPosts: posts,
    }
  }
}

export default function  Sample ({ blogPosts }) {


  return (
    <>
    {console.log(blogPosts)}
    <Box>
      {blogPosts.map((blogPost) => {
      return <LatestCard
      key={blogPost.sys.id} 
      title={blogPost.fields.title}
      url={blogPost.fields.media.fields.file.url}
      slug={blogPost.fields.slug}
      />
    }).slice(0,4)} 
      </Box>
    </> 
  )
}

