import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router"
import Link from "next/link";

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
    <Stack as="nav" w="40%" ml={4} mt={4}>

      <Link href="/" passHref>
      <Box mr={8} css={path.endsWith('/') ? sBorderLink:''}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%" fontWeight="bold" css={sHover}>Home</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/About" passHref>
      <Box mr={8} css={path.startsWith('/About') ? sBorderLink:''}  mt={2}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%" fontWeight="bold" css={sHover}>About</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/Work" passHref>
      <Box mr={8} css={path.startsWith('/Work') ? sBorderLink :''}  mt={2}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%" fontWeight="bold" css={sHover}>Work</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/Blog" passHref>
      <Box mr={8} css={path.startsWith('/Blog') ? sBorderLink:''}  mt={2}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%" fontWeight="bold" css={sHover}>Blog</Text>
      </Box>
      </Box>
      </Link>

      

      <Flex pt={8} gap={4 }>

      <Box css={sLink}>
      <Link href="https://twitter.com/naos_journal" passHref legacyBehavior>
      <a target="_blank">
      <AiOutlineTwitter size={40} />
      </a>
      </Link>
      </Box>
      
      <Box css={sLink}>
      <Link href="https://www.instagram.com/nao___daily/" passHref legacyBehavior>
      <a target="_blank">
      <AiOutlineInstagram size={40} />
      </a>
      </Link>
      </Box>
  
      {/* <Box css={sLink} >
      <Link href="https://www.youtube.com/channel/UCnBdJFjL13ySAZ0wLf7TrFg" passHref legacyBehavior>
      <a target="_blank">
      <AiOutlineYoutube size={40} />
      </a>
      </Link>
      </Box> */}

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
        placement="right"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent css={sOpen}>
            <DrawerCloseButton w={10} h={10} />
            <DrawerHeader>
              <Text>NAO&#39;S JOURNAL</Text>
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
    
    <Link href="/About" passHref>
    <Box mr={12} css={path.startsWith('/About') ? sBorder:''}>
    <Box css={sHover}>
    <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>About</Text>
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

    <Link href="/Blog" passHref>
    <Box css={sHover}>
    <Box mr={12} css={path.startsWith('/Blog') ? sBorder:''}>
    <Text size="sm" pt="4px" h="100%" fontWeight="bold" css={sHover}>Blog</Text>
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

    {/* <Box css={sLink}>
    <Link href="https://www.youtube.com/channel/UCnBdJFjL13ySAZ0wLf7TrFg" passHref legacyBehavior>
    <a target="_blank">
    <AiOutlineYoutube size={28} />
    </a>
    </Link>
    </Box> */}



    </Flex>

    </ChakraProvider>

    </>
  )
};


const sBorder = css`
 border-top: 2px solid #25D088;
`

const sBorderLink = css`
 border-bottom: 2px solid #25D088;
 padding-bottom: 8px;
`

const sLink = css`
  :hover {
    color: #25D088;
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