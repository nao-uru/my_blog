import { createClient } from "contentful";

import { Layout } from "../components/pages/Layout";

export default function Home({ blogPosts }) {

  console.log(blogPosts);

  return (
    <>
    <Layout>
      HELLO This is HOME
      <p>test</p>
      </Layout>
    </>
  )
}

