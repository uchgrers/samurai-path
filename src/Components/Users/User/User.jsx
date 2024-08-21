import React from 'react';
import classes from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {

    const followUser = () => {
        props.changeFollowStatus(props.id, props.followed)
    }

    return (
        <div className={classes.item}>
            <div className={classes.user}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photo || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                         alt="Avatar"
                         className={classes.avatar}/>
                </NavLink>
                <div>{props.firstName}</div>
                <button onClick={followUser}
                        disabled={props.inFollowingProgress.some(el => el === props.id)}>
                    {props.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    );
};

export default User;