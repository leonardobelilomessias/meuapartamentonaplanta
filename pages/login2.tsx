import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from '@/lib/registerUser';
import { FirebaseError } from 'firebase/app';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '@/theme';
import { signInUser } from '@/lib/signinUser';
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
});

 interface IFormInputs {
  email: string;
  password: string;

}

export default function login2() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 2, sm: 8 },
          pb: { xs: 2, sm: 8 },
        }}
      >
        <HeadLine/>
        <Stack sx={{flexDirection:{xs:"column",sm:"row"},gap:{sm:8}}} >
        <VideoHeadLine/>
        <FormFields/>
        <ToastContainer />
        </Stack>


      </Container>
    </Box>
  );
}
function HeadLine(){
  return(
    <>

        
        <Typography
        variant="h1"
        sx={{
        display: 'flex',
        fontWeight:"bold",
        flexDirection: { xs: 'column', md: 'row' },
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: {xs:'clamp(2.5rem, 10vw, 4rem)',sm:'clamp(3.5rem, 10vw, 4rem)'},
        }}
        >

        Comunidade Apartamento&nbsp;

        </Typography>
        <Typography
       
        variant="h1"
        sx={{
          display: 'flex',
          fontWeight:"bold",
          flexDirection: { xs: 'column', md: 'column' },
          alignSelf: 'center',
          textAlign: 'center',
          fontSize: {xs:'clamp(2.5rem, 10vw, 4rem)',sm:'clamp(3.5rem, 10vw, 4rem)'},
          color: (theme) =>
            theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
        }}
        >
        Na Planta
        </Typography>

    
    </>
  )
}

function VideoHeadLine(){
  const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));
  console.log(matchesXs)
  return(
    <div>
  
          <Box
          id="image"
          justifyContent={'center'}
          alignContent={"center"}
          alignItems={'center'}
          sx={(theme) => ({
            alignContent:"center",
            alignItems:"center",
            justifyContent:"center",
            justifyItems:"center",
            mt: { xs: 4, sm: 4 },
            alignSelf: 'center',
            height: { xs: 200, sm: 400 },
            width: {sx:'100%',sm:700},
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        >
       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/--slRywdonM?si=uqwuqtbR1MdvRSJB?controls=0"
        title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </Box>
    </div>
  )
}
function FormFields(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
   

    console.log(data)
    try{

      await signInUser(data)
    }catch(error){
      if (error instanceof FirebaseError) {
        if(error.code==='auth/invalid-credential'){

          toast("Usuario ou senhas incorretos. Tente novamente");
        }
        // Lidar com erros específicos do Firebase
      //  console.error("Erro ao registrar:", error.code);
      } else {
        // Lidar com outros tipos de erros (caso ocorra)
        console.error("Erro desconhecido:", error);
      }
    }
  };
  return(
    <>
<Stack   spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
<Typography
        variant="h4"
        sx={{
        p:0,
        mt:{xs: 4, sm: 4},
        display: 'flex',
        fontWeight:"bold",
        flexDirection: { xs: 'column', md: 'row',  },
        alignSelf: 'center',
        textAlign: 'center',
        
        }}
        >

        Login&nbsp;

        </Typography>
<Typography
  textAlign="center"
  color="text.secondary"
  sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' }, }}
>
  Saiba como tornar a jornada do seu apartamento mais prazerosa e sem complicaçoes.
</Typography>
<Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: '0 auto',  width:{xs:"90%",sm:"100%"} }}
    >

      <TextField
      size='small'
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        size='small'
        label="Senha"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
  <Button type="submit" variant="contained" color="primary">
    Entrar
  </Button>
</Box>
<Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
  Saima mais sobre nossos
  <Link href="#" color="primary">
    Termos & Condições
  </Link>
  .
</Typography>
</Stack>
    </>
  )
}