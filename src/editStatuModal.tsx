import React, {useState} from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
const  EditStatuModal = (props:any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <TextField id="standard-basic" label="Status" variant="standard" />
          <TextField id="standard-basic" label="Color" variant="standard" />
          <Button variant="contained">Add Status</Button>

          <p id="child-modal-description">
            Burada ilgili kategoriye ait statüler listelenecek
          </p>
          <ul>
            <li>
                Web Tasarım 
                <Button >Sil</Button>
                <Button >Düzenle</Button>
                
            </li>
            <li>
                Pazarlama
                <Button >Sil</Button>
                <Button >Düzenle</Button>
                
            </li>
            <li>
                Günledik
                <Button >Sil</Button>
                <Button >Düzenle</Button>
                
            </li>
          </ul>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
        );
      }
export default EditStatuModal;