import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import estilo from './detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ObtenerEpisodios, ObtenerEpisodiosPorPersonaje, ObtenerPorId, limpiarEpisodios } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const character = useSelector(state => state.characterDetail);
    const Apariciones = useSelector(state => state.episodios);

    useEffect(() => {
        dispatch(ObtenerPorId(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (character && character.episode) {
            dispatch(ObtenerEpisodiosPorPersonaje(character))
                .then(() => setLoading(false));
        }
    }, [character, dispatch]);


    console.log("APARICIONES", Apariciones);
    // const epiNombres = Apariciones.filter(epi => probando.includes(epi.id))

    // console.log("APARCIONES SPLIT Y POP", epiNombres);


    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className={estilo.contenedorPadre}>
                <div className={estilo.contenedorInfo}>
                    <img src={character?.image && character.image} alt='' className={estilo.pruebaImg} />
                    <h1>Name: {character?.name && character.name}</h1>
                    <h1>Status: {character?.status && character.status}</h1>
                    <h1>Species: {character?.species && character.species}</h1>
                    <h1>Gender: {character?.gender && character.gender}</h1>
                    <h1>Origin: {character?.origin?.name && character.origin?.name}</h1>
                </div>
                <div className={estilo.contenedorEpisode}>
                    <div className={estilo.subContenedorEpisode}>

                        {
                            character.episode && (
                                <div>
                                    {
                                        loading ? (
                                            <p>Cargando...</p>
                                        ) : <>
                                            <h2 className={estilo.titleP1}>Primera aparición:</h2>
                                            <p className={estilo.parrafo}>
                                                {Apariciones[0]?.name}
                                            </p>
                                            <div className={estilo.contenedorVideo}>
                                                <iframe width="703" height="350" src="https://www.youtube.com/embed/TLzuSk13Wsw" title="Rick and Morty | Pain is Pleasure | Adult Swim UK 🇬🇧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                        </>
                                    }

                                </div>
                            )
                        }
                    </div>
                    <div className={estilo.subContenedorEpisode2}>
                        {
                            character.episode && (
                                <div>
                                    {
                                        loading ? (
                                            <p>Cargando...</p>
                                        ) : <>
                                            <h3 className={estilo.titleP1}>
                                                Última aparición:
                                            </h3>
                                            <p className={estilo.parrafo}>
                                                {Apariciones[Apariciones.length > 1 ? Apariciones.length - 1 : 0]?.name}
                                            </p>
                                            <iframe width="703" height="403" src="https://www.youtube.com/embed/TLzuSk13Wsw" title="Rick and Morty | Pain is Pleasure | Adult Swim UK 🇬🇧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </>
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Detail;