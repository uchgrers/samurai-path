import React from 'react';
import classes from './TextArea.module.css';
import {Field} from "redux-form";

const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div>
            {props.children}
            {hasError && <div className={classes.errorMessage}>{props.meta.error}</div>}
        </div>
    );
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, type, text) => (
    <div>
        <Field
            validate={[...validators]}
            name={name}
            component={component}
            placeholder={placeholder}
            type={type}
            cols="50" rows="5"
        />
        {text}
    </div>
)