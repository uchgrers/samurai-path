import React from 'react';
import classes from './ProfileInfo.module.css';
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

    return (
        <div className={classes.info}>
            <img src={props.profile.photos.large || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                 alt="Avatar"
                 className={classes.avatar}/>
            <div className={classes.description}>
                <div className={classes.name}>{props.profile.fullName}</div>
                <ProfileStatus id={props.profile.userId} status={props.status}/>
                <div>
                    {'Looking for a job: ' + props.profile.lookingForAJobDescription || null}
                </div>
                <div>
                    {'Contacts: ' + (props.profile.contacts.vk || null)}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;