import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router"
import Link from "next/link";

// import { HeaderLink } from "../atoms/HeaderLink";

import { 
  Box, ChakraProvider,  Flex, useBreakpointValue, 
  useDisclosure, Stack,Drawer,DrawerOverlay,DrawerContent, 
  DrawerCloseButton, DrawerHeader, DrawerBody, Heading, Text
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineInstagram,AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";


const Navigation = () => {
  const location = useRouter();
  const path = location.pathname; 

  return (
    <Box>
    <Stack as="nav" w="40%" ml={4} mt={8}>

      <Link href="/" passHref>
      <Box mr={8} css={path.endsWith('/') ? sBorderLink:''}>
      <Box css={sHover}>
      <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>Home</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/Blog" passHref>
      <Box mr={8} css={path.startsWith('/Blog') ? sBorderLink:''}>
      <Box css={sHover}>
      <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>Blog</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/Work" passHref>
      <Box mr={8} css={path.startsWith('/Work') ? sBorderLink :''}>
      <Box css={sHover}>
      <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>Work</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/About" passHref>
      <Box mr={8} css={path.startsWith('/About') ? sBorderLink:''}>
      <Box css={sHover}>
      <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>About</Text>
      </Box>
      </Box>
      </Link>

      <Flex pt={8}>

      <Box css={sLink} mr={8}>
      <Link href="https://twitter.com/naos_journal" passHref legacyBehavior>
      <a target="_blank">
      <AiOutlineTwitter size={40} />
      </a>
      </Link>
      </Box>
      
      <Box css={sLink} mr={8}>
      <Link href="https://www.instagram.com/nao___daily/" passHref legacyBehavior>
      <a target="_blank">
      <AiOutlineInstagram size={40} />
      </a>
      </Link>
      </Box>
  
      <Box css={sLink} mr={8}>
      <Link href="https://www.youtube.com/channel/UCnBdJFjL13ySAZ0wLf7TrFg" passHref legacyBehavior>
      <a target="_blank">
      <AiOutlineYoutube size={40} />
      </a>
      </Link>
      </Box>

      </Flex>


    </Stack>
    </Box>
  )
}

export const Menu = () => {

  const location = useRouter();
  const path = location.pathname;  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null)

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <ChakraProvider>
      <HamburgerIcon w={10} h={10} onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent css={sOpen}>
            <DrawerCloseButton w={10} h={10} />
            <DrawerHeader>
              <Link href='/' passHref>
              <Heading css={sMainTitle} size="md">NAO&#39;S JOURNAL</Heading>
              </Link>
            </DrawerHeader>
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      </ChakraProvider>
      </>
    )
  }


  return (
    <>
    <ChakraProvider>

    <Flex align="baseline" alignItems="center">

    <Link href="/" passHref>
    <Box  css={sHover}>
    <Box mr={12} css={path.endsWith('/') ? sBorder:''}>
    <Text size="sm" pt="4px" h="100%" fontWeight="bold">Home</Text>
    </Box>
    </Box>
    </Link>
    
    <Link href="/Blog" passHref>
    <Box css={sHover}>
    <Box mr={12} css={path.startsWith('/Blog') ? sBorder:''}>
    <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>Blog</Text>
    </Box>
    </Box>
    </Link>
    
    <Link href="/Work" passHref>
    <Box css={sHover}>
    <Box mr={12} css={path.startsWith('/Work') ? sBorder:''}>
    <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>Work</Text>
    </Box>
    </Box>
    </Link>

    <Link href="/About" passHref>
    <Box mr={12} css={path.startsWith('/About') ? sBorder:''}>
    <Box css={sHover}>
    <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>About</Text>
    </Box>
    </Box>
    </Link>

    <Box css={sLink} mr={4}>
    <Link href="https://twitter.com/naos_journal" passHref legacyBehavior>
    <a target="_blank">
    <AiOutlineTwitter size={28} />
    </a>
    </Link>
    </Box>
    
    <Box css={sLink} mr={4}>
    <Link href="https://www.instagram.com/nao___daily/" passHref legacyBehavior>
    <a target="_blank">
    <AiOutlineInstagram size={28} />
    </a>
    </Link>
    </Box>

    <Box css={sLink}>
    <Link href="https://www.youtube.com/channel/UCnBdJFjL13ySAZ0wLf7TrFg" passHref legacyBehavior>
    <a target="_blank">
    <AiOutlineYoutube size={28} />
    </a>
    </Link>
    </Box>



    </Flex>

    </ChakraProvider>

    </>
  )
};


const sBorder = css`
 border-top: 2px solid #0da970;
`

const sBorderLink = css`
 border-bottom: 2px solid #0da970;
 padding-bottom: 8px;
`
const sMainTitle = css`
cursor: pointer;
 
 :hover {
   opacity: 0.8;
 }
`
const sLink = css`
  :hover {
    color: #0da970;
  }
`

const sOpen = css`
 background-color: #E6E9EF;
`
const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.7;
}
`