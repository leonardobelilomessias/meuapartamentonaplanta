import React, { ReactNode } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const HorizontalScroll = ({ children }:{children:ReactNode}) => {
  return (
    <Box sx={{ 

      overflowX: 'auto', display: 'flex', padding: 2 ,
      
      whiteSpace: 'nowrap',
      '&::-webkit-scrollbar': {
          height: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '10px',
      },
      '&::-webkit-scrollbar-track': {
          backgroundColor: '#e0e0e0',
      },
      }}>
      {children}
    </Box>
  );
};

export default HorizontalScroll;