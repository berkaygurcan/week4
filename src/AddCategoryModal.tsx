import React from 'react'
import EditStatuModal from './editStatuModal';
import { Modal, Box, Button } from '@mui/material'
import { useState } from 'react';
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
  const [open, setOpen] = useState<boolean>(false)
  const handleToggle = () => {
    setOpen(!open);
  }
  return (
    <Modal
        open={open}
        onClose={handleToggle}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <EditStatuModal/>
        </Box>
      </Modal>
  )
}
