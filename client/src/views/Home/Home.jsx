import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAllCharacters } from "../../Redux/actions";
import Cards from '../../components/Cards/Cards'
import estilo from './Home.module.css';
import Paginado from '../../components/Paginado/Paginado';

const Home = () => {
    const dispatch = useDispatch();
    const allCharacters = useSelector((state) => state.allCharacters);
    console.log("AAA",allCharacters);
    const [currentPag, setCurrentPag] = useState(1);
    const [cantidadPorPag] = useState(10);
    const indiceUltimaReceta = currentPag * cantidadPorPag
    const indicePrimerReceta = indiceUltimaReceta - cantidadPorPag
    const currentCharacters = allCharacters.slice(indicePrimerReceta, indiceUltimaReceta)

    const paginado = (pageNumber) => {
        setCurrentPag(pageNumber)
    }
    useEffect(() => {
        dispatch(getAllCharacters());
    })
    return (
        <>
            <div className={estilo.contenedor}>
                <Paginado cantidadPorPag={cantidadPorPag} allCharacters={allCharacters.length} paginado={paginado} />
                <Cards characters={currentCharacters} />
            </div>
        </>
    )
}

export default Home;
