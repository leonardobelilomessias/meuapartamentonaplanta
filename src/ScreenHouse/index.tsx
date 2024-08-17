
import { CarouselHouse } from "@/components/CarouselHouse";
import { Layout } from "@/components/Layout";
import { DefaultCard } from "@/components/shared/CardContainer";
import { DefaultContainer } from "@/components/shared/DefaultContainer";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import LocationOnIcon from '@mui/icons-material/LocationOn';


export  function ScreenHouse({id}:{id:string}){
    return(

            <DefaultContainer>
                <DefaultCard>
                    <CarouselHouse/>
                    <Typography fontWeight={'600'} variant="h3">Condominio Sevilha</Typography>
                    <Typography sx={{display:"flex",flexDirection:"row",lineHeight:'20px', fontSize:'1.2rem'}} variant="body1" color="primary">
                    <LocationOnIcon sx={{fontSize:'1.2rem' , lineHeight:'10px'}} />
                        São Gabriel - Belo Horizonte
                    </Typography>
                    <Typography variant="h5" fontWeight={'600'}>Descrição:</Typography>
                    <Typography>
                                                        {`
                                                        Novolar Sevilha é a oportunidade de morar perto do que você precisa, com comércios, mercados, padarias,
                                                         farmácias e restaurantes, na estrutura e mobilidade do São Gabriel. Um bairro completo e cheio de vida, onde você pode criar raízes e rotinas só suas.`}
                    </Typography>


                </DefaultCard>
            </DefaultContainer>

    )
}