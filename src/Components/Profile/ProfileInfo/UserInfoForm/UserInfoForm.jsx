import React, {useEffect} from 'react';
import s from './UserInfoForm.module.css';
import {createField, Input} from "../../../../Common/FieldsControl/TextArea";
import {initialize, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {required} from "../../../../utils/Validators/validators";

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
            {Object.keys(props.contacts).map(key => {
                return (
                    <div className={s.item}>
                        <b>{`${key}: `} </b>
                        {createField(key, key, [], Input, 'text')}
                    </div>)
            })}
            <button>Save</button>
        </form>
    );
};

const ReduxUserInfoForm = reduxForm({
    form: 'userInfoForm',
    onSubmit: (values) => {
        const formData = {
            fullName: values.fullName,
            aboutMe: values.aboutMe,
            lookingForAJobDescription: values.lookingForAJobDescription,
            contacts: {
                facebook: values.facebook,
                website: values.website,
                vk: values.vk,
                twitter: values.twitter,
                instagram: values.instagram,
                youtube: values.youtube,
                github: values.github,
                mainLink: values.mainLink
            }
        }
        console.log('Отправка данных формы:', formData);
    }

})(UserInfoForm)

export default ReduxUserInfoForm;