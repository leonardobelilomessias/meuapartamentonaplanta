import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Visibility } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Divider, Grow } from '@mui/material';
import { ShortViewHouse } from '../ShotViewHouse';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { formatPriceToBRL } from '@/utils/formatPrice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [favorite,setFavorite] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 305,minWidth: 250, marginRight:'1rem', marginBottom:'1rem'  }}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.novolar.com.br/wp-content/uploads/2024/06/27.-FACHADA-NOTURNA-200x200.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography color='black' variant="h6" >
            Condominio Sevilha
        </Typography>
        <Typography sx={{display:"flex",flexDirection:"row",alignItems:'center'}} variant="subtitle2" color="primary">
          <LocationOnIcon sx={{fontSize:'16px'}} />
            São Gabriel - Belo Horizonte
        </Typography>
        <Box sx={{display:"flex", flexDirection:"row",gap:2}}>

            <Typography variant="overline" color="text.secondary">
                2 Quartos  
            </Typography>
            <Typography variant="overline" color="text.secondary">
               1 Banheiro  
            </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row",gap:2}}>
            <Typography variant="overline" color="text.secondary">
            1 garagem    
            </Typography>
            <Typography variant="overline" color="text.secondary">
              Area 46m2 
            </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row",gap:2}}>

            <Typography variant="h6" color="text.success">
              {formatPriceToBRL(320000)}
            </Typography>
        </Box>

      </CardContent>
      <Divider/>
      <CardActions disableSpacing style={{display:"flex", flexDirection:"row", alignContent:"space-between", justifyContent:"space-around"}}>
        <IconButton aria-label="add to favorites" color='primary' onClick={()=>{setFavorite(!favorite);console.log('favoritado')}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
          {!favorite?<FavoriteBorderIcon/>:
          <Grow in={favorite}><FavoriteIcon /></Grow>
          }
          <Typography variant='caption'>Favoritar</Typography>
        </div>
        </IconButton>
        <IconButton aria-label="share" color='primary'>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <WhatsAppIcon />
        <Typography variant='caption'>Contato</Typography>
        </div>
        </IconButton>
        <ShortViewHouse/>
      </CardActions>

    </Card>
  );
}
export function CardHouse(){
    return(
    <>
    <RecipeReviewCard/>
    </>
    )
}