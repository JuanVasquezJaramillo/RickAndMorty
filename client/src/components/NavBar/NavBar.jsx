import SearchBar from '../SearchBar/SearchBar';
import style from './navBar.module.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className={style.contenedor}>
            {/* <SearchBar /> */}
            <NavLink to='/'> Inicio </NavLink>
            <NavLink to='/about'> Acerca de </NavLink>
            <NavLink to='/favorites'> Favoritos </NavLink>
        </div>
    );
}
export default NavBar;