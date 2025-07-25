import { Box, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";

export const SkillCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Flex w="full" h="full" m="auto" p={4} borderRadius="xl" backgroundColor="#ffffff" alignItems="center" justifyContent="flex-start" gap={2}>
        <Image className="image" src={props.src} w="56px" h="56px" fit="cover" alt="Blog thubmnail" />
        <Box>
        <Text fontSize={14} lineHeight={"150%"}>{props.text}</Text>
        </Box>
      </Flex>
    </ChakraProvider>
    </>
  )
}
