import { ChakraProvider,Container, } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import React, { VFC } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const Layout:VFC<Props> = ( {children} ) => {

  return(
    <>
    <ChakraProvider>
      <Header />
      <Container maxW={{base:"80%", md:"1000px"}} m="auto" p="0" pt={{base:16,md:20}}>
        {children}
      </Container>
      <Footer />
    </ChakraProvider>
    </>
  )
};
