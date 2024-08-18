import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Layout } from '@/components/Layout';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';
import { useUserData } from '@/context/ContextAccount';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import { title } from 'process';
import { INewSuportForm } from '@/types/types';
import { createNewSupport } from '@/lib/createNewSupporte';
import { ArrowBack } from '@mui/icons-material';
import { CircularProgress, Paper } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { ContainerToFixHeader } from '@/components/shared/ContainerToFixHeader';



interface IFormInput {
  title: string;
  message: string;
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export  function SuporteScreen() {
  const {user} = useUserData()
  const [load,setLoad] = React.useState(false)
  const [created,setCreated]=React.useState(false)
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Titulo é obrigatório'),
    message: Yup.string().required('Mensgem do texto é obriagotio'),
  });
  const { handleSubmit, control, formState: { errors } } = useForm<INewSuportForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: INewSuportForm) => {
    console.log(data)
    try{
      setLoad(true)
      await createNewSupport({name:user.name, id:user.id, created_at:new Date(), updated_at:new Date(), title:data.title,message:data.message})
      setCreated(true)
   
    }catch(e){
      console.log(e)
    }finally{
      setLoad(false)
    }
    console.log(data);
  };
  return (

    
      <ContainerToFixHeader >

        
{   (!load&&!created) &&     <Box
          sx={{
              marginTop: 4,
              marginBottom:4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <SupportAgentIcon color='primary' sx={{color:'primary', fontSize:76}} />
          
          <Typography component="h1" variant="h5">
            Suporte
          </Typography>
          <Typography  variant="body2">
            Deixe sua mensagem em breva vamos entrar contato
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{display:"flex", mt: 1 , gap:2, flexDirection:'column', minWidth:{xs:"100%",sm:550} }}>
          <Controller
          name="title"
          
          control={control}
          defaultValue=''
          render={({ field }) => (
              <TextField
              fullWidth
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
            />)}/>

   
            { !load&&<Button size="large" type="submit" variant="contained"  fullWidth>Enviar</Button>}
         {load && <LoadingButton size="large" variant="outlined" loading loadingPosition="center" startIcon={<SaveIcon />}>
           Enviando
          </LoadingButton>}
          </Box>
        </Box>}
        { (!load&&created)&&<CreatedSuccessSuport/>}
   
      
    </ContainerToFixHeader>
    
    
);
}



export function CreatedSuccessSuport(){
  return(

    <Paper  sx={{mt:8,p:4,display:"flex", flexDirection:"column" }}>
    <Link href={'/'}>

    <Button  sx={{mb:4, alignSelf:'end', justifySelf:"end"}} variant="text"><ArrowBack   fontSize="small"/>  Voltar ao inicio</Button>
    </Link>
    <Box sx={{display:"flex", alignItems:"center", flexDirection:'column', alignContent:'center'}}>
    <Typography variant="h4" sx={{mb:4, textAlign:"center"}} fontWeight={'bold'} >Mensagem enviada com sucesso!</Typography>
    <VerifiedIcon color="primary" sx={{fontSize:75, color:'primary'}} />
     <Link href={'/suporte'}>
    <Button  sx={{mb:4, alignSelf:'end', justifySelf:"end"}} variant="text">  Nova Mensagem</Button>
    </Link>
    
    </Box>
    
</Paper>
   
  )
}
export  function LoadingItem() {
  return (
    <Box sx={{ display: 'flex', alignItems:'center', alignContent:'center', justifyContent:'center',alignSelf:'center' }}>
      <CircularProgress />
    </Box>
  );
}



