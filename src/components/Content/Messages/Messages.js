import '../../../assets/styles/messages.css'
import MessageItem from "./MessageItem";
import UserItem from "./UserItem";
import React from "react";

const Messages = (props) => {

    const usersItems = props.usersData.map(elem => <UserItem id = {elem.id} name = {elem.name} key = {elem.id}/>)
    const messagesItems = props.messagesData.map(elem => <MessageItem id = {elem.id} message = {elem.message} key = {elem.id}/>)

    const newMessageElement = React.createRef()

    const onAddMessage = () => {
        props.addMessage()
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
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
                        <input onChange={onMessageChange} type="text" ref={newMessageElement} value={props.newMessageText}/>
                        <button onClick={onAddMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages