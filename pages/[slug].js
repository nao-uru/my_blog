// import { getAllPosts, getPostBySlug } from "./../libs/contentful";

// export async function getStaticProps({params}) {
//   const {slug} = params;

//   const post = await getPostBySlug(slug);

//   return{
//     props: {
//       blogPosts: post,
//     }
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPosts();

//   const paths = allPosts.map((post) => ({
//     params: {
//       slug:post.fields.slug,
//     }
//   }));

//   return {
//     paths:paths,
//     fallback:false,
//   }
// }

import {createClient} from "contentful"


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

  console.log(blogPost);

  return (
   <>
   <h1>this is post page</h1>
   <p>{blogPost.fields.title}</p>
   </>
  );
}

