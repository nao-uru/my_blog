import React, { VFC } from "react";
import { css } from "@emotion/react";
import { Box, ChakraProvider,  Flex, useBreakpointValue, Heading, Link, Img, Button} from "@chakra-ui/react";

import { Menu } from "../molecules/Menu";

export const Header:VFC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });


  if(isMobile){
    return(
      <>
      <Box w='100%'  >
      <Flex w="100%" justify="space-between" alignItems="center" py={2} px={4} zIndex={60} position="fixed" css={sBack} mt={0} >
      <Link as="a" href="/" backgroundColor="transparent" fontSize="xl" fontWeight="bold" >
       NAO&#39;S JOURNAL
      </Link>
      <Menu />
      </Flex>
      </Box>
      </>
    )
  }

  return (
    <>
    <ChakraProvider>
      <Box w="100%" position="fixed" zIndex={60} css={sBack} >
        <Flex h="80px" w="80%" m="auto" align="flex-end" justify="space-between">

         <Flex align="flex-end">
         <Img src="/img/icon.png" alt="icon" width="10%" height="10%" />

          <Button as="a" href="/" backgroundColor="transparent" pb={2} fontSize="xl" fontWeight="bold" >
            NAO&#39;S JOURNAL
          </Button>

         </Flex>

         <Box pb={4}>
          <Menu />
         </Box>
        </Flex>
      </Box>
    </ChakraProvider>

    </>
  )
}

const sBack = css`
 background: rgba(231, 231, 231, 0.25);
 box-shadow: 0 8px 28px 0 rgba( 139, 142, 184, 0.1 );
 backdrop-filter: blur( 5px );
 -webkit-backdrop-filter: blur( 5px );
 border-radius: 2px;
 border: 1px solid rgba( 255, 255, 255, 0.1 );
`

