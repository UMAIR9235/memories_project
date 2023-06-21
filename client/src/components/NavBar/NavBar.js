import React, { useEffect, useState } from 'react';
import memories from '../../images/memories.png';
import classes from './NavBar.module.css';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        //JWT
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

  return (
    <nav className={classes.nav}>
        <div className={classes.brandContainer}>
            <Link to="/">Memories</Link>
            <img src={memories} alt="memories" />
        </div>
        <div className={user ? classes.loginLogout : ""}>
            {user ? (
                <div className={classes.profile}>
                    <img className={classes.avatar} src={user.result.imageUrl} alt="" />
                    <h6>{user.result.name}</h6>
                    <button className={classes.logoutButton} onClick={logout}>Logout</button>
                </div>
            ) : (
                <Link to="/auth" className={classes.login} >Log In</Link>
            )}
        </div>
    </nav>
  )
}

export default NavBar