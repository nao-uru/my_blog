import React, { VFC } from "react";
import { Props } from "framer-motion/types/types";
import { ChakraProvider,Container, } from "@chakra-ui/react";
import { motion } from 'framer-motion';

import { BackTop } from "../atoms/BackTop";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const LayoutWide:VFC<Props> = ( {children} ) => {
  
  return(
    <>

    <ChakraProvider>
      <Header />

      <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} 
      >

      <Container maxW={{base:"95%", md:"1200px"}} m="auto" p="0" pt={{base:16,md:28}}>
        {children}
      </Container>

      </motion.div>

      <BackTop />
      <Footer />
    </ChakraProvider>
    </>
  )
};
