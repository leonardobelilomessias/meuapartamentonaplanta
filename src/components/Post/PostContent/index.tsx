import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";


export  function PostContent({message}:{message:string}){
   

    return(
        <Box  sx={{display:"flex", flexDirection:{xs:'column',sm:'row'}, gap:4, marginTop:'3rem', marginBottom:'3rem'}}>
            <Typography variant="body1"  > {message}</Typography>
            <Divider />
        </Box>
    )
}