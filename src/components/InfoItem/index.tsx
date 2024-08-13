import { Box, Button, Paper, Typography } from "@mui/material";
import { wrap } from "module";
import { ReactNode } from "react";

export function InfoItem(){
    return(
        <Paper sx={{p:2,mb:1,mt:2}} >

        <div style={{}}>
            <div style={{display:"flex", alignItems:"center"}}>

            <h2 style={{padding:0,marginRight:"1rem"}}>Raio-x seu Perfil</h2>
            <Button  variant="outlined" size="small" >Editar Perfil</Button>
            </div>
            <Typography  variant="subtitle1" fontWeight={"bold"} color={"primary"}>Detalhes</Typography>
        <div style={{display:"flex",flexWrap:"wrap"  }}>
            <Box sx={{marginRight:"3rem"}}>
                <TypographyField>Primeiro Imóvel:</TypographyField>
                <TypographyField>Renda:</TypographyField>
                <TypographyField>Entrada:</TypographyField>
                <TypographyField>Filhos ou dependentes:</TypographyField>

            </Box>
            <Box>
                <TypographyField>Saldo Fgts:</TypographyField>
                <TypographyField>Trabalhou mais de 3 anos CLT:</TypographyField>
                <TypographyField>Possui algum financiamento:</TypographyField>
                <TypographyField>Estado Civil:</TypographyField>
            </Box>

        </div>
        <Box sx={{display:"flex",mb:2}}>
            <Typography fontWeight={"bold"} mr={4} variant="h6">Poder de compra: </Typography>
                
                <Typography fontWeight={"bold"} color={"primary"} variant="h6" >R$250.000,00</Typography>
            </Box>
        </div>
        </Paper>
    )
}

function TypographyField({children,value}:{children:ReactNode,value?:string}){
    return(
        <div style={{display:"flex", alignItems:"center",alignContent:"center",justifyItems:"center",marginBottom:"8px" }}>
            <Typography variant="subtitle2" p={0} mr={2} color={"black"}> {children}</Typography>
            <Typography fontSize={14} color={"GrayText"}>{value?value:"Sem informações"}</Typography>
        </div>
    )
}