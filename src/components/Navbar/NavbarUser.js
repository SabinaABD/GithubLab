

const NavbarUser = (props) => {
    return (
        <div>
            <div className="navbar__user">
                <div className="navbar__user-img">
                    <img src={require(`../../assets/images/${props.avatar}`)} alt="" className="navbar__user-avatar"/>
                    <div className="navbar__user-mail">
                        <img src={require("../../assets/images/Rectangle.png")} alt="" className="navbar__user-mail-img"/>
                    </div>
                </div>
                <div className="navbar__user-info">
                    <div className="navbar__user-name">
                        {props.userName}
                    </div>
                    <div className="navbar__user-company">
                        {props.companyName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarUser