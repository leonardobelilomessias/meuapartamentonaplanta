import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";

interface IPost{
    id:string 
    title:string
    message:string 
    name:string
    date:Date
}

export  function PostFooter(){
 

    return(
        <Box  sx={{display:"flex", flexDirection:'row', gap:10, marginTop:'2rem', marginBottom:0}}>
            <Typography variant="body1"  color={'primary'} > Comentários</Typography>
            <Typography variant="body1"  > Comentar</Typography>
            
        </Box>
    )
}