
const MessageItem = (props) => {
    return (
        <div>
            <div className="messages__messages-message">
                {props.message}
            </div>
        </div>
    )
}

export default MessageItem