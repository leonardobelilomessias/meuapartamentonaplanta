import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { HomeComponent } from './HomeItem';
import { ContentItem } from './ContentItem';
import { Community } from './Community';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export  function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb:4 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Inicio" {...a11yProps(0)} />
          <Tab label="Conteúdo" {...a11yProps(1)} />
          <Tab label="Membros" {...a11yProps(2)} />


        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <HomeComponent/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContentItem/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Community/>
      </CustomTabPanel>
    </Box>
  );
}