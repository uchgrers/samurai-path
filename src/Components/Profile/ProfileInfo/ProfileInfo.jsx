import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {getUserDescription} from "../../../redux/profilePageReducer";
import {useDispatch} from "react-redux";
import UserInfo from "./UserInfoForm/UserInfo";
import Avatar from "./Avatar/Avatar";
import UserInfoForm from "./UserInfoForm/UserInfoForm";
import {userInfoFormConstructor, userInfoInitialValuesConstructor} from "../../../utils/userInfoFormConstructors";

const ProfileInfo = (props) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const formInitialValues = userInfoInitialValuesConstructor(props.profile)

    const confirmEdit = (formData) => {
        setEditMode(false)
        dispatch(getUserDescription(userInfoFormConstructor(formData), props.profile.userId))
    }

    return (
        <div className={classes.info}>
            <div className={classes.avatarBox}>
                <Avatar dispatch={dispatch} photo={props.profile.photos.large} isOwner={props.isOwner}/>
                <ProfileStatus id={props.profile.userId} status={props.status} isOwner={props.isOwner}/>
            </div>
            <div className={classes.description}>
                {
                    editMode ? <UserInfoForm initialValues={formInitialValues}
                                             contacts={props.profile.contacts}
                                             onSubmit={confirmEdit}
                                             fullName={props.profile.fullName}
                                             aboutMe={props.profile.aboutMe}
                                             lookingForAJobDescription={props.profile.lookingForAJobDescription}
                        />
                        : <UserInfo aboutMe={props.profile.aboutMe}
                                    lookingForAJobDescription={props.profile.lookingForAJobDescription}
                                    contacts={props.profile.contacts}
                                    setEditMode={setEditMode}
                                    fullName={props.profile.fullName}
                                    isOwner={props.isOwner}
                        />
                }
            </div>
        </div>
    );
};

export default ProfileInfo;