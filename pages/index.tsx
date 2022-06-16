import { Top } from "../components/organisms/Top"
import { Layout } from "../components/pages/Layout";
import { HeadSetting } from "../components/pages/Head";
import { LayoutWide } from "../components/pages/LayoutWide";

export default function Home() {

  return (
    <>
    <HeadSetting 
    title={'Home'}
    description={"ホーム"}
    path="/"
    card="/img/spain.jpeg"
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

    {/* <Layout> */}
    <LayoutWide>
      <Top />
    </LayoutWide>
    {/* </Layout> */}
    </>
  )
}
