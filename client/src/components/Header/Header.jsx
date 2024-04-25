import estilo from './header.module.css';

const Header = () => {
    return (
        <>
            <div className={estilo.contenedorPadre}>
                <div className={estilo.subContenedor}>
                    <h1 style={{fontSize: "150px"}}>Rick And Morty</h1>
                </div>
            </div>
        </>
    )
}

export default Header;