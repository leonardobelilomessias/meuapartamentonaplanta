import { Divider, Paper, Typography } from "@mui/material";
import { CardHouse } from "../../components/CardHouse";
import HorizontalScroll from "../../components/HorizontalScroll";
import { InfoItem } from "../../components/InfoItem";
import { WarningItem } from "../../components/WarningItem";
import Image from "next/image";
import tvImage from "@/img/reward/tv.jpg" 

export function HomeComponent(){
    return(
        <>
        <Paper sx={{mb:2,p:4, mt:0}}>

            <h1 style={{marginBottom:0}}>Bem vindo  Leonardo !</h1>
            <p style={{margin:0}}>Confira o que preparamos para você.</p>
            <Typography variant="h4" fontWeight={"bold"} color={'primary'}>Comprou ganhou!!</Typography>
            <Image src={tvImage} alt="" width={285} height={200} ></Image>
            <Typography variant="body2" fontWeight={"bold"} color={'GrayText'}>Na compra do seu apartamento com um de nossos agentes você ganha um Smart tv 32 polegadas </Typography>
        </Paper>
            <div>
                <WarningItem/>
                 <InfoItem/>
            </div>
            <div>
            <Paper sx={{p:0.5,mb:4,mt:4}}>
            <Divider textAlign="left"> <h3>Últimos Lancamentos</h3></Divider>
               
               <HorizontalScroll>
                <CardHouse/>
                <CardHouse/>
                <CardHouse/>

               </HorizontalScroll>
            </Paper>
            </div>
            <div>
            <Paper sx={{p:0.5,mb:10}}>
            <Divider textAlign="left" about=""><h3>Perfeito para você</h3></Divider>
                <HorizontalScroll>
                <CardHouse/>
                <CardHouse/>
                <CardHouse/>

               </HorizontalScroll>
            </Paper>
            </div>


        </>
    )
}