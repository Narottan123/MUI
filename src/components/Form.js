

import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'

const Form = () => {
    const [input,setinput]=useState({
        name:"",
        email:"",
        password:"",
        courses:"",
        terms:false
    });
    function handleChange(e){
        setinput((prevState)=>({
            ...prevState,
            [e.target.name]:[e.target.value]
        }))
    }
    function handlesubmit(e){
          e.preventDefault()
          console.log(input)
    }
  return (
    <>
       <form onSubmit={handlesubmit}>
          <TextField name='name' placeholder='enter your name' type='text' variant='outlined' value={input.name} sx={{margin:"20px"}} onChange={handleChange}/>
          <br/>
          <TextField name="email" placeholder='enter your email' type='email' variant='outlined' value={input.email} sx={{margin:"20px"}} onChange={handleChange}/>
          <br/>
          <TextField name="password" placeholder='enter password' type='password' variant='outlined' value={input.password} sx={{margin:"20px"}} onChange={handleChange}/>
          <br/>
          <FormControl fullWidth>
            <InputLabel id="menu">Courses</InputLabel>
            <Select  label="courses" value={input.courses} onChange={handleChange} name='courses'>
                   <MenuItem value={"mongodb"} >mongodb</MenuItem>
                   <MenuItem value={"express"}>express</MenuItem>
                   <MenuItem value={"node"}>node</MenuItem>
                   <MenuItem value={"react"}>react</MenuItem>
            </Select>
        </FormControl>
        <br/><br/>
        <FormGroup>
            <FormControlLabel label="I agree T&C" control={<Checkbox onChange={()=>setinput(prevState=>({
                ...prevState,terms:!input.terms,
            }))}/>}/>
          </FormGroup>
          <br/>
          <button type='submit'>submit</button>
        </form> 
        <br/>
       
    </>
  )
}

export default Form
