import { Typography,Button,TextField } from '@mui/material'
import axios from 'axios';
import React,{useState} from 'react'


const Sg = () => {
    var[data,setData]= useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }

const submit=()=>{
  axios
   .post("http://localhost:4000/students",{
    name:data.name,
    age:data.age,
    department:data.department,
    })
    // .then(()=>{
    //   alert("new entry created successfully");

    // })
    .catch(()=>{
      alert("error saving data");
    });
};

  return (
    <div sx={{Flexgrow:1}} align='center'>
        <h1>SIGN IN</h1>
        <TextField variant='outlined' label='name' name='name' onChange={inputHandler} />&nbsp;
        <br /><br />
        <TextField variant='outlined' label='age' name='age' onChange={inputHandler} />&nbsp;&nbsp;
        <br /><br />
        <TextField variant='outlined'label='Department' name='department' onChange={inputHandler} />
        <br /><br />
        <Button variant='contained' onClick={submit}>submit</Button>
        
        
        
    </div>
  )
}

export default Sg