import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
import image from '../../assets/images/mohan-muruge.jpg';

function Header() {

    return (
        <header className="header">
            <img className="header__img" src={logo} alt="logo brainflix" />
            <form className="header__form" action="">
                <input className="header__input" type="search" placeholder="Search"></input>
                <img className="header__avatar" src={image} alt="avatar" />
                <button className="header__button" type="submit">Upload</button>
            </form>
        </header>
    );
}

export default Header;