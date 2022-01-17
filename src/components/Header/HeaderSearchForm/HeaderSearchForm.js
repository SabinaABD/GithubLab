import './HeaderSearchForm.css'

const HeaderSearchForm = (props) => {
    return (
        <div>
            <div className="header__search-form">
                <div className="header__search-form-img">
                    <img src={require(`../../../assets/images/${props.img}`)} alt=""/>
                </div>
                <div className="header__search-input">
                    <input type="search" className="header__input" placeholder='Search...'/>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearchForm