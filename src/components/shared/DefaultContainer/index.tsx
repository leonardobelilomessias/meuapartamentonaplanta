import { Container } from "@mui/material";
import { ReactNode } from "react";

export  function DefaultContainer({children}:{children:ReactNode}){
   
    
    return(
        <Container maxWidth="lg" style={{minHeight:'90vH', marginTop:"2rem", marginBottom:"2rem"}} >
        {children}
        </Container>
    )
}