import { Container } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

export  function DefaultContainer({children,style}:{children:ReactNode,style?:CSSProperties}){
   
    
    return(
        <Container maxWidth="lg" style={{minHeight:'90vH', marginTop:"2rem", marginBottom:"2rem",display:"flex", flexDirection:"column",...style}} >
        {children}
        </Container>
    )
}