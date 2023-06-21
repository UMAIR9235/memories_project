import React, { useEffect, useState } from 'react';
import {Avatar, Button, Paper, Typography, Grid, Container} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from './styles';
import Input from './Input';
import {GoogleLogin} from 'react-google-login';
import Icon from './Icon';
import {gapi} from 'gapi-script';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";


const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleSubmit = () => {}

  const handleChange = () => {}

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: {result, token }});

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const googleError = () => {
    console.log("Google Sign In was unsuccessful. Try Again Later");
  }

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: process.env.CLIENT_ID,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name='firstName' label="First Name" handleChange={handleChange} half />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
              {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type='password'/>}
              <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>   
          </Grid>
          <GoogleLogin 
            clientId= {process.env.CLIENT_ID}
            render={(renderProps) => (
              <Button 
                className={classes.googleButton} 
                color='primary' fullWidth onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                startIcon={<Icon />} 
                variant='contained'
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onError={googleError}
            cookiePolicy='single_host_origin'
          />
          
          <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth