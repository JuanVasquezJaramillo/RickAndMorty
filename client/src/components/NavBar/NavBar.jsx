import SearchBar from '../SearchBar/SearchBar';
import style from './nav.module.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className={style.contenedor}>
            <SearchBar />
            <Link to='/home'>
                <button>
                    Home
                </button>
            </Link>
            <NavLink to='/about'>
                <button>
                    About
                </button>
            </NavLink>
            <NavLink to='/favorites'>
                <button>
                    Favorites
                </button>
            </NavLink>
        </div>
    );
}
export default NavBar;