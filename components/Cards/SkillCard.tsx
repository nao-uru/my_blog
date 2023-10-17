import { Box, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";

export const SkillCard = (props) => {

  return(
    <>
    <ChakraProvider>
      <Flex w="full" h="full" m="auto" p={2} borderRadius="xl" backgroundColor="#ffffff" alignItems="center" justifyContent="flex-start" gap={2}>
        <Image className="image" src={props.src} w="72px" h="72px" fit="cover" alt="Blog thubmnail" />
        <Box>
        <Text fontSize={18} fontWeight='bold'>{props.title}</Text>
        <Text fontSize={14}>{props.text}</Text>
        </Box>
      </Flex>
    </ChakraProvider>
    </>
  )
}
