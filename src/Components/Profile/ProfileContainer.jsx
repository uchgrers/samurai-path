import React from 'react';
import Profile from "./Profile";
import {withAuthNavigate} from "../../HOC/withAuthNavigate";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {setProfile} from "../../redux/profilePageReducer";

const ProfileAuthContainer = withAuthNavigate(Profile);

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => {
        return state.profilePage.profile
    })
    const status = useSelector(state => {
        return state.profilePage.status
    })

    const {userID} = useParams()
    const isOwner = !userID;

    useEffect(() => {
        dispatch(setProfile(userID))
    }, [userID])

    return <ProfileAuthContainer dispatch={dispatch} isOwner={isOwner} profile={profile} status={status}/>
}


export default ProfileContainer;
