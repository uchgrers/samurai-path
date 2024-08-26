import React from 'react';
import userPhoto from "../../../../images/userPhoto.png";
import classes from "../ProfileInfo.module.css";
import s from './Avatar.module.css';
import {sendProfilePhoto} from "../../../../redux/profilePageReducer";

const Avatar = (props) => {
    const uploadPhoto = (e) => {
        if (e.target.files) {
            props.dispatch(sendProfilePhoto(e.target.files[0]))
        }
    }
    return (
        <div className={s.item}>
            <img src={props.photo || userPhoto}
                 alt="Avatar"
                 className={classes.avatar}/>
            <div className={classes.uploadPhoto}>
                {props.isOwner && <input onChange={uploadPhoto} type="file"></input>}
            </div>
        </div>
    );
};

export default Avatar;