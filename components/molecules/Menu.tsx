import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router"
import Link from "next/link";

import { HeaderLink } from "../atoms/HeaderLink";

import { 
  Box, ChakraProvider,  Flex, useBreakpointValue, 
  useDisclosure, Stack,Drawer,DrawerOverlay,DrawerContent, 
  DrawerCloseButton, DrawerHeader, DrawerBody
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MainTitle } from "../atoms/MainTitle";

const Navigation = () => {
  const location = useRouter();
  const path = location.pathname; 

  return (
    <Stack as="nav" w="40%" ml={4}>
      <Link href="/Blog" passHref>
      <Box mr={8} css={path.startsWith('/Blog') ? sBorderLink:''}>
      <HeaderLink>Blog</HeaderLink>
      </Box>
      </Link>

      <Link href="/Work" passHref>
      <Box mr={8} mt={8} css={path.startsWith('/Work') ? sBorderLink:''}>
      <HeaderLink>Work</HeaderLink>
      </Box>
      </Link>

      <Link href="/About" passHref>
      <Box mr={8} css={path.startsWith('/About') ? sBorderLink:''}>
      <HeaderLink>About</HeaderLink>
      </Box>
      </Link>

      <Link href="/Contact" passHref>
      <Box mr={8} css={path.startsWith('/Contact') ? sBorderLink:''}>
      <HeaderLink>Contact</HeaderLink>
      </Box>
      </Link>
    </Stack>
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
          <DrawerContent>
            <DrawerCloseButton w={10} h={10} />
            <DrawerHeader>
              <MainTitle>Naos Journal</MainTitle>
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

    <Flex align="baseline">

    <Link href="/Blog" passHref>
    <Box mr={12} css={path.startsWith('/Blog') ? sBorder:''}>
    <HeaderLink>Blog</HeaderLink>
    </Box>
    </Link>
    
    <Link href="/Work" passHref>
    <Box mr={12} css={path.startsWith('/Work') ? sBorder:''}>
    <HeaderLink>Work</HeaderLink>
    </Box>
    </Link>

    <Link href="/About" passHref>
    <Box mr={12} css={path.startsWith('/About') ? sBorder:''}>
    <HeaderLink>About</HeaderLink>
    </Box>
    </Link>

    <Link href="/Contact" passHref>
    <Box css={path.startsWith('/Contact') ? sBorder:''}>
    <HeaderLink>Contact</HeaderLink>
    </Box>
    </Link>

    </Flex>

    </ChakraProvider>

    </>
  )
};


const sBorder = css`
 border-top: 2px solid #6BA791;
`

const sBorderLink = css`
 border-bottom: 2px solid #6BA791;
 padding-bottom: 8px;
`
