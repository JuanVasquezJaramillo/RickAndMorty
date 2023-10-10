import SearchBar from '../SearchBar/SearchBar';
import style from './navBar.module.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className={style.contenedor}>
            {/* <SearchBar /> */}
            <Link to='/'>
                <button className={style.boton}>Inicio</button>
            </Link>
            <Link to='/about'>
                <button className={style.boton}>
                    Acerca de
                </button>
            </Link>
            <Link to='/favorites'>
                <button className={style.boton}>
                    Favoritos
                </button>
            </Link>
        </div>
    );
}
export default NavBar;