import './HeaderMenu.css'

const HeaderMenu = () => {
    return (
        <div>
            <div className="header__menu">
                <div className="header__menu-item">
                    <img src={require('../../../assets/images/ico-notifications.png')} alt="" className="header__menu-img"/>
                </div>
                <div className="header__menu-item">
                    <img src={require('../../../assets/images/ico-settings.png')} alt="" className="header__menu-img"/>
                </div>
                <div className="header__menu-item">
                    <img src={require('../../../assets/images/Toggle Off.png')} alt="" className="header__menu-img"/>
                </div>
            </div>
        </div>
    )
}
export  default HeaderMenu