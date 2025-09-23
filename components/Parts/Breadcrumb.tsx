import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useBreakpointValue, } from '@chakra-ui/react'
import { ChevronRightIcon } from "@chakra-ui/icons";
import { css } from '@emotion/react';


export const BreadcrumbList = ( props ) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  if(isMobile) {
    return (
      <>
      </>
    )
  }
  return(
    <>
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
    
     <BreadcrumbItem>
      <BreadcrumbLink css={sBread} href='/'>Home</BreadcrumbLink>
     </BreadcrumbItem>

     <BreadcrumbItem>
      <BreadcrumbLink css={sBread} href={props.tree1Link}>{props.tree1}</BreadcrumbLink>
     </BreadcrumbItem>

     <BreadcrumbItem>
      <BreadcrumbLink css={sBread} href={props.tree2Link}>{props.tree2}</BreadcrumbLink>
     </BreadcrumbItem>

    </Breadcrumb>
    </>
  );

}

const sBread = css`
 color: #222222;

 :hover {
  opacity: 0.7;
  background: #151515:
  text-decoration: none;
 }
`
