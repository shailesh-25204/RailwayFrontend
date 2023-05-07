import React, { useEffect, useState } from 'react'
import TrainDataService from '../services/trainServices'
import { useNavigate } from "react-router-dom";
import { Grid, Paper, TextField,Button,Typography, Link} from "@mui/material"
import { HStack } from '@chakra-ui/react'



const Signup = () => {
    const navigate = useNavigate();
    const paperStyle={
        padding:20,
        height:'80vh',
        width:400,
        margin:'20px auto'

    }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState() ;
  const [ userName,  setUserName] = useState() ;
 
//   username: req.body.username,
//           givenName: req.body.givenName,
//           address: req.body.address,
//           email:req.body.email,
//           phone: req.body.phone,
const obj = {
    firstName : firstName,
    lastName : lastName, 
    email : email,
    userName:userName,
    password : password,
    phone:phone,
}
useEffect(()=>{
    console.log(obj) ;
}, [firstName, lastName, userName, email, password, phone])

const submitHandler = (e)=>{
    e.preventDefault() ;
    console.log(obj) ;
    
    TrainDataService.post('/api/auth-user/signup', obj)
    .then(res => {
        console.log("Response Recieved")
        console.log(res)
        // console.log(trains)
        navigate('/login')
      })
      .catch(err => console.log(err))


}
    
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <h2>Sign Up</h2>
            </Grid>
            <form onSubmit={submitHandler} >
            <HStack>
            <TextField label="First name" value={firstName} onChange={(e)=>{setFirstName(e.target.value);}} placeholder='Enter your First Name' fullWidth required style={{marginTop:12}}/>
                <TextField label="Last name" placeholder='Enter your Last Name' fullWidth required style={{marginTop:12}}
                value={lastName} onChange={(e)=>{setLastName(e.target.value);}}
                />
            </HStack>
            <TextField label="Email Address" placeholder='Enter your Email ID'  type='email'  fullWidth required style={{marginTop:12}}
            value={email} onChange={(e)=>{setEmail(e.target.value);}}
            
            />
            <TextField label="Phone Number" placeholder='Enter your Phone Number' type='mobilenumber' fullWidth required style={{marginTop:12}}
            value={phone} onChange={(e)=>{setPhone(e.target.value);}}
            
            />
            <TextField label="Username" placeholder='Enter your Username' fullWidth required style={{marginTop:12}}

                value={userName} onChange={(e)=>{setUserName(e.target.value);}}
            
            />
            <HStack>
            <TextField label="Password" placeholder='Enter your Password' type='password' fullWidth required style={{marginTop:12}}
            
            value={password} onChange={(e)=>{setPassword(e.target.value);}}
            />
            <TextField label="Confirm Password" placeholder='Confirm your password'  type='password' fullWidth required style={{marginTop:12}}/>
            </HStack>


                <Button style={{backgroundColor:"#252994", color:'white',marginTop:12}} fullWidth type='submit' >Sign Up</Button>

            </form>
                <Typography style={{marginTop:10}}>
                    <p style={{color:"#FF6E1D"}}>Already Signup?</p>
                </Typography>

                <Typography> Do you have an account?
                <Link href='#' style={{color:"#252994"}}>Login</Link>
            </Typography>
        </Paper>

    </Grid>
  )
}

export default Signup
