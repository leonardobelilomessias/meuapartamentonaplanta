import { ArrowBack } from "@mui/icons-material";
import { Box, Button, CircularProgress, Container, FormControlLabel, FormLabel, MenuItem, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import VerifiedIcon from '@mui/icons-material/Verified';
import { useUserData } from "@/context/ContextAccount";
import * as Yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import { INewPost, INewPostForm } from "@/types/types";
import { Controller, useForm } from "react-hook-form";
import { createNewPost } from "@/lib/createNewPost";




export function CreatePost(){

  const [created,setCreated]=useState(false)
  const [load,setload] = useState(false)

  async function createPost(fn:()=>Promise<void>){
    setload(true)
    try{
      await fn()
      setCreated(true)
    }catch(e){
      console.log(e)
    }finally{
      setload(false)
    }
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


export default function BasicTextFields({createPost}:{createPost:(fn:()=>Promise<void>)=>Promise<void |undefined> }) {
  const {user} = useUserData()
  const [load,setLoad] = useState(false)
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Titulo é obrigatório'),
    message: Yup.string().required('Mensgem do texto é obriagotio'),
  });
  const { handleSubmit, control, formState: { errors } } = useForm<INewPostForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: INewPostForm) => {
    async function handleCreatePost(){
      await createNewPost({name:user.name, id:user.id, created_at:new Date(), updated_at:new Date(), title:data.title,message:data.message})
    }

    console.log(data)

    try{
      setLoad(true)
      
      await   createPost(handleCreatePost)
      

    }catch(e){
      console.log(e)
    }finally{
      setLoad(false)
    }
    console.log(data);

  };
    return (
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display:'flex',
          m:1,
          flexDirection:"column",
          gap:2
        }}
        noValidate
        autoComplete="off"
      >
        <Controller
          name="title"
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label="Titulo"
              variant="outlined"
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label="Escreva aqui o texto da  sua mensagem..."
              variant="outlined"
              multiline 
              rows={16}  fullWidth
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          )}
        />
         {
    !load&&
    <Button size="large" type="submit" variant="contained">Salvar</Button>
  }
  
  {
  load && 
   <LoadingButton size="large" variant="outlined" loading loadingPosition="center" startIcon={<SaveIcon />}>
  Salvando
  </LoadingButton>

}



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