import '../../../assets/styles/messages.css'
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        usersData: state.messages.usersData,
        messagesData: state.messages.messagesData,
        newMessageText: state.messages.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer