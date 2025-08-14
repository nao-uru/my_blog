import { Box, ChakraProvider, Flex, Spacer, useBreakpointValue, Link, } from "@chakra-ui/react";
import { css } from "@emotion/react";

import { Menu } from "../Parts/Menu";
import { ButtonPrime } from "../Parts/ButtonPrimary";

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

      <Flex w="100%" m='auto' pt={4} direction="column" justifyContent="center" alignItems="center" >

      <Link as="a" href="/" fontSize="xl" fontWeight="nomal" textAlign="center" >
          NAO OSAWA
      </Link>

      <Flex mt={4}>
      <ButtonPrime href="https://bento.me/naosawa" bgColor="#ffffff" target="brank"  wide="fit-content" color="#151515" icon={''}>SNS</ButtonPrime>
      <ButtonPrime href="mailto:nao.uru0419@gmail.com" bgColor="#23BA78" target=""  wide="fit-content" color="#ffffff" icon={''}>Contact</ButtonPrime>

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
      <Box h="240px" css={Border} pt={8} mt="52">
        <Box w="90%" m="auto">
          
        <Flex>


          <Link as="a" href="/" backgroundColor="transparent" fontSize="xl" fontWeight="nomal" >
          NAO OSAWA
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
    color: #25D088;
  }
`