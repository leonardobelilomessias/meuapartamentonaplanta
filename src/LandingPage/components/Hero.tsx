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
import theme from '../../theme';

export default function Hero() {
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
        <Stack sx={{flexDirection:{xs:"column",sm:"row"}}} >
        <VideoHeadLine/>
        <FormFields/>
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

        Seu Apartamento&nbsp;

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
  return(
    <>
            <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>

<Typography
  textAlign="center"
  color="text.secondary"
  sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' },mt:{xs: 4, sm: 4} }}
>
  Saiba como tornar a jornada do seu apartamento mais prazerosa e sem complicaçoes.
</Typography>
<Stack
  direction={{ xs: 'column', sm: 'column' }}
  alignSelf="center"
  spacing={1}
  useFlexGap
  sx={{ pt: 2, width: { xs: '100%', sm: '90%' } }}
>
  <TextField
    id="outlined-basic"
    hiddenLabel
    size="small"
    variant="outlined"
    aria-label="Enter your email address"
    placeholder="Seu Nome"
    inputProps={{
      autoComplete: 'off',
      'aria-label': 'Enter your email address',
    }}
  />
   <TextField
    id="outlined-basic"
    hiddenLabel
    size="small"
    variant="outlined"
    aria-label="Enter your email address"
    placeholder="Whatsapp"
    inputProps={{
      autoComplete: 'off',
      'aria-label': 'Enter your email address',
    }}
  />
   <TextField
    id="outlined-basic"
    hiddenLabel
    size="small"
    variant="outlined"
    aria-label="Enter your email address"
    placeholder="Email"
    inputProps={{
      autoComplete: 'off',
      'aria-label': 'Enter your email address',
    }}
  />
  <Button variant="contained" color="primary">
    Cadastrar
  </Button>
</Stack>
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