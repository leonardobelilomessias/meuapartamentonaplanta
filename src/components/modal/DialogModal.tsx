import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IModal{
    openModal:boolean
    setOpenModal:(value:boolean)=>void
    ExecFunction?:()=>void
    message:string
    title:string,

}
export  function DialogModal({openModal,setOpenModal,ExecFunction,message,title}:IModal) {

  if(ExecFunction?.length){

    try{
      ExecFunction()
      setOpenModal(!openModal)

    }catch(e){
      console.log(e)
    }
    finally{

    }
  }

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
async function  handleConfirme(){
    if(ExecFunction){

      try{
       ExecFunction()
        setOpenModal(false)
      }catch(e){
        console.log(e)
      }
    }
  }

  return (
    <React.Fragment>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose()}>Cancelar</Button>
          <Button onClick={()=>handleConfirme()} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}