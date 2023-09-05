import { Box, ChakraProvider, Image, Heading, Flex, useBreakpointValue } from "@chakra-ui/react";
import React, { VFC } from "react";
import { css } from "@emotion/react";



export const ImgTitle = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  
  if(isMobile) {
    return (
      <>
      <Box position="relative">
      <Box position="absolute" bottom="14%" left="20%" zIndex={10}>
      <Flex align="center" css={sRouteSp}>
      <Box css={sRouteSp}></Box>
      <Heading as="h2" size="xl" mr="2" ml="2">{props.title}</Heading>
      <Box css={sBorderSp}></Box>
      </Flex>
      </Box>
     <Image src={props.url} h="200px" w="100%" fit="cover" alt="title with Image"/>
    </Box>
      </>
    )

  }

  

  return (
    <>
    
    <ChakraProvider>

    <Box position="relative" ml={4}>
      <Box position="absolute" bottom="50%" left="-260px" zIndex={10}>
       <Flex align="center" css={sRoute}>

      <Box css={sBorder}></Box>
      <Heading as="h2" size="xl" mr="2" ml="2">{props.title}</Heading>
      <Box css={sBorder}></Box>

      </Flex>
      </Box>
     <Image src={props.url} w='100%' h="100%" fit="cover" alt="title with Image"/>
    </Box>

    </ChakraProvider>


    </>
  )
}

const sBorder = css`
  width: 320px;
  margin: 0 auto;
  border-bottom: 2px solid white;
`

const sBorderSp = css`
  width: 160px;
  margin: 0 auto;
  border-bottom: 2px solid white;
`

const sRoute = css`
  color: white;
  transform: rotate(-90deg);
`

const sRouteSp = css`
  color: white;
`
