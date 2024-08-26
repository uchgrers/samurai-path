import React from 'react';
import s from './Contact.module.css';

const Contact = (props) => {
    let contact = props.contactValue
    if (props.contactValue !== '-' && !props.contactValue.startsWith('https://')) {
        contact = 'https://' + props.contactValue
    }
    return (
        <div>
            <b>{props.contactKey}</b>
            {props.contactValue === '-' ? <span className={s.link}>{': ' + contact}</span>
                : <a href={contact} className={s.link}>{': ' + contact}</a>}
        </div>
    );
};

export default Contact;