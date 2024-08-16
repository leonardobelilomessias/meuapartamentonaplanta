import { useUserData } from "@/context/ContextAccount";
import { formatPriceToBRL } from "@/utils/formatPrice";
import { Box, Button, Paper, Typography } from "@mui/material";
import { wrap } from "module";
import Link from "next/link";
import { ReactNode, useState } from "react";

export function InfoItem(){
    const {dataFinanceProfile} = useUserData()
    const nascimento = Number(String(dataFinanceProfile.dataNascimento).split('-')[2])
    const handspay = dataFinanceProfile.entrada?dataFinanceProfile.entrada:0
    const fgts = dataFinanceProfile.saldoFgts?dataFinanceProfile.saldoFgts:0
    const renda = dataFinanceProfile.renda?dataFinanceProfile.renda:0
    const amountpercent = calcAmountPercent(renda)
    const percent = (renda/100) * amountpercent
    const sub = calcSub(renda)
    function calcSub(amount:number){
        if(amount<=2200 && dataFinanceProfile.filhosDependentes=="sim" ) return 40000
        if(amount<=2800 && dataFinanceProfile.filhosDependentes=="sim" ) return 20000
        if(amount<=3200 && dataFinanceProfile.filhosDependentes=="sim" ) return 5000
        if(amount<=3800 && dataFinanceProfile.filhosDependentes=="sim" ) return 5000

        return 1000
    }
    function calcAmountPercent(amount:number){
        if(amount<=2800) return 30
        if(amount<= 3200) return 30
        if(amount<= 4200) return 25
        if(amount<= 5200) return 22
        return 22
        
    }
    function calcPower(){
        if(nascimento>=1989){
            const resultYear = percent * 12
            const resultAllYears = resultYear  * 35
            const finalResult = resultAllYears + fgts+ handspay +sub
            console.log(sub)
            console.log(sub)
            return finalResult /1.8
        }
        if(nascimento>=1979){
            const resultYear = dataFinanceProfile.renda?dataFinanceProfile.renda:0*12
            const resultAllYears = resultYear * 30
            const finalResult = resultAllYears + fgts+ handspay
            return finalResult
        }
        if(nascimento<=1969){
            const resultYear = dataFinanceProfile.renda?dataFinanceProfile.renda:0*12
            const resultAllYears = resultYear * 25
            const finalResult = resultAllYears + fgts+ handspay
            return finalResult
        }
        return 12
    }
    const [power,setPower] = useState(calcPower())

    return(
        <Paper sx={{p:2,mb:1,mt:2}} >

        <div style={{}}>
            <div style={{display:"flex", alignItems:"center"}}>

            <h2 style={{padding:0,marginRight:"1rem"}}>Raio-x seu Perfil</h2>
            <Link href={'/editar-perfil'}>
                <Button  variant="outlined" size="small" >Editar Perfil</Button>
            </Link>
            </div>
            <Typography  variant="subtitle1" fontWeight={"bold"} color={"primary"}>Detalhes</Typography>
        <div style={{display:"flex",flexWrap:"wrap"  }}>
            <Box sx={{marginRight:"3rem"}}>
                <TypographyField value={String(dataFinanceProfile.renda)}>Renda:</TypographyField>
                <TypographyField value={String(dataFinanceProfile.entrada)}>Entrada:</TypographyField>
                <TypographyField value={String(dataFinanceProfile.saldoFgts)}>Saldo Fgts:</TypographyField>
                <TypographyField value={dataFinanceProfile.primeiroImovel}>Tipo de renda:</TypographyField>
                <TypographyField value={dataFinanceProfile.filhosDependentes}>Filhos ou dependentes:</TypographyField>

            </Box>
            <Box>
                <TypographyField value={dataFinanceProfile.estadoCivil}>Estado Civil:</TypographyField>
                <TypographyField value={String(dataFinanceProfile.dataNascimento)}>Data de nascimento:</TypographyField>
                <TypographyField value={dataFinanceProfile.trabalho3Anos}>Trabalhou mais de 3 anos CLT:</TypographyField>
                <TypographyField value={dataFinanceProfile.financiamento}>Possui algum financiamento:</TypographyField>
                <TypographyField value={dataFinanceProfile.primeiroImovel}>Primeiro Imóvel:</TypographyField>
            </Box>

        </div>
        <Box sx={{display:"flex",mb:2}}>
            <Typography fontWeight={"bold"} mr={4} variant="h6">Poder de compra: </Typography>
                
                <Typography fontWeight={"bold"} color={"primary"} variant="h6" >{formatPriceToBRL(power)}</Typography>
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