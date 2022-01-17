import InboxMails from "./InboxMails";


const InboxNavbar = (props) => {

    return (
        <div className="inbox__navbar">
            <div className="inbox__navbar-title">
                <div className="inbox__navbar-title-text">
                    Inbox
                </div>
                <div className="inbox__navbar-title-btn">
                    <img src={require('../../../assets/images/compose.png')} alt="" className="inbox__navbar-title-btn-img"/>
                    <div className="inbox__navbar-title-btn-text">
                        Compose
                    </div>
                </div>
            </div>
            <InboxMails mailData = {props.mailData}/>
        </div>
    )
}

export default InboxNavbar