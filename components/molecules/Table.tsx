import { ChakraProvider,Table, Tbody, Td, Tr, } from "@chakra-ui/react";
import React, { VFC } from "react";


export const TableContent:VFC = () => {

  return (
    <>
    <ChakraProvider>
      <Table w={{base:"100%", md:"80%"}} mr="auto">
        <Tbody>
          <Tr>
          <Td fontSize="md" fontWeight="bold">Name</Td>
          <Td fontSize="md">NAO OSAWA</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">Age</Td>
          <Td fontSize="md">26</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">Work</Td>
          <Td fontSize="md">Designer</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">Hobby</Td>
          <Td fontSize="md">Movie Manga</Td>
          </Tr>
          <Tr>
          <Td fontSize="md" fontWeight="bold">Contact</Td>
          <Td fontSize="sm">nao.uru0419@gmail.com</Td>
          </Tr>

        </Tbody>
      </Table>
    </ChakraProvider>
    </>
  )
}
