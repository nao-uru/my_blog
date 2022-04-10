import { Box, ChakraProvider, Flex, SimpleGrid} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import React, { VFC } from "react";
import { TabLink } from "../atoms/TabLink";
import { Title } from "../atoms/Title";
import { ViewCard } from "../molecules/ViewCard";


export const Work:VFC<Props> = () => {


  return(
    <>
    <ChakraProvider>

      <Box>
      <Title>Works</Title>
      
      <Flex mt={10}>
      <TabLink>All</TabLink>
      <TabLink>Web site</TabLink>
      <TabLink>Apps</TabLink>
      <TabLink>Flyers</TabLink>
      </Flex>

      </Box>


      <SimpleGrid columns={3} spacingY='80px' m="auto" mt="16" w="100%">
        <Box w="100%" m="auto"><ViewCard title="Web site1" /></Box>
        <Box w="100%" m="auto"><ViewCard title="Web site1" /></Box>
        <Box w="100%" m="auto"><ViewCard title="Web site1" /></Box>
        <Box w="100%" m="auto"><ViewCard title="Web site1" /></Box>
        <Box w="100%" m="auto"><ViewCard title="Web site1" /></Box>
        <Box w="100%" m="auto"><ViewCard title="Web site1" /></Box>

      </SimpleGrid>

    </ChakraProvider>
    </>
  )
}
