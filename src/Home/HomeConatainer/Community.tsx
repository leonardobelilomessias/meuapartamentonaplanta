import { People } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Rating, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { CommunityGalery } from "@/components/CommunityGalery";
import Link from "next/link";
import { useUserData } from "@/context/ContextAccount";
export function Community(){
    return(
        <>
        <TopCommunity/>
        <Forum/>
        <Depoimments/>
        </>
    )
}


function TopCommunity(){

    const randomNumber = Math.floor(Math.random() * 40) + 100;
    return(
        <Stack>
            <People color="primary"/>
            <Typography variant="caption"> {randomNumber} Pessoas online</Typography>
           
        </Stack>
    )
}

function Item(){
    return(
        <>
        <Box sx={{borderWidth:0.5,borderColor:"", border:" blue", marginBottom:"4px", p:1}}>
            <Typography color={'primary'} variant="body1">{truncateText("Amei o atendimento, graças a Deus encontrei esse empreendimento",500)}
            </Typography>
            <Box  sx={{flexDirection:"row"}}>
            <Typography  variant="caption" sx={{mr:4}} color={'GrayText'}>
                Fernanda Ventrine
            </Typography>
            <Typography  variant="caption" color={'GrayText'}>
               04/08/2024 10:45
            </Typography>
            </Box>
        </Box>
            <Divider/>
        </>
    )
}

function Forum(){
    return(
        <>
        <Paper sx={{p:2}}>
        <div style={{display:"flex",flexDirection:"column",  justifyContent:"space-between", padding:'1rem' }}>
        <Link style={{alignSelf:"end"}} href={'/novo-post'}>
            <Button style={{alignSelf:"end"}} size="small" variant="contained">Novo Topico</Button>
        </Link>
        <Typography variant="h5" sx={{margin:0,p:0,  fontWeight:"bold", display:"flex" ,alignItems:'center', alignContent:"center"}}>Conversas 
           <Typography ml={1} >{` (152)`}</Typography> 
        </Typography>
        </div>
        <div style={{display:'flex', flexDirection:"column"}}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Button sx={{mt:2,mb:0}}  > Ver Todos</Button>
        </div>
</Paper>
        </>
    )
}


function Depoimments(){
    return(
        <>
        <Paper sx={{p:2, mb:4,mt:4}}>
        <div style={{display:"flex",flexDirection:"column",  justifyContent:"space-between", padding:'1rem' }}>
        <Button style={{alignSelf:"end"}} size="small" variant="contained">Novo Depoimento</Button>
        <Typography variant="h5" sx={{margin:0,p:0,  fontWeight:"bold", display:"flex" ,alignItems:'center', alignContent:"center"}}>Depoimentos 
           <Typography ml={1} >{` (152)`}</Typography> 
        </Typography>
        </div>
        <div style={{display:'flex', flexDirection:"column"}}>
            <Rating name="read-only" value={4.4} readOnly 
             precision={0.5}
             size="small"
             emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Item/>
            <Rating name="read-only" value={4.4} readOnly 
             precision={0.5}
             size="small"
             emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Item/>

            <Button sx={{mt:2,mb:0}}  > Ver Todos</Button>
        </div>
    </Paper>
        </>
    )
}



const truncateText = (text:string, maxLength:number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

