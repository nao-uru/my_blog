import { ChakraProvider,Container} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import React, { VFC } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const Layout:VFC<Props> = ( {children} ) => {

  return(
    <>
    <ChakraProvider>
      <Header />
      <Container maxW="1000px" p="0" pt={{base:4,md:24}}>
        {children}
      </Container>
      <Footer />
    </ChakraProvider>
    </>
  )
};
