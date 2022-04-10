import { ChakraProvider,Table, Tbody, Td, Tr, } from "@chakra-ui/react";
import React, { VFC } from "react";
import { SubTitle } from "../atoms/SubTitle";


export const AboutTable:VFC = () => {

  return (
    <>
    <ChakraProvider>
      <SubTitle>Intoroduce</SubTitle>
      <Table w="400px" mt="8">
        <Tbody >
          <Tr>
          <Td  fontSize="lg" fontWeight="bold">Name</Td>
          <Td  fontSize="lg">NAO OSAWA</Td>
          </Tr>

          <Tr>
          <Td fontSize="lg" fontWeight="bold">Age</Td>
          <Td fontSize="lg">25</Td>
          </Tr>

          <Tr>
          <Td fontSize="lg" fontWeight="bold">Work</Td>
          <Td fontSize="lg">Designer</Td>
          </Tr>

          <Tr>
          <Td fontSize="lg" fontWeight="bold">Hobby</Td>
          <Td fontSize="lg">Movie Manga</Td>
          </Tr>

        </Tbody>
      </Table>
    </ChakraProvider>
    </>
  )
}
