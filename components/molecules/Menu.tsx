import React, { useState } from "react";
import { ChakraProvider, Flex,Box,} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useRouter } from "next/router"
import Link from "next/link";

import { HeaderLink } from "../atoms/HeaderLink";

export const Menu = () => {

  const [menu,setMenu] = useState(false);
  const location = useRouter();
  const path = location.pathname;
  
  return (
    <>
    <ChakraProvider>

    <Flex align="baseline">

    <Link href="/Blog" passHref>
    <Box mr="32px" css={path.startsWith('/Blog') ? sBorder:''}>
    <HeaderLink>Blog</HeaderLink>
    </Box>
    </Link>
    
    <Link href="/Work" passHref>
    <Box mr="32px" css={path.startsWith('/Work') ? sBorder:''}>
    <HeaderLink>Work</HeaderLink>
    </Box>
    </Link>

    <Link href="/About" passHref>
    <Box mr="32px" css={path.startsWith('/About') ? sBorder:''}>
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
