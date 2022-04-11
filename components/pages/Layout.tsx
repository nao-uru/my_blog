import { ChakraProvider,Container} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import React, { memo, VFC } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const Layout:VFC<Props> = ( {children} ) => {


  return(
    <>
    <ChakraProvider>
      <Header />
      <Container maxW="1000" minH="100vh" p="0" pt="10">
        
        {/* {props.page} */}
        {children}

      </Container>
      <Footer />
    </ChakraProvider>
    </>
  )
};
