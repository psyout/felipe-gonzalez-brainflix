import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
import image from '../../assets/images/mohan-muruge.jpg';
import { Link } from 'react-router-dom';

function Header({ handleLogoClick }) {
    return (
        <header className='header'>
            <Link to='/' className='header__img' onClick={handleLogoClick}>
                <img className='header__img--logo' src={logo} alt='logo brainflix' />
            </Link>
            <form className='header__form' action=''>
                <input className='header__input' type='search' placeholder='Search'></input>
                <img className='header__avatar' src={image} alt='avatar' />
                <Link to='/uploadvideo' className='header__button'>
                    Upload
                </Link>
            </form>
        </header>
    );
}

export default Header;
