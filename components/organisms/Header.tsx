import React, { VFC } from "react";
import Image from "next/image";
import { Box, ChakraProvider,  Flex,  Center, useBreakpointValue, 
  useDisclosure, Stack,Drawer,DrawerOverlay,DrawerContent, DrawerCloseButton, 
  DrawerHeader, DrawerBody} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { HamburgerIcon } from "@chakra-ui/icons";


import { Menu } from "../molecules/Menu";
import { MainTitle } from "../atoms/MainTitle";
import Link from "next/link";

const Icon = require('../../public/img/icon.png')

export const Header:VFC = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null)
  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile){
    return(
      <>
      <Flex w="90%" m="auto" mt={4} justify="space-between">
      <Flex alignItems="baseline">
      <Image src="/img/icon.png" alt="icon" width="40px" height="50%" />
      <MainTitle>NAOS Journal</MainTitle>
      </Flex>
      <HamburgerIcon w={10} h={10} onClick={onOpen} />
      </Flex>


      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      <Box  css={Border} pb="16px">
        <Flex h="120px" align="flex-end" justify="space-between">

         <Box boxSize='80px' ml="120px">
         <Image src="/img/icon.png" alt="icon" width="80px" height="100%" />
         </Box>


         <Center>
           <MainTitle>NAOS Journal</MainTitle>
         </Center>

         <Box mr="72px">
          <Menu />
         </Box>


        </Flex>

      </Box>
    </ChakraProvider>

    </>
  )
}

const Border = css`
 border-bottom: 2px solid #E8E5DE;
`

const Navigation = () => {
  return (
    <Stack as="nav">
      <Link href="/burger">Burger</Link>
      <Link href="/sidemenu">Sidemenu</Link>
      <Link href="/drink">Drink</Link>
      <Link href="/takeout">Takeout</Link>
    </Stack>
  )
}
