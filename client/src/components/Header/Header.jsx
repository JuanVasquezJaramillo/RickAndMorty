import estilo from './header.module.css';
import Menu from '../Menu/Menu';

const Header = () => {
    return (
        <>
            <div>
                <Menu/>
            </div>
            <div className={estilo.contenedorPadre}>
                <div className={estilo.subContenedor}>
                    <h1 style={{ fontSize: "150px" }}>Rick And Morty</h1>
                </div>
            </div>
        </>
    )
}

export default Header;