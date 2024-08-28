import React, {useEffect} from 'react';
import s from './UserInfoForm.module.css';
import {createField, Input} from "../../../../Common/FieldsControl/TextArea";
import {initialize, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {required} from "../../../../utils/Validators/validators";
import ss from './../../../../Common/Error.module.css'

const UserInfoForm = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (props.initialValues) {
            dispatch(initialize('userInfoForm', props.initialValues));
        }
    }, [dispatch, props.initialValues])

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.item}>
                Full name:
                {createField(
                    'Full name...', 'fullName', [required], Input, 'text')}
            </div>
            <div className={s.item}>
                About me:
                {createField(
                    'About me...', 'aboutMe', [], Input, 'text')}
            </div>
            <div className={s.item}>
                Looking for a job description:
                {createField(
                    'Looking for a job description...', 'lookingForAJobDescription', [], Input, 'text')}
            </div>
            <div><b>Contacts:</b></div>
            {Object.keys(props.contacts).map(key => {
                return (
                    <div className={s.item}>
                        <b>{`${key}: `} </b>
                        {createField(key, key, [], Input, 'text')}
                    </div>)
            })}
            <div className={ss.error}>
                {props.error}
            </div>
            <button>Save</button>
        </form>
    );
};

const ReduxUserInfoForm = reduxForm({
    form: 'userInfoForm'
})(UserInfoForm)

export default ReduxUserInfoForm;