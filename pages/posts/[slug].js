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
      params:{ slug:item.fields.slug }
    }
  })

  return{
    paths,
    fallback:false,
  }
}

export async function getStaticProps() {
  
}

export default function PostPage() {
  return (
   <>
   <h1>this is post page</h1>
   </>
  );
}
