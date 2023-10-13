import { Work } from "../components/Templete/WorkTemplete"
import { Layout } from "../components/Templete/Layout"
import { HeadSetting } from "../components/Templete/Head";
import { BreadcrumbList } from "../components/Parts/Breadcrumb";

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
