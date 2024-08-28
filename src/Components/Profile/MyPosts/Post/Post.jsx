import React from 'react';
import classes from './Post.module.css'
import userPhoto from "../../../../images/userPhoto.png";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.postContainer}>
                <img src={props.userAvatar || userPhoto} alt=""/>
                <div className={classes.postText}>{props.postText}</div>
            </div>
            <div className={classes.likesCount}>{props.likesCount} likes</div>
        </div>
    );
};

export default Post;