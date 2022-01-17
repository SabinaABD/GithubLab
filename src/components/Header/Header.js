import '../../assets/styles/header.css'
import HeaderSearchForm from "./HeaderSearchForm/HeaderSearchForm";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__inner">
                <HeaderSearchForm img = {'Search.png'}/>
                <HeaderMenu />
            </div>
        </div>
    )
}

export default Header