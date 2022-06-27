import { Box, ChakraProvider, SimpleGrid, Text } from "@chakra-ui/react";
import React, { VFC } from "react";
import { ImDribbble } from "react-icons/im";

import { Title } from "../atoms/Title";
import { ButtonPrime } from "../atoms/button/ButtonPrime";
import { ViewCard } from "../molecules/DribbbleCard";
import { GetDribblePost } from "../../libs/dribblepost";

export const Work = () => {

  const dribblePost = GetDribblePost();
  const items = dribblePost.items;
  console.log(items);

  return(
    <>
    <ChakraProvider>

      <Box>
      <Title>Works</Title>
      <Text>実績は非公開になっています。興味をお持ちの方はSNSやメールアドレスからご連絡ください!</Text>
      </Box>

      <Box>
      <Title>Output</Title>
      <Text mb={4} >Daily UIなど日々のアウトプットをDribbbleにUPしています</Text>
      <ButtonPrime 
      href="https://dribbble.com/nao_uru" 
      border="2px #cb7cab solid" 
      color="#cb7cab"
      icon={<ImDribbble color="#cb7cab" size={20} />} >アカウントはこちら！</ButtonPrime>
      </Box>
      <SimpleGrid columns={{base:1,md:3}} spacingY={{base:20,md:'80px'}} m='auto' w="100%" mt={12} >
        {items.map((item:any) => {

        return <ViewCard
        key={item}
        title={item.title}
        img={item.images.hidpi}
        url={item.html_url}
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
