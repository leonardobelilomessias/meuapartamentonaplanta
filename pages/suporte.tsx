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
import { SuporteScreen } from '@/SuporteScreen';



interface IFormInput {
  title: string;
  message: string;
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function suporte() {
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

    <Layout>
    <Container maxWidth="lg" style={{minHeight:'100vH'}} >
      <SuporteScreen/>
    </Container>
      </Layout>

  );
}

