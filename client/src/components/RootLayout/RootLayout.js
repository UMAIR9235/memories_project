import React from 'react';
import classes from './RootLayout.module.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();





const RootLayout = (props) => {
  return (

    <ThemeProvider theme={theme}>
        <div className={classes.header}>
          <NavBar />
          <Outlet />
        </div>
    </ThemeProvider>
      
  )
}

export default RootLayout