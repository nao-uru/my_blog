import { ChakraProvider, Heading, useBreakpointValue } from "@chakra-ui/react";


export const Title = ({children}) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return(
      <>
      <Heading as="h4" size="md" mb={4} mt={6}>{children}</Heading>
      </>
    )
  }


  return (
    <>
    <ChakraProvider>
    <Heading as="h2" size="lg" mt={12} mb={4}>{children}</Heading>
    </ChakraProvider>
    </>
  )
}
