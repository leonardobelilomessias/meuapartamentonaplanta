import { Container, Paper } from "@mui/material";
import { CSSProperties, ReactNode } from "react";


export  function DefaultCard({children, style}:{children:ReactNode,style?:CSSProperties}){
    return(
        <Paper sx={{p:4, ...style}} >
        {children}
        </Paper>
    )
}