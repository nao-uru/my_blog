import { About } from "../components/organisms/About"
import { Layout } from "../components/pages/Layout"
import { HeadSetting } from "../components/pages/Head";
import dynamic from 'next/dynamic';

export default function AboutPage() {

  const ScrollRevealContainer = dynamic(
    import('../components/pages/Scroll'),
    {ssr: false,}
  );

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
      <ScrollRevealContainer>
      <About />
      </ScrollRevealContainer>
    </Layout>
    </>
  )
}
