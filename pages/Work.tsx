import { Work } from "../components/pages/Work"
import { Layout } from "../components/organisms/Layout"
import { HeadSetting } from "../components/organisms/Head";
import { BreadcrumbList } from "../components/atoms/Breadcrumb";

export default function WorkPage() {
  return (
    <>
    <HeadSetting 
    title={'NAOs JOURNAL'}
    description={""}
    path={"/Work"}
    card={'/public/img/spain.jpeg'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />
    <Layout>

    <BreadcrumbList
     tree1={'Work'}
     tree1Link={'/Work'}
     />

    <Work />
    </Layout>
    </>
  )
}
