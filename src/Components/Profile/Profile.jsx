import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {

        return (
            <div className={classes.content}>
                {
                    props.profile === null ? <Preloader/> :
                        <div className={classes.container}>
                            <ProfileInfo profile={props.profile} status={props.status}/>
                            <MyPostsContainer/>
                        </div>
                }
            </div>
        );
    };

export default Profile;