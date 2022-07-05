import { Box, ChakraProvider, Flex, Spacer, useBreakpointValue, Heading, Link, border } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { HeaderLink } from "../atoms/HeaderLink";

import { Menu } from "../molecules/Menu";

export const Footer = () => {

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <ChakraProvider>
      <Box h="240px" css={Border} pt="4" mt="52">

      <Box pl={16}>

      <Link href="/">
      <HeaderLink>Top</HeaderLink>
      </Link>

      <Link href="/Blog" >
      <HeaderLink>Blog</HeaderLink>
      </Link>

      <Link href="/Work">
      <HeaderLink>Work</HeaderLink>
      </Link>

      <Link href="/About">
      <HeaderLink>About</HeaderLink>
      </Link>

      </Box>

      </Box>
      </ChakraProvider>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      <Box h="240px" css={Border} pt="4" mt="52">
        <Box w="90%" m="auto">
        <Flex align="baseline">

          <Link href="/" textDecoration="none">
           <a>
           <Heading css={sMainTitle} size="md">NAO&#39;S JOURNAL</Heading>
           </a>
          </Link>

          <Spacer />

          <Menu />
        </Flex>
        </Box>
      </Box>
    </ChakraProvider>
    </>
  )
}

const Border = css`
 border-top: 1px solid #C6CEDA;
`
const sMainTitle = css`
cursor: pointer;
 
 :hover {
   opacity: 0.8;
 }
`

