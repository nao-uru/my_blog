import { Top } from "../components/organisms/Top"
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

    <LayoutWide>
      <Top />
    </LayoutWide>
    </>
  )
}
