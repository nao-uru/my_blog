import { Box, ChakraProvider, Heading, useBreakpointValue} from "@chakra-ui/react";
import { css } from "@emotion/react";

export const HeaderLink = ({children}) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      <Box css={sHover} mt={4}>
       <Heading size="md" pt="4px" h="100%">{children}</Heading>
      </Box>
      </>
    )
  }



  return (
    <>
    <ChakraProvider>
      <Box css={sHover}>
       <Heading size="sm" pt="4px" h="100%">{children}</Heading>
      </Box>
    </ChakraProvider>
    </> 
  )
}

const sHover = css`
cursor: pointer;
:hover {
  opacity: 0.8;
}
`
