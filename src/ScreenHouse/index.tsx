
import { CarouselHouse } from "@/components/CarouselHouse";
import { Layout } from "@/components/Layout";
import { DefaultCard } from "@/components/shared/CardContainer";
import { DefaultContainer } from "@/components/shared/DefaultContainer";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ListFeaturesHome } from "@/components/ListFeaturesHome";
import GoogleMapReact from 'google-map-react';


export  function ScreenHouse({id}:{id:string}){
    return(

        <DefaultContainer style={{paddingTop:0}}>
            <CarouselHouse/>
                {/* <DefaultCard>
                </DefaultCard> */}
                <DefaultCard style={{paddingTop:'0.5rem',}}>
                    <TitleHouse/>
                    <DescriptionHouse/>
                    <ListFeaturesHome/>    
                    <LocationHouse/>                    
                </DefaultCard>
            </DefaultContainer>

    )
}

function TitleHouse(){
    return(
    <Box sx={{mb:'1.2rem'}}>
        <Typography fontWeight={'600'} variant="h3" sx={{m:0, p:0, }}>Condominio Sevilha</Typography>
        <Typography sx={{display:"flex",flexDirection:"row",lineHeight:'20px', fontSize:'1.2rem'}} variant="body1" color="primary">
        <LocationOnIcon sx={{fontSize:'1.2rem' , lineHeight:'10px'}} />
            São Gabriel - Belo Horizonte
        </Typography>
    </Box>
    )
}

function DescriptionHouse(){
    return(
    <Box sx={{mb:'1.5rem'}}>
        <Typography variant="h5" fontWeight={'600'}>Descrição:</Typography>
        <Typography variant="body1">
            {`Novolar Sevilha é a oportunidade de morar perto do que você precisa, com comércios, mercados, padarias,
            farmácias e restaurantes, na estrutura e mobilidade do São Gabriel. Um bairro completo e cheio de vida, onde 
            você pode criar raízes e rotinas só suas.`}
        </Typography>
    </Box>
)
}

function LocationHouse(){
    return(
        <Stack>
        <Typography variant="h5" fontWeight={'600'}>Localização no mapa:</Typography>
        </Stack>
    )
}
