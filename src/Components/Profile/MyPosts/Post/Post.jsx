import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.postContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIQ8194oJTa4sdjVobEVQoENs10aYYM1U3Q&s" alt=""/>
                <div className={classes.postText}>{props.postText}</div>
            </div>
            <div className={classes.likesCount}>{props.likesCount} likes</div>
        </div>
    );
};

export default Post;