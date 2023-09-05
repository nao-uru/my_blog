import { About } from "../components/pages/About"
import { Layout } from "../components/organisms/Layout"
import { HeadSetting } from "../components/organisms/Head";
import { BreadcrumbList } from "../components/atoms/Breadcrumb";

export default function AboutPage() {

  return (
    <>
    <HeadSetting 
    title={'About'}
    description={""}
    path={"/About"}
    card={'/public/img/spain.jpeg'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />
    <Layout>

    <BreadcrumbList
     tree1={'About'}
     tree1Link={'/About'}
     />

     

      <About />
    </Layout>
    </>
  )
}
