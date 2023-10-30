import SearchBar from '../SearchBar/SearchBar';
import style from './navBar.module.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className={style.contenedor}>
            {/* <SearchBar /> */}
            <Link className={style.boton} to='/'>
                INICIO
            </Link>
            <Link className={style.boton} to='/about'>
                Acerca de
            </Link>
            <Link className={style.boton} to='/favorites'>
                Favoritos
            </Link>
        </div>
    );
}
export default NavBar;