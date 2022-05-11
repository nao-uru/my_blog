import Head from "next/head"

import { About } from "../components/organisms/About"
import { Layout } from "../components/pages/Layout"
import { HeadSetting } from "../components/pages/Head";


export default function AboutPage() {
  return (
    <>
    <HeadSetting 
    title={'About'}
    description={""}
    url={"https://www.naosjournal.com/About"}
    card={'/public/img/spain.jpeg'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />
    <Layout>
      <About />
    </Layout>
    </>
  )
}
