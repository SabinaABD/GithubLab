import InboxMail from "./InboxMail";

const InboxMails = (props) => {



    const mailItems = props.mailData.map(elem => <InboxMail name={elem.name} time={elem.time} message={elem.message} id={elem.id} key={elem.id}/>)

    return(
        <div>
            <div className="inbox__mails">
                {mailItems}
            </div>
        </div>
    )
}

export default InboxMails