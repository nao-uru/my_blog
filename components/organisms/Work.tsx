import { Box, ChakraProvider, Flex, SimpleGrid, useBreakpointValue, Text} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import React, { VFC } from "react";
import { Title } from "../atoms/Title";
import { ViewCard } from "../molecules/ViewCard";

import {GetDribblePost} from "../../libs/dribblepost"
import Link from "next/link";

export const Work:VFC<Props> = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  const dribblePost = GetDribblePost();
  const items = dribblePost.items;



  if(isMobile) {
    return (
      <>
      <Box>
      <Title>Works</Title>
      
      {/* <Flex>
      <TabLink>All</TabLink>
      <TabLink>Web site</TabLink>
      <TabLink>Apps</TabLink>
      <TabLink>Flyers</TabLink>
      </Flex> */}

      <Text>実績は非公開になっています。</Text>
      </Box>

      <Box>
      <Title>Output</Title>
      <Text>Daily UIなど日々のアウトプットをDribbbleにUPしています</Text>
      <Link href="https://dribbble.com/nao_uru" passHref><Text mt={1} fontWeight="bold" cursor="pointer">アカウントはこちら</Text></Link>
      </Box>

      <SimpleGrid columns={1} spacingY='80px' m="auto" mt="16" w="80%">
      {items.map((item:any) => {
        return <ViewCard 
        key={item.id}
        title={item.title}
        img={item.images.hidpi}
        url={item.html_url}
        />
      })}
      {items.map((item:any) => {
        return console.log(item)
      })}
      </SimpleGrid>
      </>
    )
  }


  return(
    <>
    <ChakraProvider>

      <Box mb={20}>
      <Title>Works</Title>
      <Text>実績は非公開になっています。</Text>
      </Box>

      <Box>
      <Title>Output</Title>
      <Text>Daily UIなど日々のアウトプットをDribbbleにUPしています</Text>
      <Link href="https://dribbble.com/nao_uru" passHref><Text mt={1} fontWeight="bold" cursor="pointer">アカウントはこちら</Text></Link>
      </Box>
      <SimpleGrid columns={3} mt={12} spacingY={20} w="100%">
        {items.map((item:any) => {
        const date = item.published_at;
        const year = new Date(date).getFullYear();
        const month = new Date(date).getMonth();
        const day = new Date(date).getDate();

        return <ViewCard 
        key={item.id}
        title={item.title}
        img={item.images.hidpi}
        url={item.html_url}
        date={`${year}.${month}.${day}`}
        />
      })}
      {items.map((item:any) => {
        return console.log(item)
      })}
      </SimpleGrid>

    </ChakraProvider>
    </>
  )
}
