import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, FormHelperText, Input, InputLabel } from '@mui/material';

export default function Register() {
  // register posts.
  const [formData, setFormData] = useState<any>({}) 

  const handleFieldChange = (event: any) => {
    
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    setFormData((prev: any) => ({...prev,[name]: value}))
    
  }
  
  const handleRegister = () => {
   console.log(formData)
   //@todo - istek atılıcak
   

  }
  return (
    <div>
      <InputLabel htmlFor="email-input" >Email address</InputLabel>
      <Input id="email-input" name='username' onChange={handleFieldChange} aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

      <Input id="password-input" name='password' onChange={handleFieldChange} aria-describedby="my-helper-text2" />
      <FormHelperText id="my-helper-text2">Password</FormHelperText>

      <Input id="password-confirm" name='passwordConfirm' onChange={handleFieldChange} aria-describedby="my-helper-text2" />
      <FormHelperText id="my-helper-text2">Password Confirm</FormHelperText>

      <Button variant="contained" onClick={handleRegister}>Register</Button>

    </div>
  )
}
