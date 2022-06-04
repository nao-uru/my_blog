import { ChakraProvider,Container, } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import React, { VFC } from "react";
import { BackTop } from "../atoms/BackTop";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import dynamic from 'next/dynamic';

export const Layout:VFC<Props> = ( {children} ) => {

  const ScrollRevealContainer = dynamic(
    import('./Scroll'),
    {ssr: false,}
  );


  return(
    <>
    <ChakraProvider>
      <Header />
      <Container maxW={{base:"90%", md:"1000px"}} m="auto" p="0" pt={{base:16,md:28}}>
      {/* <ScrollRevealContainer> */}
        {children}
      {/* </ScrollRevealContainer> */}
      </Container>
      <BackTop />
      <Footer />
    </ChakraProvider>
    </>
  )
};
