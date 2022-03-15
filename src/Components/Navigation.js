
import '../Styles/Navigation.scss';
import logo from '../img/instagramLogo.png';
import searchIcon from '../img/searchIcon.png';
import Menu from './Menu.js';

function Navigation(){

    return(
        <div className='navigation'>
            <div className='container'>
                <img className='logo' src={logo} alt='instagram logo'></img>
                <div className='search'>
                    <img className='searchIcon' src={searchIcon} alt='search icon'></img>
                    <span className='searchTex'>Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}
export default Navigation;