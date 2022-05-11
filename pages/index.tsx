import Head from "next/head";

import { Top } from "../components/organisms/Top"
import { Layout } from "../components/pages/Layout";



export default function Home() {

  return (
    <>
    <Head>
      <title>HOME</title>
    </Head>
    <Layout>
      <Top />
    </Layout>
    </>
  )
}
