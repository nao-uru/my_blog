import { ChakraProvider,Table, Tbody, Td, Tr, } from "@chakra-ui/react";
import Link from "next/link";
import React, { VFC } from "react";
import { Title } from "../atoms/Title";


export const AboutTable:VFC = () => {

  return (
    <>
    <ChakraProvider>
      <Table w={{base:"100%", md:"60%"}} mt={10}>
        <Tbody >
          <Tr>
          <Td  fontSize="lg" fontWeight="bold">Name</Td>
          <Td  fontSize="lg">NAO OSAWA</Td>
          </Tr>

          <Tr>
          <Td fontSize="lg" fontWeight="bold">Age</Td>
          <Td fontSize="lg">26</Td>
          </Tr>

          <Tr>
          <Td fontSize="lg" fontWeight="bold">Work</Td>
          <Td fontSize="lg">Designer</Td>
          </Tr>

          <Tr>
          <Td fontSize="lg" fontWeight="bold">Hobby</Td>
          <Td fontSize="lg">Movie Manga</Td>
          </Tr>
          <Tr>
          <Td fontSize="lg" fontWeight="bold">Contact</Td>
          <Td fontSize="lg">nao.uru0419@gmail.com</Td>
          </Tr>

        </Tbody>
      </Table>
    </ChakraProvider>
    </>
  )
}
