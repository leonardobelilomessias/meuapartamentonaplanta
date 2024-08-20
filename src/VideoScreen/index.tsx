import { DefaultCard } from "@/components/shared/CardContainer";
import { VideoPlayer } from "@/components/VideoPlayer";
import theme from "@/theme";
import { IVideoParams } from "@/types/types";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useState } from "react";
export function VideoScreen(){
    const [isLike, setIsLike]= useState(false)
    const data = {
        xs: { width: 300, height: 150 },  // Tela extra pequena (mobile)
        sm: { width: 480, height: 240 },  // Tela pequena (tablet)
        md: { width: 600, height: 300 },  // Tela média (desktop menor)
        lg: { width: 1000, height: 500 }, // Tela grande (desktop maior)
        xl: { width: 1000, height: 500 },  // Tela extra grande (larger desktop)
      };

let responsiveParams ={} as IVideoParams;

    function getResponsiveData(data:{xs:any,sm: any,md: any,lg:any, xl: any}){
        const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));
        const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
        const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
        const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));
        const matchesXl = useMediaQuery(theme.breakpoints.up('xl'));
  if (matchesXl) {
    return data.xl
  } else if (matchesLg) {
    return data.lg
  } else if (matchesMd) {
    return data.md
  } else if (matchesSm) {
    return data.sm
  } else if (matchesXs) {
    return  data.xs
  }

};
if (typeof window !== 'undefined') {
    // Salvar dados no localStorage
    responsiveParams = getResponsiveData(data) as IVideoParams
  }
    
    return(
        <Box marginTop={2}>
        <DefaultCard>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center", }}>
            <VideoPlayer {...responsiveParams}/>
            <Box>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:responsiveParams.width}}>
                    <Typography variant="caption"> 12596 Visualizações</Typography>
                    <Box sx={{display:'flex', alignItems:"center", }}>
                        <IconButton onClick={()=>{setIsLike(!isLike)}}>
                            {isLike   &&<ThumbUpAltIcon color={"primary"} /> }
                            
                            {!isLike&&<ThumbUpOffAltIcon color={"primary"} />}
                        </IconButton>
                    <Typography variant="caption"> 12596 </Typography>

                    </Box>
                </Box>
                <Typography fontWeight={'bold'} variant="h5" >Titulo do video{responsiveParams.width}</Typography>
                <Typography>Decrição do video</Typography>
            </Box>
        </Box>
        </DefaultCard>
        </Box>
    )
}