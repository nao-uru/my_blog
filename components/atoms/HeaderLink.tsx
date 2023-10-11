import { Box, ChakraProvider, Heading, useBreakpointValue, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";

export const HeaderLink = ({children}) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  // if(isMobile) {
  //   return (
  //     <>
  //     <Box css={sHover} mt={4}>
  //      <Text size="md" pt="4px" h="100%">{children}</Text>
  //     </Box>
  //     </>
  //   )
  // }

// 使ってない

  return (
    <>
    <ChakraProvider>
      <Box css={sHover}>
       <Text size="sm" pt="4px" h="100%" fontWeight="bold">{children}</Text>
      </Box>
    </ChakraProvider>
    </> 
  )
}

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.7;
}
`
