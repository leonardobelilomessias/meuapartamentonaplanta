import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import Link from 'next/link';
import { useUserData } from '@/context/ContextAccount';
const pages = [ {title:'Home',link:'/'}, {title:'suporte',link:'/suporte'},{title:'conta',link:'/conta'}, {title:'sair',link:'/'}];
const notifications = [ {title:'Compre Hoje na planta',link:'/', message:"Super oportunidade para você hoje de compara seu novo apa...."},
  {title:'Compre Hoje na planta',link:'/', message:"Super oportunidade para você hoje de compara seu novo apa...."},
  ,{title:'Compre Hoje na planta',link:'/', message:"Super oportunidade para você hoje de compara seu novo apa...."},
];
const settings = ['Perfil', 'Conta', 'Dashboard', 'Sair'];
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Divider } from '@mui/material';
import DrawerMenu from '../DrawerMenu';
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElNotification, setAnchorElNotification] = React.useState<null | HTMLElement>(null);

  const handleOpenNavNotification = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };
  const handleCloseNavNotication = () => {
    setAnchorElNotification(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const {logOutUser}=useUserData()
function logout(){
  logOutUser()
  handleCloseNavMenu()
}
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Link href={'/'} style={{display:'flex', alignItems:"center", color:'white', textDecoration:"none",}}>
          <MapsHomeWorkRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
         
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              textTransform:"capitalize",
              
            }}
            >
          CANP
          </Typography>
            </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <DrawerMenu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              >
              <MenuIcon />

            </IconButton>
              </DrawerMenu>

          </Box>
          <Link href={'/'} style={{ display:'flex', flexGrow:1, alignItems:"center", color:'white', textDecoration:"none", alignSelf:'center', marginRight:2}}>
          <MapsHomeWorkRoundedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
           
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CANP
          
          </Typography>
          </Link>
          <Box sx={{  display: { xs: 'none', md: 'flex', alignItems:'center', alignContent:'center', marginRight:8 } }}>
            {pages.map((page) => (
              <Link key={page.title}  style={{textDecoration:"none", }} href={`${page.link}`}>
              <Typography

                key={page.title}
                onClick={page.title==='sair'?logout:handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', marginRight:4 }}
                variant='overline'
                >
                {page.title}
              </Typography>
                </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, gap:2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenNavNotification} sx={{ p: 0 }}>
                <NotificationsIcon sx={{color:'white', marginRight:"1rem"}}   />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ width: 32, height: 32 }}  alt="Remy Sharp"  />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ display:"flex", mt: '45px', minWidth:'400px', alignContent:"center", alignItems:"center" }}
              
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              
            >
              {settings.map((setting) => (
                <MenuItem   key={setting} onClick={setting==="sair"? logout: handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                 { setting==="sair"&&<Typography textAlign="center">{setting}</Typography>}
                </MenuItem>
              ))}
            </Menu>
            
            <Menu
              sx={{ mt: '45px', minWidth:'400px' , }}
              
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                
              }}
              open={Boolean(anchorElNotification)}
              onClose={handleCloseNavNotication}
              
            >
              {notifications.map((item,key) => (
                <MenuItem style={{width:300,}}  key={key} onClick={ handleCloseNavNotication}>
                  <Box textOverflow={'revert'}  sx={{display: "flex",flexDirection: "column",flexWrap: "nowrap",overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  <Typography fontWeight={'bold'} textOverflow={"revert-layer"} >{item?.title}</Typography>
                 <Typography sx={{ overflow: "hidden",textOverflow: "ellipsis",whiteSpace: "nowrap"}} >{item?.message}</Typography>
                 <Divider/>
                  </Box>
                </MenuItem>
              ))}
              <Button sx={{ alignSelf:"center", justifySelf:"center", width:"100%"}}>ver mais</Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export  {ResponsiveAppBar};