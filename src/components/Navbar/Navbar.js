import '../../assets/styles/navbar.css'
import {NavLink, Link} from 'react-router-dom'
import NavbarHeader from "./NavbarHeader";
import NavbarUser from "./NavbarUser";

const Navbar = (props) => {

    const setActive = ({isActive}) => isActive? 'navbar__menu-item_active' : ""

    return (
        <div>
            <div className="navbar__inner">
                <div className="navbar__content">
                    <NavbarHeader />
                    <nav className="navbar__menu">
                        <div className="navbar__menu-item">
                            <NavLink to ="/dashboard" className = {setActive}>Dashboard</NavLink>
                        </div>
                        <div className="navbar__menu-item">
                            <NavLink to ="/inbox" className = {setActive}>Inbox</NavLink>
                        </div>
                        <div className="navbar__menu-item ">
                            <NavLink to ="/properties" className = {setActive}>Properties</NavLink>
                        </div>
                        <div className="navbar__menu-item">
                            <NavLink to ="/users" className = {setActive}>Users</NavLink>
                        </div>
                        <div className="navbar__menu-item">
                            <NavLink to ="/files" className = {setActive}>Files</NavLink>
                        </div>
                        <div className="navbar__menu-item">
                            <NavLink to ="/messages" className = {setActive}>Messages</NavLink>
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