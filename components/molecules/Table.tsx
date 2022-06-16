import { ChakraProvider,color,Table, Tbody, Td, Tr, } from "@chakra-ui/react";
import Link from "next/link";
import React, { VFC } from "react";


export const TableContent:VFC = () => {

  return (
    <>
    <ChakraProvider>
      <Table w={{base:"100%", md:"80%"}} mr="auto" mt={4}>
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
          <Td fontSize="md">デザイナー、コーダー</Td>
          </Tr>

          <Tr>
          <Td fontSize="md" fontWeight="bold">Hobby</Td>
          <Td fontSize="md">旅行、映画、漫画</Td>
          </Tr>
          <Tr>
          <Td fontSize="md" fontWeight="bold">E-Mail</Td>
          <Td fontSize="sm" _hover={{color:"#6BA791"}}><Link href="mailto:nao.uru0419@gmail.com">nao.uru0419@gmail.com</Link></Td>
          </Tr>

        </Tbody>
      </Table>
    </ChakraProvider>
    </>
  )
}
