import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Ajuste de Preferências',
    description:
      'Crie e redefina preferências para encontrar as melhores opções de produtos e financiamentos',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Ferramentas de Financiamento',
    description:
      'Automatize o processo de de analise de perfil e saiba em tempo real seu poder de compra no mercado imobiliário.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Interação em Tempo real',
    description:
      'Curta e comente na plataforma e tenha interações com pessoas como você que estão na jornada de conquista do seu imoóvel.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Dicas magicas',
    description:
      'Receba dicas e informações personalizadas com seu perfil e saiba como aumentar a possibilidade de sucesso no seu objetivo.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Suporte Especialista',
    description:
      'Conte com o auxilio de experts no mercado para acessoria no seu processo.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Analise de Mercado',
    description:
      'Receba uma analise criteriosa e confiável do mercado para sua tomada de decisão',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Destaques
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore diversos materiais e recursos que vão acelerar e te auxiliar na sua jornada de conquistar o seu sonho da casa própria.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}