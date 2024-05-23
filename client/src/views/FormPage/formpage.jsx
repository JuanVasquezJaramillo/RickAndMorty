import React, { useEffect } from "react";
import estilo from './formpage.module.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import { useDispatch, useSelector } from "react-redux";
import { obtenerEpisodios } from "../../redux/actions.js";

const FormPage = () => {
    const dispatch = useDispatch();
    const episodios = useSelector(state => state.allEpisodes);
    console.log("BANDERA FORM", episodios);

    useEffect(() => {
        dispatch(obtenerEpisodios());
    }, [dispatch])

    return (
        <>
            <div>
                <div>
                    <NavBar></NavBar>
                </div>
                <div className={estilo.contenedorPadre}>
                    <div className={estilo.contenedorInfo}>
                        <img src="" alt='' className={estilo.pruebaImg} />
                        <h1>Name: </h1>
                        <input type="text" />
                        <h1>Status: </h1>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">vivo</label>
                            <input type="checkbox" />
                            <label htmlFor="">muerto</label>
                            <input type="checkbox" />
                            <label htmlFor="">desconocido</label>
                        </div>
                        <h1>Species: </h1>
                        <input type="text" name="" id="" />
                        <h1>Gender: </h1>
                        <select name="" id="">
                            <option value="">Desconocido</option>
                            <option value="">Mujer</option>
                            <option value="">Hombre</option>
                        </select>
                        <h1>Origin: </h1>
                        <input type="text" />
                    </div>
                    <div className={estilo.contenedorEpisode}>
                        <div className={estilo.subContenedorEpisode}>
                            <div>
                                <>
                                    <h2 className={estilo.titleP1}>Primera aparición:</h2>
                                    {/* INCLUIR UN SELECT EL CUAL TRAIGA TODOS LOS EPIDODIOS Y LOS CONVIERTA EN UNA OPCIÓN ELEGIBLE PARA EL USUARIO. */}
                                    <div className={estilo.contenedorTituloEpisodio}>
                                        <div>
                                            <select name="" id="">
                                                {episodios?.map((epi) => (
                                                    <>
                                                        <option value="">{epi.name}</option>
                                                    </>
                                                ))}
                                            </select>
                                        </div>
                                        <p className={estilo.tituloEpisodio}>

                                        </p>
                                    </div>
                                    <div className={estilo.contenedorVideo}>
                                        <input type="text" style={{width: "716", height: "403", backgroundColor: "white", color: "black"}} />
                                        {/* <iframe width="716" height="403" src="https://www.youtube.com/embed/BFTSrbB2wII" title="Rick and Morty Season 1 extended promo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                     */}
                                    </div>
                                </>
                            </div>
                        </div>
                        <div className={estilo.subContenedorEpisode2}>
                            <div>
                                <>
                                    <h3 className={estilo.titleP1}>
                                        Última aparición:
                                    </h3>
                                    <div className={estilo.contenedorTituloEpisodio}>
                                        <div>
                                            <select name="" id="">
                                                {episodios?.map((epi) => (
                                                    <>
                                                        <option value="">{epi.name}</option>
                                                    </>
                                                ))}
                                            </select>
                                        </div>
                                        <p className={estilo.tituloEpisodio}>

                                        </p>
                                    </div>
                                    {/* <iframe width="703" height="403" src="https://www.youtube.com/embed/TLzuSk13Wsw" title="Rick and Morty | Pain is Pleasure | Adult Swim UK 🇬🇧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                         */}
                                    <div className={estilo.contenedorVideo}>
                                        {/* <iframe width="716" height="403" src="https://www.youtube.com/embed/L3naN_LG_sU" title="Rick and Morty | S5 Finale Cold Open: The Crow Man | adult swim" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>);
}

export default FormPage;