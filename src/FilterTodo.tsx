import { TextField,InputLabel, Select, MenuItem, Box, Button } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import React from 'react'

export default function FilterTodo() {
  return (
    <div>
      <h3>Filter Todo Section</h3>
      <Box sx={{ minWidth: 120 , display: 'flex'  }}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> 
      <FormControl >
        <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
        {/* Category Select */}
        <Select sx={{width: 100}}
          labelId="demo-simple-select-label"
          id="category-select"
          label="Age"
        >
          <MenuItem value={10}>Web Tasarım</MenuItem>
          <MenuItem value={20}>Pazarlama</MenuItem>
          <MenuItem value={30}>Gündelik</MenuItem>
        </Select>
      </FormControl>

      <FormControl >
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        {/* Category Select */}
        <Select sx={{width: 100}}
          labelId="demo-simple-select-label"
          id="status-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained">Filter</Button>

      <Button variant="contained">Clear Filter</Button>

    </Box>

    </div>
  )
}
