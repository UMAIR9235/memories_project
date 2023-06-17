import React from 'react';
import classes from './RootLayout.module.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


const RootLayout = (props) => {
  return (
    <div className={classes.header}>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default RootLayout