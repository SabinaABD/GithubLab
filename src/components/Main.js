import '../assets/styles/main.css'
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Dashboard from "./Content/Dashboard";
import Files from "./Content/Files";
import Inbox from "./Content/Inbox/Inbox";
import Properties from "./Content/Properties";
import Users from "./Content/Users";
import Messages from "./Content/Inbox/Messages";
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router-dom'


const Main = (props) => {

    return (
        <div className='App'>
            <div className="wrapper">
                <Router>
                    <Header />
                    <Navbar userName={props.userName}
                            companyName = {props.companyName}
                            avatar = {props.avatar}

                    />
                    <div className='content'>
                        <Routes>
                            <Route path='/dashboard' element={<Dashboard postData = {props.postData}
                                                                         dispatch = {props.dispatch}/>}/>
                            <Route path='/inbox' element={<Inbox emailUserName = {props.emailUserName}
                                                                   emailTime = {props.emailTime}
                                                                   mailData = {props.mailData}/>}/>
                            <Route path='/properties' element={<Properties />}/>
                            <Route path='/users' element={<Users />}/>
                            <Route path='/messages' element={<Messages usersData = {props.usersData}
                                                                       massagesData = {props.massagesData}
                                                                       dispatch = {props.dispatch}/>}/>
                            <Route path='/files' element={<Files />}/>
                        </Routes>
                    </div>
                    <Footer />
                </Router>

            </div>
        </div>
    )
}

export default Main