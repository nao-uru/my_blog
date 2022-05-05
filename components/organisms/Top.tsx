import { ChakraProvider,Text, Box, Image, Container } from "@chakra-ui/react";


export const Top = () => {
  
  const imgs = ["/img/spain.jpeg","/img/Chefchaouen.jpeg","/img/spain.jpeg"];
  let count =1;

  
  return(
    <>
    <ChakraProvider>
      <Container maxW="1200px" p="0" pt="24">
        <Box position="absolute" zIndex={10} top={{base:40,md:64}} left={{base:4, md:20}} >
        <Text fontSize={{base:"60px",md:"120px"}} fontWeight="bold">NAO&#39;S</Text>
        <Text fontSize={{base:"60px",md:"120px"}} fontWeight="bold">JOURNAL</Text>
        </Box>
        <Box>
        <Image position="relative" src={imgs[count]} ml="auto" mt={10} h="500px" w="80%" fit="cover" alt="Main Image"/>
        </Box>
      </Container>
    </ChakraProvider>
    </>
  )
}

