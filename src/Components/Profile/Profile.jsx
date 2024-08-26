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
                            <ProfileInfo dispatch={props.dispatch}
                                         profile={props.profile}
                                         status={props.status}
                                         isOwner={props.isOwner}/>
                            <MyPostsContainer/>
                        </div>
                }
            </div>
        );
    };

export default Profile;