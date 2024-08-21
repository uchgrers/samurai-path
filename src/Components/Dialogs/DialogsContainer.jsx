import React from 'react';
import {sendMessage} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../HOC/withAuthNavigate";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageText) => {
            dispatch(sendMessage(messageText))
        }
    }
}

const authNavigateComponent = withAuthNavigate(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authNavigateComponent)

export default DialogsContainer;