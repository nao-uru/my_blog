
import React from "react";
import { useRouter } from 'next/router'
import { ChakraProvider, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";
import Link from "next/link";

// 使ってない
// export const Back = () => {

//   const router = useRouter();
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   if(isMobile) {
//     return(
//       <>
//       <ChakraProvider>
//       <Link href="/Blog" passHref>
//       <Flex css={sHover} mb={10}>
//       <ChevronLeftIcon boxSize={8} />
//       <Text fontSize="xl" fontWeight="bold">Back</Text>
//       </Flex>
//       </Link>
//       </ChakraProvider>
//       </>
//     )
//   }

//   return (
//     <>
//     <ChakraProvider>
//       <Link passHref href="/Blog">
//       <Flex css={sHover} mb={20} >
//       <ChevronLeftIcon boxSize={8} />
//       <Text fontSize="xl" fontWeight="bold">Back</Text>
//       </Flex>
//       </Link>
//     </ChakraProvider>
//     </> 
//   )
// }

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.6;
}
`
