import { Box, ChakraProvider, Flex, Spacer, useBreakpointValue, Heading, Link, border, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { AiOutlineInstagram,AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";

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
      <Box h="240px" w="100%" css={Border} pt="4" m='auto' mt={16}>

      <Flex w="100%" m='auto' pt={8} direction="column" justifyContent="center" alignItems="center" >

      <Link as="a" href="/" fontSize="xl" fontWeight="nomal" textAlign="center" >
          NAO&#39;S JOURNAL
      </Link>

      <Flex mt={2}>
      <Box css={sLink} mr={8}>
      <Link href="https://twitter.com/naos_journal" target='_blank' >
      <AiOutlineTwitter size={40} />
      </Link>
      </Box>
      
      <Box css={sLink} mr={8}>
      <Link href="https://www.instagram.com/nao___daily/" target='_blank'>
      <AiOutlineInstagram size={40} />
      </Link>
      </Box>

      <Box css={sLink} mr={8}>
      <Link href="" target='_blank'>
      <AiOutlineYoutube size={40} />
      </Link>
      </Box>
      </Flex>

      </Flex>

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
          
        <Flex>


          <Link as="a" href="/" backgroundColor="transparent" fontSize="xl" fontWeight="nomal" >
          NAO&#39;S JOURNAL
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
`

const sLink = css`
  :hover {
    color: #0da970;
  }
`