import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { Instagram, YouTube } from '@mui/icons-material';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Direitos reservados © '}
      <Link href="#">meuapenaplanta.com&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%',  } }}>
            <Box sx={{mb:4}}>
            <Typography variant='h4' sx={{ m:0, p:0}} fontWeight={'bolder'}>CANP</Typography>
            <Typography variant='overline' sx={{ m:0, p:0}}>Meu Apartamento na planta</Typography>

            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Notícias Diárias
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Se increva e receba em seu email informações privilegiadas no seu email. 
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Digite Seu Email"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Digite Seu Email',
                }}
              />
              <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                Se increver
              </Button>
            </Stack>
          </Box>
        </Box>


      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Politica de Privacidade
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Termos de Serviços
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://instagram.com"
            aria-label="Instagram"
            sx={{ alignSelf: 'center' }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://youtube.com"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <YouTube />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.facebook.com/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}