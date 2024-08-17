import { Divider, Paper, Typography } from "@mui/material";
import { CardHouse } from "../../components/CardHouse";
import HorizontalScroll from "../../components/HorizontalScroll";
import { InfoItem } from "../../components/InfoItem";
import { WarningItem } from "../../components/WarningItem";
import Image from "next/image";
import tvImage from "@/img/reward/tv.jpg" 
import SlideDefault from "@/components/SlideDefault/SlideDefault";
import { HousesHighlights } from "@/components/HousesHighlights";

export function HomeComponent(){
    return(
        <>
        <Paper sx={{mb:2,p:4, mt:0}}>
            <h1 style={{marginBottom:0}}>Bem vindo  Leonardo !</h1>
            <p style={{margin:0}}>Confira o que preparamos para você.</p>
            <SlideDefault/>
            
        </Paper>
            <div>
                <WarningItem/>
                 <InfoItem/>
            </div>
            <HousesHighlights title="Últimos Lancamentos"/>
            <HousesHighlights title="Perfeito para você"/>

        </>
    )
}