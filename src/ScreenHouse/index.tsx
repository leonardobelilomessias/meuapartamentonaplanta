
import { CarouselHouse } from "@/components/CarouselHouse";
import { Layout } from "@/components/Layout";
import { DefaultCard } from "@/components/shared/CardContainer";
import { DefaultContainer } from "@/components/shared/DefaultContainer";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ListFeaturesHome } from "@/components/ListFeaturesHome";
import GoogleMapReact from 'google-map-react';
import { AmenitiesHouse } from "@/components/AmenitiesHouse";


export  function ScreenHouse({id}:{id:string}){
    return(

        <DefaultContainer style={{  marginBottom:"2rem", paddingTop: '64px'}}>
            <CarouselHouse/>
                {/* <DefaultCard>
                </DefaultCard> */}
                <DefaultCard style={{paddingTop:'0.5rem', paddingBottom:'8rem'}}>
                    <TitleHouse/>
                    <DescriptionHouse/>
                    <ListFeaturesHome/>   
                    <Divider/> 
                    <LocationHouse/>
                    <Divider/>
                    <AmenitiesHouse/> 
                    <Divider/>
                    <ContactToHouse/>                   
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
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return(
        <Stack sx={{mb:'3rem', mt:'2.2rem'}}>
        <Typography sx={{marginBottom:"1rem"}} variant="h5" fontWeight={'600'}>Localização no mapa</Typography>
        <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
        // bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
      </GoogleMapReact>
    </div>
        </Stack>
    )
}

function ContactToHouse(){
    return(
    <Box sx={{mb:'3rem', mt:'4rem',display:"flex", flexDirection:{sm:"row",xs:"column", alignContent:'center', justifyContent:"center", alignItems:"center", justifyItems:'center'}}}>
        <Box sx={{flex:1, display:'flex', alignItems:'center', alignContent:"center", justifyContent:"center"}}>
    <       Typography sx={{flex:1, display:'flex', alignItems:'center', alignContent:"center", justifyContent:"center",marginBottom:"1rem", textAlign:'center'}}   variant="h4" fontWeight={'600'}>
    Gostou? Agende uma visita agora com um de nossos corretores de  plantão.
    </Typography>
        </Box>
        <Box sx={{flex:1, display:'flex', alignItems:'center', alignContent:"center", justifyContent:"center"}}>
            <Button size="large" variant="contained">Quero Agendar Visita</Button>
        </Box>
    </Box>
)
}