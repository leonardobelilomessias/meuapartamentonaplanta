import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../Link';
import ProTip from '../ProTip';
import Copyright from '../Copyright';
import { BasicTabs } from './HomeConatainer/BasicTabs';
import { Layout } from '../components/Layout';
import { useUserData } from '@/context/ContextAccount';
import { ContainerToFixHeader } from '@/components/shared/ContainerToFixHeader';


export  function Home() {

  return (
    <Layout>
    <ContainerToFixHeader >
      <Box sx={{position:'fixed',left:0, borderRight:'1px solid', borderWidth:'1pxx', height:"100%", display:{xs:"none", sm:'block'}}}>
        <h2>oi</h2>
      </Box>
      <BasicTabs/>
    </ContainerToFixHeader>
    </Layout>
  );
}
