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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 305,minWidth: 250, marginRight:'1rem'  }}>
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
        <Typography variant="subtitle2" color="text.secondary">
            São Gabriel - Belo Horizonte
        </Typography>
        <div>

            <Typography variant="overline" color="text.secondary">
                2 Quartos 1 Banheiro  
            </Typography>
        </div>
        <div>

            <Typography variant="overline" color="text.secondary">
            1 garagem   Area 46m2 
            </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color='primary'>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        
          <FavoriteIcon />
          <Typography variant='caption'>Curtir</Typography>
        </div>
        </IconButton>
        <IconButton aria-label="share" color='primary'>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <ShareIcon />
        <Typography variant='caption'>Compartilhar</Typography>
        </div>
        </IconButton>
        <ExpandMore
          expand={false}
          onClick={handleExpandClick}
          
          aria-label="show more"
        >
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

                <Visibility  color='primary' />
                <Typography variant='caption' color={'primary'}>olhadinha</Typography>
            </div>
        </ExpandMore>
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