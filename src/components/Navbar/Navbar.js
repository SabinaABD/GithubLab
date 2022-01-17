import '../../assets/styles/navbar.css'
import {NavLink, Link} from 'react-router-dom'
import NavbarHeader from "./NavbarHeader";
import NavbarUser from "./NavbarUser";

const Navbar = (props) => {

    const setActive = ({isActive}) => {
        /*console.log('is active', isActive)
        return isActive? 'navbar__menu-item_active' : ""*/
        return 'react'
    }

    return (
        <div>
            <div className="navbar__inner">
                <div className="navbar__content">
                    <NavbarHeader />
                    <nav className="navbar__menu">
                        <div className="navbar__menu-item">
                            <NavLink to ="/dashboard" >Dashboard</NavLink>
                        </div>
                        <div className="navbar__menu-item">
                            <NavLink to ="/inbox" >Inbox</NavLink>
                        </div>
                        <div className="navbar__menu-item ">
                            <NavLink to ="/properties" >Properties</NavLink>
                        </div>
                        <div className="navbar__menu-item">
                            <NavLink to ="/users" >Users</NavLink>
                        </div>
                        <div className="navbar__menu-item">
                            <NavLink to ="/files" >Files</NavLink>
                        </div>
                        <div className="navbar__menu-item">
                            <NavLink to ="/messages">Messages</NavLink>
                        </div>
                    </nav>
                    <NavbarUser userName ={props.userName}
                                companyName = {props.companyName}
                                avatar = {props.avatar}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar