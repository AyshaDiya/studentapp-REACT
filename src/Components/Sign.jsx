import {Button,TextField } from '@mui/material'
import React,{useState} from 'react'

const Sign = () => {
  return (
    <div>
        <h1>Sign Up</h1>
        <TextField variant='outlined' label='username' name='fname'/>&nbsp;
        <br /><br />
        <TextField variant='outlined' label='password' name='password'/>&nbsp;&nbsp;
        <br /><br />
        <TextField variant='outlined'label='Email' name='Email' />
        <br /><br />
        <Button variant='contained'>submit</Button>
    </div>
  )
}
