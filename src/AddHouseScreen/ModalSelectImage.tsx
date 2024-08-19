import Image from "next/image";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export function ModalSelectImage({show,handleClose,messageModal}:{show:boolean,handleClose:()=>void, messageModal:String}){
    
    return(
    <>
<React.Fragment>
      
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deletar Imóvel"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {messageModal}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </>
    )
}