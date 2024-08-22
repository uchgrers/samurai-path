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
import classes from './Login.module.css';

const Login = () => {
    const isAuth = useSelector(state => {
        return state.authReducer.isAuth
    })

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    return (
        isAuth ? <Navigate to='/profile'/> :
        <div>
            <h1>Login page</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    const lengthRestriction = useMemo(() => minLengthRestrictionCreator(8), [])
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className={classes.error}>
                {props.error}
            </div>
            {createField("Email", "email",
                [required], Input, "text")}
            {createField("Password", "password",
                [required, lengthRestriction], Input, "password")}
            {createField(null, "rememberMe",
                [], Input, "checkbox", "Remember me")}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm)


export default Login;