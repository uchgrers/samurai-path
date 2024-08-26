import React, {useEffect} from 'react';
import {getStatus, updateStatus} from "../../../../redux/profilePageReducer";
import classes from './ProfileStatus.module.css'
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState();
    const dispatch = useDispatch();
    const statusRef = useRef(null);

    const changeEditMode = (edit) => {
        if (props.isOwner) {
            setEditMode(edit)
        }
    }

    useEffect(() => {
        dispatch(getStatus(props.id))
    }, [props.id])

    useEffect(() => {
        setLocalStatus(props.status)
    }, [editMode, props.status, props.id])

    const updateLocalStatus = () => {
        if (props.isOwner) {
            setLocalStatus(statusRef.current.value)
        }
    }

    const updateGlobalStatus = () => {
        changeEditMode(false)
        dispatch(updateStatus(localStatus || ''))
    }

    return (
        <div className={classes.status}>
            {editMode ? <input value={localStatus || ''}
                               ref={statusRef}
                               type="text"
                               onBlur={updateGlobalStatus}
                               autoFocus={true}
                               onChange={updateLocalStatus}
                /> :
                <div onDoubleClick={() => changeEditMode(true)}>{props.status || '----'}</div>}
        </div>
    );
};

export default ProfileStatus;