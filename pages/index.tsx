import { Top } from "../components/organisms/Top"
import { Layout } from "../components/pages/Layout";
import { HeadSetting } from "../components/pages/Head";

export default function Home() {

  return (
    <>
    <HeadSetting 
    title={'Home'}
    description={"ホーム"}
    url="https://www.naosjournal.com/Blog"
    card="/img/spain.jpeg"
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

    <Layout>
      <Top />
    </Layout>
    </>
  )
}
