import { Box, Paper, Typography } from "@mui/material";
import  CustomImageList  from "./ComponetGalery";

export function CommunityGalery(){
    return(
        <Paper sx={{mt:4,mb:8, p:4}}>
        <Typography variant="h5" fontWeight={'bold'}>Galeria</Typography>
        <Box sx={{display:'flex', alignItems:"center", alignContent:'center', justifyContent:'center'}}>
        <CustomImageList/>
        </Box>
        </Paper>
    )
}