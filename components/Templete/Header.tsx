import { Box, ChakraProvider,  Flex, useBreakpointValue, Link, Button} from "@chakra-ui/react";

import { Menu } from "../Parts/Menu";

export const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });


  if(isMobile){
    return(
      <>
      <Box w='100%'>
      <Flex w="100%" justify="space-between" alignItems="center" py={2} px={3} zIndex={60} position="fixed" mt={0} >
      <Link as="a" href="/" backgroundColor="transparent" fontSize="xl" fontWeight="nomal" >
       NAO OSAWA
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
      <Box w="100%" position="fixed" zIndex={60}>
        <Flex h="80px" w="80%" m="auto" align="flex-end" justify="space-between">

         <Flex align="flex-end">

          <Button as="a" href="/" backgroundColor="transparent" pb={4} fontSize="xl" fontWeight="nomal" >
            NAO OSAWA
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


