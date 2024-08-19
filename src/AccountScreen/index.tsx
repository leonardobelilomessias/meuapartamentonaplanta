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
import { FirebaseError } from 'firebase/app';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Phone } from '@mui/icons-material';
import { updateAccountUser } from '@/lib/updateAccountUser';
import { ContainerToFixHeader } from '@/components/shared/ContainerToFixHeader';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
interface IFormInputs {
  name:string
  email: string;
  phone: string;
}
export  function AccountScreen() {
  const[edit,setEdit]=React.useState(false)
  const {user, handleUserchange} = useUserData()
  console.log('dados da conta', user)
  const id = user.id as string
  const [load,setLoad] = React.useState(false)
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    phone: Yup.string().min(10, "O telefone deve ter pelo menos 10 dígitos").required("Telefone é obrigatório"),
  });
  const defaultValues = {
    name: user.name,
    email: user.email,
    phone: user.phone,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues
  });

  const onSubmit = async (data: IFormInputs) => {
    console.log(data)
    try{
      await updateAccountUser({name:data.name,email:data.email,id:id,phone:data.phone})
      handleUserchange()
      toast("Dados salvos con sucesso!");
      setEdit(false)
     // await registerUser(data);
    }catch(error){
      if (error instanceof FirebaseError) {
        if(error.code==='auth/email-already-in-use'){

          toast("Email já cadastrado. Faça login ou cadastre um novo email.");
        }
        // Lidar com erros específicos do Firebase
        console.error("Erro ao registrar:", error.code);
      } else {
        // Lidar com outros tipos de erros (caso ocorra)
        console.error("Erro desconhecido:", error);
      }
    }
  };


  return (

<Box>


    <ToastContainer />
        <Box
               sx={{
                marginTop: 4,
                marginBottom:4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

            flex:1
          }}
        >
          <Avatar sx={{width:76,height:76}}></Avatar>
          
          <Typography component="h1" variant="h5">
            Conta
          </Typography>
          <Typography  variant="subtitle1" color={'GrayText'}>
            Mantenha seus dados atualizados.
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{display:"flex", mt: 1 , gap:2, flexDirection:'column', minWidth:{xs:"100%",sm:550} }}>
            <TextField
            defaultValue={user.name}
              margin="normal"
              required
              fullWidth
              id="name"
              label="nome"
              disabled={!edit}
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              autoFocus
            />
            <TextField
             disabled={!edit}
                 defaultValue={user.phone}
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Telefone"
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              
            />
            <TextField
             disabled={!edit}
                 defaultValue={user.email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              
            />

            {!edit&& <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>setEdit(true)}
            >
              Editar
            </Button>}
            {edit && <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Salvar alterações
            </Button>}
          </Box>
        </Box>

        </Box>
  );
}