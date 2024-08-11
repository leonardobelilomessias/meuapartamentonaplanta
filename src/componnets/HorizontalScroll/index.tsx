import React, { ReactNode } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const HorizontalScroll = ({ children }:{children:ReactNode}) => {
  return (
    <Box sx={{ overflowX: 'scroll', display: 'flex', padding: 2 }}>
      {children}
    </Box>
  );
};

export default HorizontalScroll;