import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { ObtenerPorPagina, paginaActual, userSearch} from '../../redux/actions';
import estilo from './paginado.module.css'
import Cards from '../../components/Cards/Cards'
import Filtros from '../Filtros/filtros.jsx';
const Paginado = () => {

    const dispatch = useDispatch();
    const personajesXPag = useSelector(state => state.CharactersByPage);
    const Characters = useSelector(state => state.allCharacters.length);
    const currentPag = useSelector(state => state.paginaActual);
    const userSearchG = useSelector(state => state.userSearchB);
    const [cantidadPorPag] = useState(20);
    const paginasDisponibles = []
    
    for (let i = 0; i <= Math.ceil(Characters / cantidadPorPag); i++) {
        paginasDisponibles.push(i)
    }


    const paginado = (pageNumber) => {
        dispatch(paginaActual(pageNumber));
        dispatch(ObtenerPorPagina(pageNumber));
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

    const limpiarBusqueda = () => {
        dispatch(paginaActual(0));
        dispatch(ObtenerPorPagina(0));
        dispatch(userSearch(false));
    }
    return (
        <>
            <div>
                <Filtros></Filtros>
            </div>
            <div className={estilo.contenedorCards}>
                {
                    userSearchG
                        ? <button onClick={() => limpiarBusqueda()}>VOLVER</button>
                        :
                        <>
                            <button onClick={() => prevButton()}>anterior</button>
                            {paginasDisponibles && paginasDisponibles.map(number => (
                                number == currentPag
                                    ?
                                    <div className={estilo} key={number}>
                                        <button className={estilo.buttonpageSelected} onClick={() => paginado(number)}> {number + 1}  </button>
                                    </div>
                                    :
                                    <div className={estilo.contenedor} key={number}>
                                        <button className={estilo.buttonpage} onClick={() => paginado(number)}> {number + 1}  </button>
                                    </div>
                            ))}
                            <button onClick={() => nextButton()}>siguiente</button>
                        </>
                }
            </div>
            <div>
                <div className={estilo.contenedorCards}>
                    <Cards characters={personajesXPag} />
                </div>
            </div>

        </>
    )
}
export default Paginado
