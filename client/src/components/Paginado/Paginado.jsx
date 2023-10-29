import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import estilo from './paginado.module.css'
import Cards from '../../components/Cards/Cards'
import { ObtenerPorPagina, paginaActual } from '../../redux/actions';
const Paginado = () => {

    const dispatch = useDispatch();
    const probando = useSelector(state => state.CharactersByPage);
    console.log("PERSONAJES PAGINADO", probando);
    // const Characters = useSelector(state => state.allCharacters.length);
    // console.log("PERSONAJES", Characters);
    const Characters = [826]
    const currentPag = useSelector(state => state.paginaActual);
    const [cantidadPorPag] = useState(20);
    const paginado = (pageNumber) => {
        dispatch(paginaActual(pageNumber));
        dispatch(ObtenerPorPagina(pageNumber));
    }
    // useEffect(() => {
    //     dispatch(getAllCharacters());
    // })


    console.log("PAGINA", currentPag);

    const paginasDisponibles = []

    for (let i = 0; i <= Math.ceil(Characters / cantidadPorPag); i++) {
        paginasDisponibles.push(i)
    }

    const prevButton = () => {
        if (currentPag != 0) {
            dispatch(paginaActual((currentPag - 1 + paginasDisponibles.length) % paginasDisponibles.length));
            dispatch(ObtenerPorPagina(currentPag - 1));
        }
    }
    const nextButton = () => {
        if (currentPag != 42) {
            dispatch(paginaActual((currentPag + 1) % paginasDisponibles.length));
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
