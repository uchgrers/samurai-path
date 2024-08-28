import React, {useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../Common/FieldsControl/TextArea";
import {
    minLengthRestrictionCreator,
    required
} from "../../utils/Validators/validators";
import {login} from '../../redux/authReducer';
import ss from './../../Common/Error.module.css';
import s from './Login.module.css';

const Login = () => {
    const isAuth = useSelector(state => {
        return state.authReducer.isAuth
    })
    const captchaURL = useSelector(state => {
        return state.authReducer.captchaURL
    })

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    return (
        isAuth ? <Navigate to='/profile'/> :
            <div>
                <h1>Login page</h1>
                <ReduxLoginForm onSubmit={onSubmit} captchaURL={captchaURL}/>
            </div>
    );
};

const LoginForm = (props) => {
    const lengthRestriction = useMemo(() => minLengthRestrictionCreator(8), [])
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={ss.error}>
                {props.error}
            </div>
            {createField("Email", "email",
                [required], Input, "text")}
            {createField("Password", "password",
                [required, lengthRestriction], Input, "password")}
            {createField(null, "rememberMe",
                [], Input, "checkbox", "Remember me")}
            {props.captchaURL &&
                <div className={s.captchaContainer}>
                    <img src={props.captchaURL} alt=""/>
                    {createField('Enter captcha', 'captcha',
                        [required], Input, 'text')}
                </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const CaptchaForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {createField('Enter captcha', 'captcha',
                [required], Input, 'text')}
            <button>Submit</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm);

const ReduxCaptchaForm = reduxForm({
    form: 'captchaForm'
})(CaptchaForm)


export default Login;