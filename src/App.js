import './App.css';
import Main from "./components/Main";
import NavbarUser from "./components/Navbar/NavbarUser";

function App(props) {

  return (
    <div>
      <Main userName ={props.state.inbox.userName}
            companyName = {props.state.inbox.companyName}
            avatar = {props.state.inbox.avatar}
            emailUserName = {props.state.inbox.emailUserName}
            emailTime = {props.state.inbox.emailTime}
            mailData = {props.state.inbox.mailData}
            usersData = {props.state.messages.usersData}
            massagesData = {props.state.messages.messagesData}
            postData = {props.state.dashboard.postData}
      />

    </div>
  );
}

export default App;
