import Head from "next/head"
import { Work } from "../components/organisms/Work"
import { Layout } from "../components/pages/Layout"

export default function WorkPage() {
  return (
    <>
    <Head>
      <title>Work</title>
    </Head>
    <Layout><Work /></Layout>
    </>
  )
}
