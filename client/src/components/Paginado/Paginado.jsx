import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import estilo from './paginado.module.css'
import Cards from '../../components/Cards/Cards'
import { ObtenerPorPagina, paginaActual, userSearch } from '../../redux/actions';
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
            <div className={estilo.contenedorFiltros}>
                <select name="" id="" >
                    <option value="any">CUALQUIER ORDEN</option>
                    <option value="asc">↑ ORDERNAR DE A-Z</option>
                    <option value="desc">↓ ORDERNAR DE Z-A</option>
                </select>
                <select name="" id="">
                    <option value="anyStatus">CUALQUIER ESTADO</option>
                    <option value="alive">VIVO</option>
                    <option value="dead">MUERTO</option>
                    <option value="unknown">DESCONOCIDO</option>
                </select>
                <select name="" id="">
                    <option value="anyGender">CUALQUIER GÉNERO</option>
                    <option value="Female">FEMENINO</option>
                    <option value="Male">MASCULINO</option>
                    <option value="unknownGender">DESCONOCIDO</option>
                </select>
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
