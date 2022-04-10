import { ChakraProvider,Table, Tbody, Td, Tr, } from "@chakra-ui/react";
import React, { VFC } from "react";
import { SubTitle } from "../atoms/SubTitle";


export const ContactTable:VFC = () => {

  return (
    <>
    <ChakraProvider>
      <SubTitle>Contact</SubTitle>
      <Table w="400px" mt="8">
        <Tbody >
          <Tr>
          <Td  fontSize="lg" fontWeight="bold">Name</Td>
          <Td  fontSize="lg">NAO OSAWA</Td>
          </Tr>

          <Tr>
          <Td fontSize="lg" fontWeight="bold">Mail</Td>
          <Td fontSize="lg">nao.uru0419@gmail.com</Td>
          </Tr>

          <Tr>
          <Td fontSize="lg" fontWeight="bold">Phone</Td>
          <Td fontSize="lg" >080-4084-8419</Td>
          </Tr>

        </Tbody>
      </Table>
    </ChakraProvider>
    </>
  )
}
