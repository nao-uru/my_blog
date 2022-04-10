import Head from "next/head"
import { About } from "../components/organisms/About"
import { Layout } from "../components/pages/Layout"

export default function AboutPage() {
  return (
    <>
    <Head>
      <title>About</title>
    </Head>
    <Layout><About /></Layout>
    </>
  )
}
