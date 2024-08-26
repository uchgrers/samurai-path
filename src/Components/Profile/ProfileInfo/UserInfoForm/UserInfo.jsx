import React from 'react';
import Contact from "./Contact";
import classes from "../ProfileInfo.module.css";

const UserInfo = (props) => {
    return (
        <div>
            <div className={classes.name}>{props.fullName}</div>
            <div>
                {'About me: ' + (props.aboutMe || null)}
            </div>
            <div>
                {'Looking for a job description: ' + props.lookingForAJobDescription || null}
            </div>
            {Object.keys(props.contacts).map(key => {
                return <Contact key={key} contactKey={key} contactValue={props.contacts[key] || '-'}/>
            })}
            {props.isOwner && <button onClick={() => props.setEditMode(true)}>Edit</button>}
        </div>
    );
};

export default UserInfo;