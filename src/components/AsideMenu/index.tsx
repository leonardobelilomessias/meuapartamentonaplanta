import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { navigationElementsAccount, navigationElementsTools } from '@/contants/navegationElements';
import Link from 'next/link';
import { blue } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { gray } from '@/LandingPage/getLPTheme';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export  function AsideMenu(props: Props) {
  const router = useRouter();
  const resulRouter = router.pathname;
  const goback = router.back
  const path = resulRouter as string;

  return (
    <Box sx={{ display: 'flex',position:"fixed", flex:1, width:{md:"20%",lg:'13%'} }}>

<div style={{ flex:1}} >
      <Toolbar ></Toolbar>
      <Typography marginLeft={2} variant='overline'>Conta</Typography>      
      <Divider />
      <List>
        {navigationElementsAccount.map((item, index) => (
          <Link href={item.link} style={{ textDecoration:"none", color:"inherit",  }}>
          <ListItem key={item.title} disablePadding sx={{backgroundColor:path===item.link? gray[100]:""}}>
            <ListItemButton>
            <ListItemIcon color='primary' sx={{color:path===item.link? blue[700]:""}}>
            { item.icon?<item.icon/>:<InboxIcon/>}
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontWeight: path===item.link?'600':"",color:path===item.link? blue[700]:"",}}  primary={item.title} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      <Typography marginLeft={2} variant='overline'>Ferramentas</Typography>   
      <Divider />
      <List>
        {navigationElementsTools.map((item, index) => (
        <Link href={item.link} style={{ textDecoration:"none", color:"inherit"}}>
          <ListItem key={item.title} disablePadding sx={{backgroundColor:path===item.link? gray[100]:""}}>
            <ListItemButton >
              <ListItemIcon color='primary' sx={{color:path===item.link? blue[800]:""}}>
              { item.icon?<item.icon/>:<InboxIcon/>}
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontWeight: path===item.link?'600':"",color:path===item.link? blue[700]:"",}}  primary={item.title} />
            </ListItemButton>
          </ListItem>
        </Link>
        ))}
      </List>
    </div>
  
    </Box>
  );
}
