import { ArrowBack } from "@mui/icons-material";
import { Box, Button, CircularProgress, Container, FormControlLabel, FormLabel, MenuItem, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import VerifiedIcon from '@mui/icons-material/Verified';

export function CreatePost(){
  const [created,setCreated]=useState(false)
  const [load,setload] = useState(false)

  function createPost(){
    setload(true)
    setTimeout(() => {
    setload(false)
    setCreated(true)
    }, 3000);
  }
    return(
  
        <Container maxWidth="lg" style={{minHeight:'100vH', marginBottom:'1rem'}} >
          { (!created && !load) &&    
          <Paper  sx={{mt:8,p:4, }}>
                <Link href={'/'}>
                <Button  sx={{mb:4}} variant="text"><ArrowBack   fontSize="small"/>  Voltar</Button>
                </Link>
                <Typography variant="h4" sx={{mb:4}} fontWeight={'bold'} >Criar nova postagem</Typography>
                <BasicTextFields createPost={createPost} />
            </Paper>}
            {load&&
              <Paper  sx={{mt:8,p:4,display:"flex", minHeight:400, alignItems:'center', alignContent:'center', justifyContent:"center", justifyItems:"center", }}>
                <LoadingItem/>
                <Typography>Aguarde um momento.</Typography>
            </Paper>
            }
            { (created && !load) &&    
          <Paper  sx={{mt:8,p:4,display:"flex", flexDirection:"column" }}>
                <Link href={'/'}>

                <Button  sx={{mb:4, alignSelf:'end', justifySelf:"end"}} variant="text"><ArrowBack   fontSize="small"/>  Voltar</Button>
                </Link>
                <Box sx={{display:"flex", alignItems:"center", flexDirection:'column', alignContent:'center'}}>
                <Typography variant="h4" sx={{mb:4}} fontWeight={'bold'} >Postagem criada</Typography>
                <VerifiedIcon color="primary" sx={{fontSize:75, color:'primary'}} />
                 <Link href={'/'}>
                <Button  sx={{mb:4, alignSelf:'end', justifySelf:"end"}} variant="text">  Ver Postagem</Button>
                </Link>
                
                </Box>
                
            </Paper>}
        </Container>
     
    )
}


export default function BasicTextFields({createPost}:{createPost?:()=>void}) {
    const currencies = [
        {
          value: 'solteiro',
          label: 'solteiro',
        },
        {
          value: 'casado',
          label: 'casado',
        },
        {
          value: 'divorciado',
          label: 'divorciado',
        },
        {
          value: 'viúvo',
          label: 'viúvo',
        },
      ];
    return (
      <Box
        component="form"

        sx={{
          display:'flex',
          m:1,
          flexDirection:"column"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField sx={{mb:2}} label="Titulo" fullWidth={true} variant="outlined" />
        <TextField  sx={{mb:2}}    label="Descrição" multiline     rows={16}  fullWidth/>
       <Button onClick={createPost} variant="contained">Enviar</Button>



      </Box>
    );
  }

  export function CreatedSuccessPost(){
    return(
  
        <Container maxWidth="lg" style={{minHeight:'100vH', marginBottom:'1rem'}} >
            <Paper sx={{mt:8,p:4, }}>
                <Link href={'/'}>
                <Button sx={{mb:4}} variant="text"><ArrowBack   fontSize="small"/>  Voltar</Button>
                </Link>
                <Typography variant="h4" sx={{mb:4}} fontWeight={'bold'} >Criar nova postagem</Typography>
                
            </Paper>
        </Container>
     
    )
}

export  function LoadingItem() {
  return (
    <Box sx={{ display: 'flex', alignItems:'center', alignContent:'center', justifyContent:'center',alignSelf:'center' }}>
      <CircularProgress />
    </Box>
  );
}