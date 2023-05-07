import { Avatar, Button, Grid ,Link,Paper, TextField, Typography} from '@mui/material'
import { useNavigate } from "react-router-dom";
import TrainDataService from '../services/trainServices'
import React, { useEffect, useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login1 = () => {
    const navigate = useNavigate();

    const paperStyle={
        padding:20,
        height:'70vh',
        width:300,
        margin:'20px auto'

    }
    const avtarStyle={
        backgroundColor:"#FF6E1D"
    }

    const [userName, setUsername] = useState("");
    const [password, setPass] = useState("");

    const obj = {
        userName:userName,
        password : password,
    }

    useEffect(()=>{
        console.log(obj) ;
    }, [ userName , password])

    const submitHandler = (e)=>{
        e.preventDefault() ;
        console.log(e) ;
        
        TrainDataService.post('/api/auth-user/login', obj)
        .then(res => {
            console.log("Response Recieved")
            console.log(res)
            navigate('/')
            // console.log(trains)
          })
          .catch(err => console.log(err))
    
    
    }

  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
                <h2>Login</h2>
            </Grid>
            <form onSubmit={submitHandler}>
            <TextField value={userName} onChange={(e)=>{setUsername(e.target.value);}} label='Username' placeholder='Enter Username' fullWidth required/>
            <TextField value={password} onChange={(e)=>{setPass(e.target.value);}} label='password' placeholder='Enter password' type='password' fullWidth required style={{marginTop:12}}/>
            <FormControlLabel
                label="Remember Me"
                control={
                    <Checkbox
                    name="checkbox"
                    color='primary'
                    />
                }
                />
            <Button type='submit'  style={{backgroundColor:"#252994", color:'white'}} fullWidth>Login</Button>
            </form>
            <Typography style={{marginTop:10}}>
                <Link href='#' style={{color:"#FF6E1D"}}>Forgot Password?</Link>
            </Typography>
            <Typography> Do you have an account?
                <Link href='#' style={{color:"#252994"}}>Sign Up</Link>
            </Typography>
        </Paper>
    </Grid>
  )
}

export default Login1
