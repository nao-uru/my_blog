import { ChakraProvider,Text, Box, Image,  } from "@chakra-ui/react";


export const Top = () => {
  
  const imgs = ["/img/spain.jpeg","/img/Chefchaouen.jpeg","/img/spain.jpeg"];
  let count = 0;

  
  return(
    <>
    <ChakraProvider>
      <Box>
        <Box position="absolute" zIndex={10} top={{base:40,md:64}} left={{base:4, md:20}} >
        <Text fontSize={{base:"60px",md:"120px"}} fontWeight="bold">NAO&#39;S</Text>
        <Text fontSize={{base:"60px",md:"120px"}} fontWeight="bold">JOURNAL</Text>
        </Box>
        <Image position="relative" src={imgs[count]} ml="auto" mt={10} h="500px" w={{base:"80%",md:"100%"}} fit="cover" alt="Main Image"/>
      </Box>
    </ChakraProvider>
    </>
  )
}

