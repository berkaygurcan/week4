import Register from './Register';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import React from 'react';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoginForm from "./loginForm"
import { useState } from 'react';
export default function Header() {
    const [value,setValue] = useState("1");
    const handleChange = (event:any, newValue:any) => {
        setValue(newValue)
    }
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Register" value="1" />
            <Tab label="Item Two" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Register /></TabPanel>
        <TabPanel value="2"><LoginForm /></TabPanel>
      </TabContext>
    </Box>
  )
}
