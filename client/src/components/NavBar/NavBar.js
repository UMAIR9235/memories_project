import React from 'react';
import memories from '../../images/memories.png';
import classes from './NavBar.module.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
    const user = null;

  return (
    <nav className={classes.nav}>
        <div className={classes.brandContainer}>
            <Link to="/">Memories</Link>
            <img src={memories} alt="memories" />
        </div>
        <div className={classes.loginLogout}>
            {user ? (
                <div className={classes.profile}>
                    <div className={classes.avatar}>
                        <img src="" alt="" />
                    </div>
                    <h6>Username</h6>
                    <Link to="">Logout</Link>
                </div>
            ) : (
                <Link to="/auth" className={classes.login}>Log In</Link>
            )}
        </div>
    </nav>
  )
}

export default NavBar