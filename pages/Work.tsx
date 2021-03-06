import { Work } from "../components/organisms/Work"
import { Layout } from "../components/pages/Layout"
import { HeadSetting } from "../components/pages/Head";


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
      <Work />
    </Layout>
    </>
  )
}
