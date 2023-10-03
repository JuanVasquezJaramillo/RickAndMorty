import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import estilo from './detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ObtenerEpisodios, ObtenerPorId } from '../../redux/actions';


const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const character = useSelector(state => state.characterDetail);
    const Apariciones = useSelector(state => state.episodios);

    const probando = character?.episode?.map(index => {
        return index.split('/').pop();
    })

    useEffect(() => {
        dispatch(ObtenerPorId(id));
        // dispatch(ObtenerEpisodios(probando[0]));
        // dispatch(ObtenerEpisodios(probando[character.episode.length > 1 ? character.episode.length - 1 : 0]));

    }, [id])
    console.log("APARICIONES", Apariciones);
    // const epiNombres = Apariciones.filter(epi => probando.includes(epi.id))

    // console.log("APARCIONES SPLIT Y POP", epiNombres);


    return (
        <div className={estilo.contenedor}>
            <div>
                <img src={character?.image && character.image} alt='' className={estilo.pruebaImg} />
                <h1>Name: {character?.name && character.name}</h1>
                <h1>Status: {character?.status && character.status}</h1>
                <h1>Species: {character?.species && character.species}</h1>
                <h1>Gender: {character?.gender && character.gender}</h1>
                <h1>Origin: {character?.origin?.name && character.origin?.name}</h1>
            </div>
            <div>
                {
                    character.episode && (
                        <>
                            <h2>
                                Primera aparición:
                                {character.episode[0]}
                            </h2>
                            <h2>
                                Última aparición:
                                {character.episode[character.episode.length > 1 ? character.episode.length - 1 : 0]}
                            </h2>
                        </>
                    )
                }
            </div>
            <Link to='/home'>
                <button className={estilo.boton}>inicio</button>
            </Link>
        </div>
    )
}
export default Detail;