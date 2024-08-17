import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";


export  function PostHeader({name, title}:{name:string, title:string}){
   

    return(
        <Box  sx={{display:"flex", flexDirection:{xs:'column',sm:'row'}, gap:4}}>
            <Box >
                <Avatar>
                </Avatar>
                <Typography  variant="caption" > {name}</Typography>
            </Box>
            <Typography fontWeight={'bold'} variant="h5" > {title}</Typography>
            <Divider />
        </Box>
    )
}