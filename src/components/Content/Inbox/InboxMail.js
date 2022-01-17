const InboxMail = (props) => {
    return (
        <div>
            <div className="inbox__mail">
                <div className="inbox__mail-status">
                    <div className="inbox__mail-status-item" />
                </div>
                <div className="inbox__mail-content">
                    <div className="inbox__mail-avatar">
                        <img src={require('../../../assets/images/Avatar Single.png')} alt="" className="inbox__mail-avatar-img"/>
                    </div>
                    <div className="inbox__mail-text">
                        <div className="inbox__mail-text-user">
                            <div className="inbox__mail-text-username">{props.name}</div>
                            <div className="inbox__mail-text-time">
                                {props.time}
                            </div>
                        </div>
                        <div className="inbox__mail-text-message">
                            {props.message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InboxMail