import { Top } from "../components/pages/Home"
import { HeadSetting } from "../components/organisms/Head";
import { LayoutWide } from "../components/organisms/LayoutWide";

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
