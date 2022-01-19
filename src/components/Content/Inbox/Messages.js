import '../../../assets/styles/messages.css'
import MessageItem from "../Messages/MessageItem";
import UserItem from "../Messages/UserItem";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/store";

const Messages = (props) => {

    const usersItems = props.usersData.map(elem => <UserItem id = {elem.id} name = {elem.name}/>)

    const messagesItems = props.massagesData.map(elem => <MessageItem id = {elem.id} message = {elem.message}/>)

    const newMessageElement = React.createRef()

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const updateMessageText = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }


    return (
        <div>
            <div className="messages">
                <div className="messages__inner">
                    <div className="messages__users">
                        {usersItems}
                    </div>
                    <div className="messages__messages">
                        {messagesItems}
                        <input onChange={updateMessageText} type="text" ref={newMessageElement}/>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages