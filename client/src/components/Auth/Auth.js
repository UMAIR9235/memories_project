import React from 'react';
import {Avatar, Button, Paper, Typography, Grid, Container, TextField} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
  const classes = useStyles();
  const isSignup = false;

  const handleSubmit = () => {}

  const handleChange = () => {}

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
                  <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus xs={6} />
                  <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus xs={6} />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="text"/>
              <Input name="password" label="Password" handleChange={handleChange}/>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth