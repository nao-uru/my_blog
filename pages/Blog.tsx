import { Grid, Flex, Box, Text, Image } from "@chakra-ui/react";
import { getAllPosts } from "../libs/contentful";
import { getNoteFeed, NoteItem } from "../libs/getNoteFeed";
import dynamic from 'next/dynamic';
import { css } from "@emotion/react";
import { useState } from "react";

import { Card } from "../components/Cards/Card"
import { HeadSetting } from "../components/Templete/Head";
import { Pagetitle } from "../components/Parts/Pagetitle";
import { Layout } from "../components/Templete/Layout";
import { Subtitle } from "../components/Parts/Subtitle";
import Link from "next/link";

type Props = {
  blogPosts: any[];
  notes: NoteItem[];
};

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const notes = await getNoteFeed();

  return {
    props: {
      blogPosts: posts ?? [],
      notes: notes ?? [],
    },
    revalidate: 3600,
  };
};

export default function  BlogPage ({ blogPosts, notes }: Props) {

  const ScrollRevealContainer = dynamic(
    import('../components/Templete/Scroll'),
    {ssr: false,}
  );

const STEP = 6;
const [visibleCountNotes, setVisibleCountNotes] = useState(6);
const [visibleCountPosts, setVisibleCountPosts] = useState(6);

const handleMoreNotes = () =>
  setVisibleCountNotes(v => Math.min(v + STEP, notes.length));
const handleMorePosts = () =>
  setVisibleCountPosts(v => Math.min(v + STEP, blogPosts.length));

  return (
    <>
    {console.log(blogPosts)}

    <HeadSetting
      title="NAO's Article"
      description="ブログ記事"
      path="/Article"
      ogImage="https://www.naosjournal.com/img/Top/Portfolio.png"
    />


    <Layout>

    <Pagetitle>Article</Pagetitle>

     {/* note  */}
    <Flex flexDirection={"column"} my={16} >

    <Flex flexDirection={"column"} gap={8}>
      <Subtitle size="24">note</Subtitle>
      <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} rowGap={8} columnGap={8}>
        {notes.slice(0, visibleCountNotes).map((note, index) => (

          <Box key={note.link || index} rounded={4} backgroundColor='#ffffff' css={sCard} h="full" w={"100%"} overflow={"hidden"}>
          <Link href={note.link} passHref target="_blank">
            <Box>
              {note.thumbnail && (
                <Image
                src={note.thumbnail}
                alt={note.title}
                width={400} 
                height="auto"/>
                )}
              <Box p={4}>
                <Text fontWeight='nomal' fontSize='16px'>{note.title}</Text>
                <Text fontWeight='nomal' fontSize="md" mt={1} textColor={"#5B5B5B"}>{new Date(note.pubDate).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'})}</Text>
              </Box>
            </Box>
          </Link>
          </Box>
          
        ))}

      </Grid>
      {visibleCountNotes < notes.length && (
      <Box textAlign="left">
        <Flex onClick={handleMoreNotes} css={sCard} alignItems="center" justifyContent="center" cursor="pointer" w="fit-content" color="#151515" borderBottom="1px solid #151515">
          <Text>Load More</Text>
        </Flex>
      </Box>
    )}
    </Flex>


    </Flex>

   
     {/* 個人ブログ  */}
    <Flex flexDirection={"column"} my={16} >

    <Flex flexDirection={"column"} gap={8}>
      <Subtitle size="24">My Blog</Subtitle>
      <Text>このサイト上で構築しているブログ</Text>
      <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} rowGap={8} columnGap={8}>
      {blogPosts.slice(0, visibleCountPosts).map((blogPost:any) => {

      const date = blogPost.fields.date;
      const year = new Date(date).getFullYear();
      const smonth = new Date(date).getMonth();
      const month = smonth +1;
      const day = new Date(date).getDate();

      return <Card 
      key={blogPost.sys.id} 
      title={blogPost.fields.title}
      url={blogPost.fields.media.fields.file.url}
      slug={blogPost.fields.slug}
      date ={`${year}/${month}/${day}`}
      />
      })} 

    </Grid>

       {visibleCountPosts < blogPosts.length && (
      <Box textAlign="left">
        <Flex onClick={handleMorePosts} css={sCard} alignItems="center" justifyContent="center" cursor="pointer" w="fit-content" color="#151515" borderBottom="1px solid #151515">
          <Text>Load More</Text>
        </Flex>
      </Box>
    )}

    </Flex>


    </Flex>



    </Layout>
    </>
  )
}

const sCard = css`
  
  :hover {
  transition: 0.5s;
  opacity:0.7;
}
`
