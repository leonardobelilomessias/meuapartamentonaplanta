import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import StraightenIcon from '@mui/icons-material/Straighten';
import { blue } from '@mui/material/colors';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export  function ListFeaturesHome() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, display:"flex",gap:"1rem", marginTop:'2rem', marginBottom:"2rem", flexWrap:"wrap", alignItems:"center", justifyContent:"center" }}>
            <Box sx={{display:"flex",gap:'1rem'}}>
                <BoxFeature title='Area' >
                      <StraightenIcon sx={{fontSize:"3rem"}} />
                </BoxFeature>

                <BoxFeature title='Quartos' >
                      <HotelIcon sx={{fontSize:"3rem"}} />
                </BoxFeature >
            </Box>
            <Box sx={{display:"flex",gap:'1rem'}}>

                <BoxFeature title='Banheiros' >
                      <BathtubIcon sx={{fontSize:"3rem"}} />
                </BoxFeature >

                <BoxFeature title='Vagas' >
                      <DirectionsCarIcon sx={{fontSize:"3rem"}} />
                
                </BoxFeature >
            </Box>
    </Box>
  );
}

function BoxFeature({children, title}:{title:string,children:React.ReactNode}){
    return(
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", maxWidth:'300px', minWidth:"140px", }}>
        <Avatar  sx={{color:"white", backgroundColor:blue[700], width:'4rem', height:"4rem"}}>
            {children}
        </Avatar>
            <Typography fontWeight={'600'} textAlign={'center'} color={blue[700]} fontSize={"1.2rem"}>{title}</Typography>
        </Box>
    )
}