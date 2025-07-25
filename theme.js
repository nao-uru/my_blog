
import { extendTheme } from "@chakra-ui/react";


const colors = {
   brand:{
    "Primary": "#23BA78",
    "White": "#ffffff",
   },
    

  };
  
  // export const ChakraTheme = extendTheme(
  //   {
  //     colors: {
  //       brand,
  //     },
  //   },
  // )


  const customTheme = extendTheme({ colors,});

 export default customTheme;
