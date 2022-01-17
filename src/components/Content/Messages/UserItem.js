import {BrowserRouter as  Router, Route, NavLink, Link} from 'react-router-dom'

const UserItem = (props) => {
    let path = '/messages/' + props.id

    return (
        <div>
            <div className="messages__user">
                <div className="messages__user-avatar">
                    <img src={require("../../../assets/images/Avatar.png")} alt="" className="messages__user-avatar-img"/>
                </div>
                <div className="messages__user-name">
                    <NavLink to = {path}> {props.name} </NavLink>
                </div>
            </div>

        </div>
    )
}

export default UserItem