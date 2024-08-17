import { Container, Paper } from "@mui/material";
import { ReactNode } from "react";


export  function DefaultCard({children}:{children:ReactNode}){
    return(
        <Paper sx={{p:4}} >
        {children}
        </Paper>
    )
}