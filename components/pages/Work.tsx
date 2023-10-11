import { Box, ChakraProvider, SimpleGrid, Text, Image, Container, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ViewCard } from "../molecules/DribbbleCard";
import { GetDribblePost } from "../../libs/dribblepost";
import { ButtonPrime } from "../atoms/button/ButtonPrime";
import { ButtonSecond } from "../atoms/button/ButtonSecond";
import { LatestCard } from "../molecules/LatestCard";

export const Work = () => {

  const dribblePost = GetDribblePost();
  const items = dribblePost.items;
  console.log(items);

  return(
    <>
    <ChakraProvider>

      <Box mt={4}>
      <Text fontSize={{base:"40px",md:"64px"}} lineHeight="none">Works</Text>
      </Box>

      <Box css={sFull} backgroundColor="#ffffff" py={8} mt={12}>
      <Flex maxW={{base:"90%", md:"1000px"}} direction={{base:"column", md:"row"}} justifyContent="space-between" alignItems="center" m="auto">
      <Box>
      <Text fontWeight='bold' fontSize={{base:"24px",md:"40px"}}>IDEAL ME</Text>
      <Image src={"/img/IdeallMe.png"} borderRadius={4} alt="Work thubmnail" w="400px"  fit='cover' />
      </Box>
      <Box>
        <Box>
        <LatestCard 
        title="IDEAL ME 要件定義・価値定義" 
        url="images.ctfassets.net/dd0roywjqx3t/5OUZIh5kUUhO9YScnNHPm9/56517bfe23ccadd49908a5e11b46dc4b/Thubmneil.png" 
        slug="https://www.naosjournal.com/IdealMe_concept" />
        <LatestCard 
        title="IDEAL ME ワイヤーフレーム・デザイン制作" 
        url="images.ctfassets.net/dd0roywjqx3t/4WmBoTIWroXZv5bvPraDvQ/1ba265402aece2f00c78d43ddf846600/Thubmneil-1.png" 
        slug="https://www.naosjournal.com/IdealMe_design" />
        </Box>
        <Text fontWeight='nomal' fontSize="md" mt={1}>説明</Text>
        <Flex direction={{base:'column', md:"row"}} gap={2} mt={2}>
        <ButtonPrime href="/About" bgColor="#25D088" target="" color="#ffffff" icon={''}>figmaファイルはこちら</ButtonPrime>
        <ButtonPrime href="/About" bgColor="#25D088" target="" color="#ffffff" icon={''}>PDFで見る</ButtonPrime>
        </Flex>
      </Box>
        </Flex>
      </Box>


      <Box mt={4}>
      <Text fontSize={{base:"24px",md:"40px"}} lineHeight="none">Dribble</Text>
      <Text>デザイン学習を始めた時に作成していたものです。初期の制作物なので暖かい目で見ていただけると幸いです。</Text>
      </Box>
      <SimpleGrid columns={{base:1,md:3}} spacingY={{base:8,md:'80px'}} m='auto' w="100%" mt={4} >
        {items.map((item:any) => {

        return <ViewCard
        key={item}
        title={item.title}
        img={item.images.hidpi}
        url={item.html_url}
        />
      })}
      </SimpleGrid>

    </ChakraProvider>
    </>
  )
}

const sFull = css`
margin-right: calc(50% - 50vw);
margin-left: calc(50% - 50vw);
`