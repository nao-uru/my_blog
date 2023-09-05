import { Layout } from "../components/organisms/Layout"
import { HeadSetting } from "../components/organisms/Head";
import { getAllSamplePosts } from "../libs/contentful";
import { SampleCard } from "../components/molecules/SampleCard";
import { BreadcrumbList } from "../components/atoms/Breadcrumb";
import { Box, Heading } from "@chakra-ui/react";

export async function getStaticProps() {
  const posts = await getAllSamplePosts();
  return{
    props: {
      samplePosts: posts,
    }
  }
}

export default function AboutPage({ samplePosts }) {

  return (
    <>
    <HeadSetting 
    title={'Sample'}
    description={""}
    path={"/Sample"}
    card={'/public/img/spain.jpeg'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

    <Layout>
    <BreadcrumbList
     tree1={'Work'}
     tree2={'Sample'}
     tree1Link={'/Work'}
     tree2Link={'<https://www.naosjournal.com/>' + '/Sample'}
     />

    <Box mt={40}>
    {samplePosts.map((samplePost:any) => {
       return <SampleCard
       link={"/"}
       key={samplePost.sys.id} 
       title={"制作中です・・・"}
       text={"公開までもうしばらくお待ちください。"}
        />
    })}
    </Box>


    </Layout>
    </>
  )
}
