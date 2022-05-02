import { ChakraProvider, Heading, useBreakpointValue } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";


export const MainTitle = ({children}) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <ChakraProvider>
      <Link href="/" passHref>
      <Heading css={sMainTitle} size="sm">{children}</Heading>
      </Link>
      </ChakraProvider>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
    <Link href="/" passHref>
    <Heading css={sMainTitle} size="md">{children}</Heading>
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
