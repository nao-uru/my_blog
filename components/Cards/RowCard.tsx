import { ChakraProvider, Image, Text, Flex, Icon } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";


export const RowCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Flex py={{ base:4, md:8 }} px={{ base:6, md:10 }} gap={6} background={props.bgColor} rounded={16} flexDirection={{ base: "column", md: 'row' }}>
          <Image src={props.img} w={"300px"} alt="Main Image" rounded={8} /> 
          <Flex flexDirection={"column"} >
            <Flex alignSelf="stretch" h={"100%"} flexDirection={"column"}>
            <Text fontSize={{base:"18px",md:"24px"}} lineHeight="150%" color={props.textColor}>{props.title}</Text>
            <Text fontSize={{base:"14px",md:"16px"}} lineHeight="150%" color={props.textColor}>{props.text}</Text>
            </Flex>
            <Link href={props.link} passHref>
            <Flex css={sHover} h={{base:14 ,md:20 }} w={{base:14 ,md:20 }} border={"1px solid #CACACA"} rounded={4} ml={"auto"} justifyContent={"center"} alignItems={"center"}>
              <Icon as={AiOutlineArrowRight} boxSize={{ base: 8, md: 10 }} />
            </Flex>
            </Link>
          </Flex>
        </Flex>
    </ChakraProvider>
    </>
  )
}


const sHover = css`
  
  :hover {
  transition: 0.5s;
  opacity:0.7;
}
`
