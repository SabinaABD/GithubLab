import '../../../assets/styles/inbox.css'
import InboxNavbar from "./InboxNavbar";
import InboxEmail from "./InboxEmail";
import {addPostActionCreator} from "../../../redux/store";

const Inbox = (props) => {


    return (
        <div>
            <div className="inbox__inner">
                <InboxNavbar mailData = {props.mailData}/>
                <InboxEmail emailUserName = {props.emailUserName} emailTime = {props.emailTime} />
            </div>
        </div>
    )
}

export default Inbox