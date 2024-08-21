import React from 'react';
import classes from "./Header.module.css";
import logo from './../../images/logo.jpg'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/authReducer";

const Header = () => {

    const userData = useSelector(state => {
        return state.authReducer
    })

    const profilePhoto = useSelector(state => {
        return state.profilePage.profile && state.authReducer.isAuth ? state.profilePage.profile.photos.small : null
    })
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={classes.header}>
            <img className={classes.smallAvatar}
                 src={profilePhoto ? profilePhoto : logo} alt="img"/>
            <div className={classes.login}>
                <NavLink className={classes.loginLink} to={userData.isAuth ? '/profile' : '/login'}>
                    {userData.login ? <div className={classes.logout}>
                        {userData.login}
                        <button className={classes.logBtn} onClick={handleLogout}>Logout</button>
                    </div> : 'Login'}
                </NavLink>
            </div>
        </div>
    );
};

export default Header;