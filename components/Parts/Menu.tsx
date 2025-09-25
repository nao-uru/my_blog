import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router"
import Link from "next/link";

import { 
  Box, ChakraProvider,  Flex, useBreakpointValue, 
  useDisclosure, Stack,Drawer,DrawerOverlay,DrawerContent, 
  DrawerCloseButton, DrawerHeader, DrawerBody, Text, 
} from "@chakra-ui/react";
import { ButtonPrime } from "./ButtonPrimary";
import { AiOutlineMenu } from "react-icons/ai";


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

      <Link href="/Article" passHref>
      <Box mr={8} css={path.startsWith('/Article') ? sBorderLink:''}  mt={2} w={"full"}>
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
      <Box  w={10} h={10} onClick={onOpen}><AiOutlineMenu size={32} color="#151515" /></Box>

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
              <Text fontWeight={"normal"}>NAO OSAWA</Text>
            </DrawerHeader>
            <DrawerBody>
              <Navigation />
              <Flex my={8}>
                <ButtonPrime href="https://bento.me/naosawa" bgColor="#ffffff" target="brank"  wide="fit-content" color="#151515" icon={''}>SNS</ButtonPrime>
                <ButtonPrime passHref href="/Portfolio" target=""  wide="fit-content" icon={''}>Portfolio</ButtonPrime>
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
    <Text size="sm" pt="6px" h="100%" fontWeight="nomal" css={sHover}>About Me</Text>
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

    <Link href="/Article" passHref>
    <Box css={sHover}>
    <Box mr={12} css={path.startsWith('/Article') ? sBorder:''}>
    <Text size="sm" pt="6px" h="100%" fontWeight="nomal" css={sHover}>Article</Text>
    </Box>
    </Box>
    </Link>

    <Flex>
       <ButtonPrime href="https://bento.me/naosawa" bgColor="#ffffff" target="brank"  wide="fit-content" color="#151515" icon={''}>SNS</ButtonPrime>
       <ButtonPrime href="/Portfolio" target=""  wide="fit-content" icon={''}>Portfolio</ButtonPrime>
    </Flex>
    
    </Flex>

    </ChakraProvider>

    </>
  )
};


const sBorder = css`
 border-top: 2px solid #1B756C;
`

const sBorderLink = css`
 border-bottom: 2px solid #1B756C;
 padding-bottom: 8px;
`

const sLink = css`
  :hover {
    color: #1B756C;
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