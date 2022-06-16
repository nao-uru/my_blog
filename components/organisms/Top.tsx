import { ChakraProvider,Text, Box, Image, Flex, keyframes,  } from "@chakra-ui/react";

export const Top = () => {

  const imgs = ["/img/top-img.png","/img/top-img2.png","/img/top-img3.png"];
  
  return(
    <>
    <ChakraProvider>
      <Flex justifyContent="end" w="100%">
        <Image src={`${imgs[2]}`} h="auto" w={{base:"80%",md:"100%"}} fit="contain" alt="Main Image"/>

        <Box position="absolute" zIndex={10} top={{base:40,md:80}} left={{base:4, md:20}} >
        <Text fontSize={{base:"60px",md:"120px"}} fontWeight="bold">NAO&#39;S</Text>
        <Text fontSize={{base:"60px",md:"120px"}} fontWeight="bold">JOURNAL</Text>
        </Box>
      </Flex>
    </ChakraProvider>
    </>
  )
}

