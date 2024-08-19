import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {  navigationElementsAccount, navigationElementsTools } from '@/contants/navegationElements';
import { Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { blue } from '@mui/material/colors';
import { gray } from '@/LandingPage/getLPTheme';

export default function DrawerMenu({children}:{children:React.ReactNode}) {
  const router = useRouter();
  const resulRouter = router.pathname;
  const goback = router.back
  const path = resulRouter as string;
  const [open, setOpen] = React.useState(false);
console.log('caminho',path)
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Toolbar ></Toolbar>
      <Typography marginLeft={2} variant='overline'>Conta</Typography> 
      <Divider />
      <List>
        {navigationElementsAccount.map((item, index) => (
        <Link key={item.title} href={item.link} style={{ textDecoration:"none", color:"inherit"}}>
        <ListItem  disablePadding sx={{backgroundColor:path===item.link? gray[100]:""}}>
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
      <Typography marginLeft={2} variant='overline'>Ferramentas</Typography> 
      <Divider />
      <List>
        {navigationElementsTools.map((item, index) => (
          <Link key={item.title} href={item.link} style={{ textDecoration:"none", color:"inherit"}}>
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
    </Box>
  );

  return (
    <div>
      <Box onClick={toggleDrawer(true)}> {children}</Box>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
