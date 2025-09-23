import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router"
import Link from "next/link";

import { 
  Box, ChakraProvider,  Flex, useBreakpointValue, 
  useDisclosure, Stack,Drawer,DrawerOverlay,DrawerContent, 
  DrawerCloseButton, DrawerHeader, DrawerBody, Text, 
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ButtonPrime } from "../Parts/ButtonPrimary";


const Navigation = () => {
  const location = useRouter();
  const path = location.pathname; 

  return (
    <Box>
    <Stack as="nav" w="40%" ml={2} mt={4}>

      <Link href="/" passHref>
      <Box mr={8} css={path.endsWith('/') ? sBorderLink:''} w={"full"}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%" css={sHover}>Home</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/What" passHref>
      <Box mr={8} css={path.endsWith('/What') ? sBorderLink:''} w={"full"}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%" css={sHover} >What I Do</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/About" passHref>
      <Box mr={8} css={path.startsWith('/About') ? sBorderLink:''}  mt={2} w={"full"}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%"  css={sHover}>About</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/Work" passHref>
      <Box mr={8} css={path.startsWith('/Work') ? sBorderLink :''}  mt={2} w={"full"}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%"  css={sHover}>Work</Text>
      </Box>
      </Box>
      </Link>

      <Link href="/Blog" passHref>
      <Box mr={8} css={path.startsWith('/Blog') ? sBorderLink:''}  mt={2} w={"full"}>
      <Box css={sHover}>
      <Text fontSize={20} pt="4px" h="100%"  css={sHover}>Article</Text>
      </Box>
      </Box>
      </Link>

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
              <Text>NAO OSAWA</Text>
            </DrawerHeader>
            <DrawerBody>
              <Navigation />
              <Flex my={8}>
                <ButtonPrime href="https://bento.me/naosawa" bgColor="#ffffff" target="brank"  wide="fit-content" color="#151515" icon={''}>SNS</ButtonPrime>
                <ButtonPrime passHref href="/Portfolio" bgColor="#23BA78" target=""  wide="fit-content" color="#ffffff" icon={''}>Portfolio</ButtonPrime>
                </Flex>
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
    <Text size="sm" pt="6px" h="100%" fontWeight="nomal">Home</Text>
    </Box>
    </Box>
    </Link>
    
    <Link href="/About" passHref>
    <Box mr={12} css={path.startsWith('/About') ? sBorder:''}>
    <Box css={sHover}>
    <Text size="sm" pt="6px" h="100%" fontWeight="nomal" css={sHover}>About</Text>
    </Box>
    </Box>
    </Link>

    <Link href="/What" passHref>
    <Box mr={12} css={path.startsWith('/What') ? sBorder:''}>
    <Box css={sHover}>
    <Text size="sm" pt="6px" h="100%" fontWeight="nomal" css={sHover}>What I Do</Text>
    </Box>
    </Box>
    </Link>
    
    
    <Link href="/Work" passHref>
    <Box css={sHover}>
    <Box mr={12} css={path.startsWith('/Work') ? sBorder:''}>
    <Text size="sm" pt="6px" h="100%" fontWeight="nomal" css={sHover}>Work</Text>
    </Box>
    </Box>
    </Link>

    <Link href="/Blog" passHref>
    <Box css={sHover}>
    <Box mr={12} css={path.startsWith('/Blog') ? sBorder:''}>
    <Text size="sm" pt="6px" h="100%" fontWeight="nomal" css={sHover}>Article</Text>
    </Box>
    </Box>
    </Link>

    <Flex>
       <ButtonPrime href="https://bento.me/naosawa" bgColor="#ffffff" target="brank"  wide="fit-content" color="#151515" icon={''}>SNS</ButtonPrime>
       <ButtonPrime href="/Portfolio" bgColor="#23BA78" target=""  wide="fit-content" color="#ffffff" icon={''}>Portfolio</ButtonPrime>
    </Flex>
    
    </Flex>

    </ChakraProvider>

    </>
  )
};


const sBorder = css`
 border-top: 2px solid #23BA78;
`

const sBorderLink = css`
 border-bottom: 2px solid #23BA78;
 padding-bottom: 8px;
`

const sLink = css`
  :hover {
    color: #23BA78;
  }
`

const sOpen = css`
 background-color: #F5F5F5;
`
const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.7;
}
`