import SearchBar from '../SearchBar/SearchBar';
import style from './navBar.module.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className={style.contenedor}>
            {/* <SearchBar /> */}
            <Link className={style.boton} to='/'>
                PERSONAJES
            </Link>
            <Link className={style.boton} to='/about'>
                SABER MÁS 
            </Link>
            <Link className={style.boton} to='/juegos'>
                JUEGOS
            </Link>
        </div>
    );
}
export default NavBar;