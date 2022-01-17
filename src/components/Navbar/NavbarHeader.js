

const NavbarHeader = (props) => {
    return (
        <div>
            <div className="navbar__header">
                <div className="navbar__logo">
                    <img src={require("../../assets/images/HDWY.png")} alt=""/>
                </div>
                <div className="navbar__header-title">
                    MENU
                </div>
            </div>
        </div>
    )
}

export default NavbarHeader