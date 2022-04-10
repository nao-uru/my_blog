import React, { useState, VFC } from "react";
import { ChakraProvider, Flex,Box,} from "@chakra-ui/react";
import { css } from "@emotion/react";

import { HeaderLink } from "../atoms/HeaderLink";
import Link from "next/link";

export const Menu = () => {

  return (
    <>
    <ChakraProvider>

    <Flex align="baseline">

    <Link href="/Blog" passHref>
    <Box mr="32px">
    <HeaderLink>Blog</HeaderLink>
    </Box>
    </Link>
    
    <Link href="/Work" passHref>
    <Box mr="32px">
    <HeaderLink>Work</HeaderLink>
    </Box>
    </Link>

    <Link href="/About" passHref>
    <Box mr="32px">
    <HeaderLink>About</HeaderLink>
    </Box>
    </Link>

    <Link href="/Contact" passHref>
    <Box>
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
