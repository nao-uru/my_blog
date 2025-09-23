import { Box, ChakraProvider,Container,type BoxProps, } from "@chakra-ui/react";
import { motion } from 'framer-motion';

import { BackTop } from "../Parts/BackTop";
import { Footer } from "./Footer";
import { Header } from "./Header";

const MotionBox = motion(Box);

type LayoutProps = {
  children: React.ReactNode;
  bg?: BoxProps["bg"];
};

export const Layout = ({ children, bg, }: LayoutProps) => {

  return(
    <>

    <ChakraProvider>
      <Box bg={bg}>
          <Header />

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container maxW={{ base: "96%", md: "1200px" }} m="auto">
              {children}
            </Container>
          </MotionBox>

          <BackTop />
          <Footer />
        </Box>
    </ChakraProvider>
    </>
  )
};

