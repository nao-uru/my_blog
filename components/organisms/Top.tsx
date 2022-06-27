import { ChakraProvider,Text, Box, Image, Heading, Center, chakra, Img, } from "@chakra-ui/react";
import { Scroll, Keyframes } from "scrollex";
import { ButtonSecond } from "../atoms/button/ButtonSecond";
import { Title } from "../atoms/Title";
import { css } from "@emotion/react";

const ScrollItem = chakra(Scroll.Item);
const ScrollSection = chakra(Scroll.Section);
const ScrollContainer = chakra(Scroll.Container);

const keyframes: Record<string, Keyframes> = {
  imageContainer: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateY: 125,
      translateX: -250,
      opacity: 0,
      rotateX: -25,
      rotateY: -50,
      scale: 0.4
    },
    [section.topAt("container-top")]: {
      translateY: 0,
      translateX: 0,
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      scale: 1.4
    },
    [section.bottomAt("container-top")]: {
      translateY: -125,
      translateX: 250,
      opacity: 0,
      rotateX: 25,
      rotateY: 50,
      scale: 0.4
    }
  }),
  image: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateY: -62.5,
      translateX: 125,
      scale: 1.8
    },
    [section.topAt("container-top")]: {
      translateY: 0,
      translateX: 0,
      scale: 1.5
    },
    [section.bottomAt("container-top")]: {
      translateY: 62.5,
      translateX: -125,
      scale: 2
    }
  })
};

const images = [
  "/img/top-img.png",
  "/img/top-img2.png",
  "/img/top-img3.png",
];

export const Top = () => {
  return(
    <>
    <ChakraProvider>

    <ScrollContainer scrollAxis="y" height="100vh" scrollSnapType="y mandatory">
        {images.map((img) => {
          return (
          <>
          <ScrollSection height="100vh" scrollSnapAlign="start">
            <Center pos="fixed" inset={0} style={{ perspective: 600, transformStyle: "preserve-3d" }} >
              <ScrollItem keyframes={keyframes.imageContainer} overflow="hidden">
                <ScrollItem keyframes={keyframes.image}>
                  <Img css={sImage} key={img} src={img} alt="top-image" />
                </ScrollItem>
              </ScrollItem>
            </Center>
          </ScrollSection>
          </>
          )
        })}
    </ScrollContainer>

      <Box css={sShape} w={{base:'90%',md:'700px'}} h={{base:'400px',md:'600px'}} position="absolute" zIndex={20} top={{base:40,md:64}} left={{base:2, md:24}}>
        <Text ml={{base:"8",md:"0"}} mt={{base:"16",md:"0"}} fontSize={{base:"56px",md:"120px"}} fontWeight="bold">NAO&#39;S</Text>
        <Text ml={{base:"8",md:"0"}} fontSize={{base:"56px",md:"120px"}} fontWeight="bold">JOURNAL</Text>
      </Box>

      <Box w={{base:"100%",md:"80%"}}  m="auto" mb={40}>
        
      <Heading size="2xl" mt={{base:12,md:40}}>Wel Come!</Heading>
      <Text size="md" lineHeight="7" mt={2} >
        ご訪問いただきありがとうございます! 大澤菜央のHPです。<br />
        公開してから約1ヶ月、新たな機能をつけたり、デザインをブラッシュアップしたりと日々アップデートを図っています!<br />
        ぜひ気になったページから見てみてください✨
      </Text>

      <Box mt={20} borderTop='1px solid #222222' >
        <Title>Blog</Title>
        <Text size="md" lineHeight="7" >勉強した知識を言語化するために、デザインや読書に関することを中心に発信しています！<br />
        </Text>

        <ButtonSecond href="/Blog" color="#6BA791">Blog</ButtonSecond>
      </Box>

      <Box mt={20} borderTop='1px solid #222222'>
        <Title>Works</Title>
        <Text size="md" lineHeight="7" >
          Dribbbleに練習として作成したデザインをUPしています!<br />
         実際に携わったお仕事に関しては非公開させていただいています。<br />
         ご興味をお持ちの方はお気軽にお問い合わせください☺︎
        </Text>
        <ButtonSecond href="/Work" color="#6BA791">Works</ButtonSecond>
      </Box>
      
      <Box mt={20} borderTop='1px solid #222222'>
        <Title>About</Title>
        <Text size="md" lineHeight="7">
          自己紹介のページです！

        </Text>
        <ButtonSecond href="/About" color="#6BA791">About</ButtonSecond>
      </Box>

      </Box>
    </ChakraProvider>
    </>
  )
}

const sImage = css`
 border-radius: 100px;
 width: 100%;
 height: 500px;
 object-fit: contain;
`

const sShape = css`
 background-image: url('/svg/main.svg');
 background-size: cover;
 background-position: center;
`
