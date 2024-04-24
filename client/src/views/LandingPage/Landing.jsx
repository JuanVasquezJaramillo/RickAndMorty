// import NavBar from '../../components/NavBar/NavBar';
// const Landing = () => {
//     return (
//         <>
//             <div style={{ maxWidth: '1000px', maxHeight: '1000px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
//                 <div style={{ position: 'absolute' }}>
//                     <NavBar />
//                 </div>
//                 <div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Landing;





import NavBar from '../../components/NavBar/NavBar';
import style from './landing.module.css';
import estilo from './header.module.css';

const Landing = () => {
    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={estilo.contenedorPadre}>
                    <div className={estilo.subContenedor}>
                        <h1 className={style.title}>Rick And Morty</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;