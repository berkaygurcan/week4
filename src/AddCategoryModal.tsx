
import { Modal, Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import EditStatuModal from './EditStatuModal';
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


export default function AddCategoryModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Edit Categories</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <Button variant="contained">Add Categorie</Button>
          <p id="parent-modal-description">
            Burada var olan kategoriler listelenecek 
          </p>

          <ul>
            <li>
                Web Tasarım 
                <EditStatuModal />
            </li>
            <li>
                Pazarlama 
                <EditStatuModal />
            </li>
            <li>
                Günledik 
                <EditStatuModal />
            </li>
          </ul>
          
          
        </Box>
      </Modal>
    </div>
  )
}
