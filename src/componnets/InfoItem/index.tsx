import { Box, Button, Typography } from "@mui/material";
import { wrap } from "module";
import { ReactNode } from "react";

export function InfoItem(){
    return(
        <div>
            <div style={{display:"flex", alignItems:"center"}}>
            <h2 style={{padding:0,marginRight:"4rem"}}>Raio-x seu Perfil</h2>
            <Button
          variant="contained">Editar Perfil</Button>
            </div>
            <Typography variant="subtitle1" fontWeight={"bold"} color={"primary"}>Detalhes</Typography>
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
        <Box sx={{display:"flex"}}>
            <Typography fontWeight={"bold"} mr={4} variant="h5">Poder de compra: </Typography>
                
                <Typography fontWeight={"bold"} color={"primary"} variant="h5">R$250.000,00</Typography>
            </Box>
        </div>
    )
}

function TypographyField({children,value}:{children:ReactNode,value?:string}){
    return(
        <div style={{display:"flex", alignItems:"center",alignContent:"center",justifyItems:"center",marginBottom:"8px" }}>
            <Typography variant="subtitle2" p={0}>{children}</Typography>
            <Typography fontSize={14}>nem</Typography>
        </div>
    )
}