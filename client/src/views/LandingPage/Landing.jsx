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


const Landing = () => {
    return (
        <>
            <div className={style.container}>
                <NavBar />
                <section>
                <h1 className={style.title}>Rick And Morty</h1>
                </section>
                <div className={style.containerSomos}>
                    <div className={style.prueba}>
                        <h2 className={style.titleBis}>Resumen</h2>
                        <p className={style.parrafo}>
                            "Rick y Morty" es una serie animada para adultos que sigue las aventuras interdimensionales del científico alcohólico Rick Sánchez y su nieto adolescente, Morty Smith. La serie se caracteriza por su humor absurdo y oscuro, que combina elementos de ciencia ficción, comedia y drama.
                        </p>
                    </div>
                    <div className={style.imagen}>
                        <img
                            src="https://d.newsweek.com/en/full/1825057/rick-morty-season-5.webp?w=1600&h=900&q=88&f=1aa79d1810ced3f9a5379f31862d4975"
                            alt=""
                            width="300px"
                            height="200px"
                        />
                    </div>
                </div>
                <div className={style.containerSomos}>
                    <img
                        src="https://media.zenfs.com/en/comingsoon_net_477/c5f45db37f146ada2079b1aedecbe760"
                        alt=""
                        width="350px"
                    />
                    <div className={style.somos}>
                        <h3 className={style.titleBis}>Creada por</h3>
                        <p className={style.parrafo}>
                            En OnlyTrainers, nuestra misión es facilitar el acceso a
                            entrenamientos de calidad y ofrecer una experiencia única en el
                            mundo del fitness. Queremos brindar la oportunidad a personas de
                            todos los niveles de acondicionamiento físico para alcanzar sus
                            objetivos con el apoyo de entrenadores calificados y una comunidad
                            activa.
                        </p>
                    </div>
                </div>
                <section className={style.section}>
                    <div className={style.caracteristicas}>
                        <h3>Sinopsis</h3>
                        <p className={style.parrafoSection}>
                            "Rick y Morty" es una serie animada para adultos que sigue las aventuras interdimensionales del científico alcohólico Rick Sánchez y su nieto adolescente, Morty Smith. La serie se caracteriza por su humor absurdo y oscuro, que combina elementos de ciencia ficción, comedia y drama.
                        </p>
                        <img
                            src="https://d.newsweek.com/en/full/1825057/rick-morty-season-5.webp?w=1600&h=900&q=88&f=1aa79d1810ced3f9a5379f31862d4975"
                            alt=""
                            width="300px"
                            height="200px"
                        />
                    </div>
                </section>
                <section className={style.section}>
                    <div className={style.caracteristicas}>
                        <h3>Creada por</h3>
                        <img
                            src="https://media.zenfs.com/en/comingsoon_net_477/c5f45db37f146ada2079b1aedecbe760"
                            alt=""
                            width="300px"
                        />
                        <p className={style.parrafoSection}>
                            En OnlyTrainers, te brindamos la oportunidad de entrenar con los
                            mejores profesionales del fitness. Nuestros entrenadores altamente
                            calificados están listos para guiarte y ayudarte a alcanzar tus
                            objetivos de acondicionamiento físico. Ya sea que seas principiante
                            o tengas experiencia, encontrarás un entrenador perfecto para ti.
                        </p>
                    </div>
                </section>
                <h2 className={style.title}>Creador</h2>
                <section className={style.sectionCreadores}>
                    <div className={style.caracteristicas}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                            alt=""
                            width="50px"
                            height="50px"
                        />
                        <p>Juan Pablo Vasquez Jaramillo</p>
                        <p>Full Stack Web Developer</p>
                        <a href="">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                                alt=""
                                width="20px"
                                height="20px"
                            />
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Landing;