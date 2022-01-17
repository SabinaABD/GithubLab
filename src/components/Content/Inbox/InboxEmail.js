const InboxEmail = (props) => {
    return (
        <div>
            <div className="inbox__email">
                <div className="inbox__email__header">
                    <div className="inbox__email__header-user">
                        <div className="inbox__email__header-user-avatar">
                            <img src={require('../../../assets/images/Avatar Single.png')} alt="" className="inbox__email__header-user-avatar-img"/>
                        </div>
                        <div className="inbox__email__header-user-name">
                            {props.emailUserName}
                        </div>
                    </div>
                    <div className="inbox__email__header-previous">
                        Previous messages
                    </div>
                    <div className="inbox__email__header-buttons">
                        <img src={require('../../../assets/images/Bin.png')} alt="" className="inbox__email__header-button"/>
                        <img src={require('../../../assets/images/Else.png')} alt="" className="inbox__email__header-button"/>
                    </div>
                </div>
                <div className="inbox__email-title">
                    <div className="inbox__email-title-time">{props.emailTime}</div>
                    <div className="inbox__email-title-text">
                        Staging the House
                    </div>
                    <div className="inbox__email-title-reply">
                        <img src={require('../../../assets/images/reply.png')} alt="" className="inbox__email-title-reply-img"/>
                        <div className="inbox__email-title-reply-text">
                            Reply
                        </div>
                    </div>
                </div>
                <div className="inbox__email-content">
                    <div className="inbox__email-content-greeting">
                        Hi Maylee!
                    </div>
                    <div className="inbox__email-content-text">
                        I did the thing you asked and made the thing do the thing
                        I did the thing you asked and made the thing do the thing
                        I did the thing you asked and made the thing do the thing
                        I did the thing you asked and made the thing do the thing
                        I did the thing you asked and made the thing do the thing.
                    </div>
                    <div className="inbox__email-content-images">
                        <img src={require('../../../assets/images/image.png')} alt="" className="inbox__email-content-images-item"/>
                        <img src={require('../../../assets/images/image.png')} alt="" className="inbox__email-content-images-item"/>
                    </div>
                    <div className="inbox__email-content-download">
                        <img src={require('../../../assets/images/download.png')} alt="" className="inbox__email-content-download-img"/>
                        <div className="inbox__email-content-download-text">
                            Download all
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InboxEmail