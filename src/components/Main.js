import '../assets/styles/main.css'
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Dashboard from "./Content/Dashboard/Dashboard";
import Files from "./Content/Files";
import Properties from "./Content/Properties";
import Users from "./Content/Users/Users";
import MessagesContainer from "./Content/Messages/MessagesContainer";
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router-dom'
import DashboardContainer from "./Content/Dashboard/DashboardContainer";
import UsersContainer from "./Content/Users/UsersContainer";


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
                            <Route path='/dashboard' element={<DashboardContainer />}/>
                            <Route path='/properties' element={<Properties />}/>
                            <Route path='/users' element={<UsersContainer />}/>
                            <Route path='/messages' element={<MessagesContainer />}/>
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