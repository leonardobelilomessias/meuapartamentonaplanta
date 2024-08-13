import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../Link';
import ProTip from '../ProTip';
import Copyright from '../Copyright';
import { BasicTabs } from './HomeConatainer/BasicTabs';
import { Layout } from '../components/Layout';


export  function Home() {
  return (
    <Layout>
    <Container maxWidth="lg" style={{minHeight:'100vH'}} >
      <BasicTabs/>
    </Container>
    </Layout>
  );
}
