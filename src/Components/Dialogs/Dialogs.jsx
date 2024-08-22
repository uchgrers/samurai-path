import React, {useMemo} from 'react';
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthRestrictionCreator, required} from "../../utils/Validators/validators";
import {TextArea} from "../../Common/FieldsControl/TextArea";

const Dialogs = (props) => {

    const sendMessage = (values) => {
        if (values.messageText) {
            props.sendMessage(values.messageText);
        }
    }

    const dialogs = props.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)

    const messages = props.messages.map(message => <Message id={message.id} messageText={message.messageText}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div>
                    {messages}
                </div>
                <ReduxDialogsForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
};

const DialogsForm = (props) => {
    const lengthRestriction = useMemo(() => (maxLengthRestrictionCreator(15)), [])
    return (
        <form onSubmit={props.handleSubmit}
              className={classes.messageArea}>
            <Field
                component={TextArea}
                name="messageText"
                validate={[required, lengthRestriction]}
                cols="30" rows="10"/>
            <button className={classes.addMessageButton}>Send message</button>
        </form>
    )
}

const ReduxDialogsForm = reduxForm({
    form: 'dialogsForm'
})(DialogsForm)

export default Dialogs;