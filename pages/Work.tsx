import Head from "next/head"

import { Work } from "../components/organisms/Work"
import { Layout } from "../components/pages/Layout"
import { HeadSetting } from "../components/pages/Head";


export default function WorkPage() {
  return (
    <>
    <Head>
      <title>Work</title>
    </Head>

    <HeadSetting 
    title={'NAOs JOURNAL'}
    description={""}
    url={"https://www.naosjournal.com/Work"}
    card={'/public/img/spain.jpeg'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />
    <Layout>
      <Work />
    </Layout>
    </>
  )
}
