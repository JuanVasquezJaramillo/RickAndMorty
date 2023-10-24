import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import estilo from './paginado.module.css'
import Cards from '../../components/Cards/Cards'
import { ObtenerPorPagina } from '../../redux/actions';
const Paginado = () => {

    const dispatch = useDispatch();
    const probando = useSelector(state => state.allCharacters);
    console.log("ASDSDSDs", probando);
    const Characters = [800];
    const [currentPag, setCurrentPag] = useState(1);
    const [cantidadPorPag] = useState(19.5);
    const indiceUltimaReceta = currentPag * cantidadPorPag
    const indicePrimerReceta = indiceUltimaReceta - cantidadPorPag
    const currentCharacters = Characters.slice(indicePrimerReceta, indiceUltimaReceta)

    const paginado = (pageNumber) => {
        setCurrentPag(pageNumber);
        dispatch(ObtenerPorPagina(pageNumber));
    }
    // useEffect(() => {
    //     dispatch(getAllCharacters());
    // })


    console.log("HOLAAAAAAAAA", currentPag);

    const paginasDisponibles = []

    for (let i = 1; i <= Math.ceil(Characters / cantidadPorPag); i++) {
        paginasDisponibles.push(i)
    }

    const prevButton = () => {
        if (currentPag != 1) {
            setCurrentPag((prevIndex) => (prevIndex - 1 + paginasDisponibles.length) % paginasDisponibles.length);
            dispatch(ObtenerPorPagina(currentPag - 1));
        }
    }
    const nextButton = () => {
        if (currentPag != 42) {
            setCurrentPag((prevIndex) => (prevIndex + 1) % paginasDisponibles.length);
            dispatch(ObtenerPorPagina(currentPag + 1));
        }
    }

    return (
        <>
            <div className={estilo.contenedorCards}>
                <button onClick={() => prevButton()}>anterior</button>
                {paginasDisponibles && paginasDisponibles.map(number => (
                    number == currentPag
                        ?
                        <div className={estilo} key={number}>
                            <button className={estilo.buttonpageSelected} onClick={() => paginado(number)}> {number}  </button>
                        </div>
                        :
                        <div className={estilo.contenedor} key={number}>
                            <button className={estilo.buttonpage} onClick={() => paginado(number)}> {number}  </button>
                        </div>
                ))}
                <button onClick={() => nextButton()}>siguiente</button>
            </div>
            <div>
                <div className={estilo.contenedorCards}>
                    <Cards characters={probando} />
                </div>
            </div>
        </>
    )
}
export default Paginado
