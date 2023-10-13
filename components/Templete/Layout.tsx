import React, { VFC } from "react";
import { ChakraProvider,Container, } from "@chakra-ui/react";
import { motion } from 'framer-motion';

import { BackTop } from "../Parts/BackTop";
import { Footer } from "./Footer";
import { Header } from "./Header";


export const Layout = ( {children} ) => {
  
  return(
    <>

    <ChakraProvider>
      <Header />

      <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} 
      >

      <Container maxW={{base:"90%", md:"1000px"}} m="auto" p="0" pt={{base:16,md:28}}>
        {children}
      </Container>

      </motion.div>

      <BackTop />
      <Footer />
    </ChakraProvider>
    </>
  )
};
