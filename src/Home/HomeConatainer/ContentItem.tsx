import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Bolt, Category } from '@mui/icons-material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { Box, Button, Divider, Paper } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
 
function AccordionExpandDefault() {
    const elemts = [{
      title:"Como financiar seu primeiro imovel",link:"#",category:"fin"},
      {title:"Documentos para o financiamento",link:"#", category:"fin"},
      {title:"partamento tipo vs Area Privativa",link:"#", category:"con"},
      {title:"Qual melhor posição do apartamento",link:"#", category:"con"},
      {title:"São gabriel coração de BH",link:"#", category:"rai"},
      {title:"Nova pampulha - perto de tudo ",link:"#", category:"rai"},
      {title:"Como fazer uma grana extra para o ape",link:"#", category:"dic"},
      {title:"Melhores planos de pagamento",link:"#", category:"dic"},


    ]
    const elemtsBooks = [{
      title:"Como financiar seu primeiro imovel",link:"#",category:"fin"},
      {title:"Documentos para o financiamento",link:"#", category:"fin"},
      {title:"partamento tipo vs Area Privativa",link:"#", category:"con"},
      {title:"Qual melhor posição do apartamento",link:"#", category:"con"},
      {title:"São gabriel coração de BH",link:"#", category:"rai"},
      {title:"Nova pampulha - perto de tudo ",link:"#", category:"rai"},
      {title:"Como fazer uma grana extra para o ape",link:"#", category:"dic"},
      {title:"Melhores planos de pagamento",link:"#", category:"dic"},


    ]
  return (
    <div>
    <Paper sx={{p:4, pb:12, }}>

  
    <Divider textAlign="left" about=""><h1>Videos</h1></Divider>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={"bold"}>Financiamento</Typography>
        </AccordionSummary>
        {
          elemts.map((elm)=>{
            if(elm.category ==='fin') return <ContentElement title={elm.title} link={elm.link} />
          })
        }
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontWeight={"bold"} >Modelos Construtivos</Typography>
        </AccordionSummary>
        {
          elemts.map((elm)=>{
            if(elm.category ==='con') return <ContentElement title={elm.title} link={elm.link} />
          })
        }
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontWeight={"bold"} >Raio-x do Bairro</Typography>
        </AccordionSummary>
        {
          elemts.map((elm)=>{
            if(elm.category ==='rai') return <ContentElement title={elm.title} link={elm.link} />
          })
        }
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontWeight={"bold"} >Dicas</Typography>
        </AccordionSummary>
        {
          elemts.map((elm)=>{
            if(elm.category ==='dic') return <ContentElement title={elm.title} link={elm.link} />
          })
        }
      </Accordion>
      </Paper>
      <Paper sx={{p:4, mt:2 ,pt:2, mb:12}}>
      <Divider textAlign="left" about="" sx={{mt:8}}><h1 style={{}}>Ebooks</h1></Divider>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={"bold"}>Clique para baixar</Typography>
        </AccordionSummary>
        {
          elemts.map((elm)=>{
            if(elm.category ==='fin') return <ContentElementBook title={elm.title} link={elm.link} />
          })
        }
      </Accordion>
      </Paper>
    </div>
  );
}

export function ContentItem(){
    return(
        <div>
            <AccordionExpandDefault/>
        </div>
    )
}

      
function ContentElement({title,link, category}:{title:string,link:string, category?:string}){
  return(
    <>
        <AccordionDetails >
        <div>
          <Box sx={{display:"flex", alignItems:'center',pb:1, pt:1 }}>
          <OndemandVideoIcon color='primary' fontSize='medium' sx={{mr:2, color:"primary"}}/>
          <Typography variant='subtitle2'>  
            {title}
          </Typography>
          </Box>
          <Divider variant="middle" />
        </div>
        </AccordionDetails>

    </>
  )
}
function ContentElementBook({title,link, category}:{title:string,link:string, category?:string}){
  return(
    <>
        <AccordionDetails >
        <div>
          <Box sx={{display:"flex", alignItems:'center',pb:1, pt:1 }}>
          <MenuBookIcon color='primary' fontSize='medium' sx={{mr:2, color:"primary"}}/>
          <Typography variant='subtitle2'>  
            {title}
          </Typography>
          <Button style={{textTransform:"none"}}> Fazer Download</Button>
          </Box>
          <Divider variant="middle" />
        </div>
        </AccordionDetails>

    </>
  )
}
