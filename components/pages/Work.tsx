import { Box, ChakraProvider, SimpleGrid, Text } from "@chakra-ui/react";
import { ImDribbble, } from "react-icons/im";
import { BsFillArrowRightCircleFill} from "react-icons/bs";

import { Title } from "../atoms/Title";
import { ButtonPrime } from "../atoms/button/ButtonPrime";
import { ViewCard } from "../molecules/DribbbleCard";
import { GetDribblePost } from "../../libs/dribblepost";
import { ButtonSecond } from "../atoms/button/ButtonSecond";

export const Work = () => {

  const dribblePost = GetDribblePost();
  const items = dribblePost.items;
  console.log(items);

  return(
    <>
    <ChakraProvider>

      <Box>
      <Title>Works</Title>
      <Text>実務実績は非公開になっています。興味をお持ちの方はSNSやメールアドレスからご連絡ください!</Text>
      </Box>

      <Box>
      <Title>Sample</Title>
      <Text mb={2}>サンプルとして制作した作品を掲載しております！</Text>
      <ButtonSecond 
      href="/Sample"
      color="#0da970" >サンプルはこちら</ButtonSecond>
      </Box>

      <Box>
      <Title>Output</Title>
      <Text mb={2}>Daily UIなど日々のアウトプットをDribbbleにUPしています<br />Dribbbleに上げる作品は自分の作りたいもの中心です☺︎</Text>
      <ButtonSecond 
      href="https://dribbble.com/nao_uru"
      target="_blank"
      color="#0da970" >アカウントはこちら！</ButtonSecond>
      </Box>
      <SimpleGrid columns={{base:1,md:3}} spacingY={{base:8,md:'80px'}} m='auto' w="100%" mt={12} >
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
