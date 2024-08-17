import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar, IconButton, Typography } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import SlideShortView from '../SlideShorView';
import { useRouter } from 'next/router';

export  function ShortViewHouse() {
  const [open, setOpen] = React.useState(false);
const router = useRouter()

  const handleClickOpen = () => () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen()} aria-label="share" color='primary'>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Visibility />
        <Typography variant='caption'>Olhadinha</Typography>
        </div>
        </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Condominio Sevilha</DialogTitle>
        <DialogContent dividers={true}>
            <SlideShortView/>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
        {
                 `Novolar Sevilha é a oportunidade de morar perto do que você precisa, com comércios, mercados, padarias, farmácias 
                 e restaurantes, na estrutura e mobilidade do São Gabriel. Um bairro completo e cheio de vida, onde você pode criar raízes e rotinas só suas.`}
        
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          <Button onClick={()=>{handleClose; router.push('/imovel/012254')}}>Ver Completo</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
