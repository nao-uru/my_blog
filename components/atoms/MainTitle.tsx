import { ChakraProvider, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";


export const MainTitle = ({children}) => {




  return (
    <>
    <ChakraProvider>
    <Link href="/" passHref>
    <Heading css={sMainTitle} size="lg">{children}</Heading>
    </Link>
    </ChakraProvider>
    </>
  )
}

const sMainTitle = css`
cursor: pointer;
 
 :hover {
   opacity: 0.8;
 }
`
