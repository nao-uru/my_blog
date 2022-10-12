import { Layout } from "../components/organisms/Layout"
import { HeadSetting } from "../components/organisms/Head";
import { getAllSamplePosts } from "../libs/contentful";
import { SampleCard } from "../components/molecules/SampleCard";
import { BreadcrumbList } from "../components/atoms/Breadcrumb";
import { Heading } from "@chakra-ui/react";

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

    <Heading size="md" mt={28} mb={20}>制作中です・・・</Heading>

    {/* {samplePosts.map((samplePost:any) => {
       return <SampleCard
       key={samplePost.sys.id} 
       title={samplePost.fields.title}
       text={samplePost.fields.text}
        />
    })} */}
    </Layout>
    </>
  )
}
